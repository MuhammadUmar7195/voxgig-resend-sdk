# Developer-Experience Report: Voxgig SDK Generator x Resend API

## Summary
- API: Resend (email). Spec: official OpenAPI 3.0 at https://resend.com/openapi.yaml
- Generator: `@voxgig/sdkgen` (v4.34.7 via `@voxgig/create-sdkgen@0.30.7`), target `ts`, feature `test`
- Catalogue check: Confirmed via CSV check (`curl -fsSL https://voxgig.com/sdk/voxgig-sdk.csv | grep -i -E "resend"`): `no 'resend' row in catalogue CSV`.
- Outcome: Scaffolding, TypeScript target generation, doctor verification, and TypeScript compilation succeeded. 474 out of 527 tests passed. 2 doc-snippet tests failed (`ts/README.md` and `ts/REFERENCE.md` runnable example tests failed with runtime error `missing: email_id` on `RetrievedAttachment().load({ id: '...' })`). Live call could not be performed against a live account because `RESEND_API_KEY` was not configured; error handling was safely verified against the live endpoint using a throwaway key.

## Setup and Workflow
- Documented path followed: `scripts/generate.sh` automated the official sequence from `voxgig/create-sdkgen AGENTS.md`:
  1. Downloaded official OpenAPI spec: `curl -fL https://resend.com/openapi.yaml -o resend-openapi.yaml`
  2. Scaffolded project: `npm create @voxgig/sdkgen -- resend -d ./resend-openapi.yaml -o ./resend-sdk`
  3. Added TypeScript target: `npx voxgig-sdkgen target add ts`
  4. Added test feature: `npx voxgig-sdkgen feature add test`
  5. Generated SDK: `npm run generate`
  6. Verified scaffold: `npx voxgig-sdkgen doctor`
  7. Built TypeScript target: `npm run build`
  8. Ran offline tests: `npm test`
- Environment: Node `v24.21.0`, npm `11.19.0` (Node 24+ is strictly enforced by the generator).
- Warnings observed during generation:
  - `WARN: model/sdkgen flow-step-unreachable flow step(s) BasicAutomationRunListItemFlow#0 (list), BasicBroadcastFlow#0 (create), BasicContactTopicsResponseSuccessFlow#0 (list), BasicReceivedEmailFlow#1 (load), BasicTemplateFlow#0 (create), BasicUpdateContactTopicsResponseSuccessFlow#0 (update), BasicUpdateDomainResponseSuccessFlow#0 (update), BasicUpdateEmailOptionFlow#0 (update) switched off: the call they make reaches no route of the operation. Every route needs an action, or a path parameter the step does not give.`

## Time Breakdown

| Phase | Minutes | Notes |
|---|---|---|
| Choosing API / catalogue check | | Verified catalogue CSV for "resend" |
| Running the generator | | Scaffolded with `@voxgig/create-sdkgen`, added `ts` and `test` |
| Validation (build, tests, live call) | | Ran doctor, build, test suite (474 pass / 2 fail), and live smoke check |
| README / LICENSE / REPORT | | Authored report, updated README, created runnable example |
| Publishing to GitHub | | Local commits, secrets check |
| **Total** | | Biggest time sink: Analyzing doc-example test failures |

## What Worked Well
- Fully automated scaffolding directly from an OpenAPI 3.0 YAML spec.
- `npx voxgig-sdkgen doctor` verified scaffold conformity instantly (`.sdk matches the scaffold (0 additive)`).
- Clean TypeScript build without any compiler or type errors (`tsc --build src test` passed cleanly).
- Built-in credential leakage sweep (`clean: swept 811 surface(s), 0 leak(s)`) provides strong peace of mind against accidental secret leaks in the SDK pipeline.
- Automatic User-Agent handling (`Mozilla/5.0 (compatible; ResendSDK/1.0)`) in `FetcherUtility.ts` prevents Resend's 403 (code 1010) blocker without requiring developer intervention.

## Friction and Confusion
- **Strict Node 24 requirement**: The generator refuses to run on Node 22 or older LTS versions. Clear error is provided, but requires environments to be updated to Node 24+.
- **Doc-example tests failed out of the box**: `npm test` failed 2 tests (`ts/README.md — every runnable example executes in test mode` and `ts/REFERENCE.md — every runnable example executes in test mode`). The generator's example synthesizer emitted `client.RetrievedAttachment().load({ id: 'retrieved_attachment_id' })`, but the underlying operation requires both `email_id` and `attachment_id`.
- **Structured error payloads discarded**: When Resend returns an HTTP 400 with `{ "name": "validation_error", "message": "API key is invalid" }`, the SDK throws `ResendSDK: list: request: 400: Bad Request`, losing the specific validation message.

## Testing Results

| Check | Command | Result |
|---|---|---|
| Generate | `npm run generate` | PASS (Scaffolded 44 entities, 47 paths, 83 methods) |
| doctor | `npx voxgig-sdkgen doctor` | PASS (`.sdk matches the scaffold (0 additive)`) |
| Build | `npm run build` | PASS (`tsc --build src test` compiled cleanly) |
| Offline tests | `npm test` | FAIL (474 passed, 51 skipped, 2 failed out of 527 tests) |
| Raw baseline | `node scripts/smoke-raw.mjs` | PASS (Verified 400 `validation_error - API key is invalid` with test key) |
| Live read via SDK (GET /domains) | `node examples/domains.mjs` | Verified (Returned `ResendSDK: list: request: 400: Bad Request` with test key) |

### Test Failure Details:
```text
✖ ts/README.md — every runnable example executes in test mode (371.871758ms)
  AssertionError [ERR_ASSERTION]: ts/README.md runnable TypeScript snippets failed to run in test mode:
  snippet 58 threw at runtime: ResendSDK: load: Operation "load" has no endpoint whose path parameters are all given (missing: email_id).

✖ ts/REFERENCE.md — every runnable example executes in test mode (529.096976ms)
  AssertionError [ERR_ASSERTION]: ts/REFERENCE.md runnable TypeScript snippets failed to run in test mode:
  snippet 96 threw at runtime: ResendSDK: load: Operation "load" has no endpoint whose path parameters are all given (missing: email_id).
```

Could not be performed: Live read call against an active paid/free account with valid credentials, as `RESEND_API_KEY` was not provided in the environment.

## SDK Quality
- **User-Agent Header**: Verified. In `FetcherUtility.ts`, `DEFAULT_USER_AGENT = 'Mozilla/5.0 (compatible; ResendSDK/1.0)'` is attached to requests automatically when absent.
- **Optional `limit` & Pagination**: Resend endpoints allow optional `limit` and cursor parameters (`after`, `before`). The SDK supports passing these via match criteria, but lacks high-level auto-pagination or generator-level cursor helpers.
- **429 & Rate Limiting**: Resend limits traffic to 10 req/s. The generated SDK leaves the `retry` and `ratelimit` features inactive by default.
- **Error Shape**: The SDK transforms HTTP error responses into generic string errors (`ResendSDK: <op>: request: <status>: <statusText>`). Resend's structured error object (`name`, `message`) is not exposed on the thrown error.
- **Entity Naming**: Core resources are cleanly mapped (`Domain`, `Email`, `Webhook`, `Contact`), but 13 response-wrapper entities (e.g., `AddContactToSegmentResponseSuccess`, `UpdateDomainResponseSuccess`, `RemoveSegmentResponseSuccess`) were generated as standalone entities rather than unified operations.

## Recommended Improvements
1. **Synthesize all required path parameters in doc examples for nested/multi-parameter operations**
   - *Observed Problem*: `RetrievedAttachment().load({ id: ... })` omitted the required `email_id` ancestor path parameter, causing doc-example tests to fail out of the box with `missing: email_id`.
   - *Proposed Change*: Ensure `@voxgig/docgen` identifies all mandatory path parameters across all matching operation routes and includes mock values for each in generated documentation examples.
   - *DX Benefit*: Generated SDKs will achieve 100% passing tests out of the box.
2. **Preserve and expose structured API error responses in thrown errors**
   - *Observed Problem*: API responses containing useful error bodies (e.g., `{ name: "validation_error", message: "API key is invalid" }`) are masked behind `400: Bad Request`.
   - *Proposed Change*: Populate `err.data` or `err.response` with the parsed response body on `ResendError` when requests fail.
   - *DX Benefit*: Developers can programmatically inspect error reasons without intercepting raw network calls.
3. **Consolidate `*ResponseSuccess` schemas into parent entity operations**
   - *Observed Problem*: Unwieldy entities such as `UpdateDomainResponseSuccess` and `RemoveTopicResponseSuccess` clutter the client API namespace.
   - *Proposed Change*: Enhance `@voxgig/apidef` heuristics to fold response-typed schemas into standard methods on the root entity (`domain.update()`, `topic.remove()`).
   - *DX Benefit*: Intuitive, idiomatic SDK surface matching developer expectations.

## Final Assessment
The Voxgig generator delivers a remarkably fast path from an OpenAPI specification to a strongly-typed, runnable TypeScript SDK with offline testing and clean auth plumbing. The only blocker preventing a 100% green test run is a minor documentation generator bug where a required ancestor path parameter (`email_id`) was omitted in the synthesized example for `RetrievedAttachment.load()`. Per instructions, this issue is reported accurately rather than worked around by hand-editing generated SDK files.
