// Baseline check that does NOT use the generated SDK: confirms the key works
// and shows what the raw API returns, so SDK behaviour can be compared to it.
// Read-only: GET /domains. Prints status and item count only, never the key.
const key = process.env.RESEND_API_KEY;
if (!key) { console.error("Set RESEND_API_KEY first (see .env.example)."); process.exit(2); }

const res = await fetch("https://api.resend.com/domains", {
  headers: { Authorization: `Bearer ${key}`, "User-Agent": "voxgig-resend-sdk-smoke/0.1" },
});
const body = await res.json().catch(() => null);
console.log("status:", res.status);
if (res.ok) console.log("domains:", Array.isArray(body?.data) ? body.data.length : "unexpected shape");
else console.log("error:", body?.name ?? "unknown", "-", body?.message ?? "");
process.exit(res.ok ? 0 : 1);
