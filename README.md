# voxgig-resend-sdk

A TypeScript SDK for the [Resend](https://resend.com) email API, **generated** from Resend's official
OpenAPI spec with the [Voxgig SDK Generator](https://voxgig.com/sdk) (`@voxgig/sdkgen`).
Built as an assessment of the generator. Not affiliated with Resend or Voxgig.

See [REPORT.md](REPORT.md) for detailed test results, generator observations, and recommendations.

## API

Resend REST API, base URL `https://api.resend.com`, `Authorization: Bearer <key>`.
Requests must include a `User-Agent` header, or the API answers 403 (code 1010). The generated SDK supplies this automatically.
Spec: <https://resend.com/openapi.yaml>

## Prerequisites

- Node.js 24 or later (generator requirement)
- A Resend account and an API key (optional for offline tests, required for live calls)

## Generate

```bash
./scripts/generate.sh
```

This downloads the spec, scaffolds a Voxgig project in `resend-sdk/`, adds the `ts` target and the
`test` feature, generates, runs `doctor`, then builds and tests the TypeScript target. Logs go to `logs/`.

## Usage

```javascript
import { ResendSDK } from './resend-sdk/ts/dist/ResendSDK.js'

const client = new ResendSDK({
  apikey: process.env.RESEND_API_KEY,
})

// List domains (read-only)
const domains = await client.Domain().list()
console.log(domains)
```

A runnable example is provided in `examples/domains.mjs`:

```bash
export RESEND_API_KEY=re_...
node examples/domains.mjs
```

## Running Tests

```bash
cd resend-sdk/ts && npm install && npm run build && npm test
```

Generated tests run offline and need no credentials.

## Known Limitations and Observed Issues

- Only the TypeScript target (`ts`) is generated with the offline `test` feature.
- Generated code is intentionally left unedited by hand; model changes belong in `resend-sdk/.sdk/model/`.
- **Doc-example runner failure**: 2 out of 527 tests in the generated test suite fail (`RetrievedAttachment.load` in `ts/README.md` and `ts/REFERENCE.md`) because synthetic example code generated for `RetrievedAttachment` omitted the required ancestor path parameter `email_id`. All 474 unit/pipeline/clean tests pass.
- **Error reporting**: HTTP errors are currently mapped to generic messages (`ResendSDK: <op>: request: <status>: <statusText>`), omitting structured provider error bodies from thrown exceptions.
- Rate limit is 10 requests/second per team (Resend docs). Retry and rate-limiting features are opt-in.

## License

MIT. See [LICENSE](LICENSE).
