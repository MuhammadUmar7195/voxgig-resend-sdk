// Runnable example using the generated TypeScript/JavaScript SDK.
// Read-only: GET /domains via client.Domain().list()
import { ResendSDK } from '../resend-sdk/ts/dist/ResendSDK.js'

const key = process.env.RESEND_API_KEY
if (!key) {
  console.error('Set RESEND_API_KEY first (see .env.example).')
  process.exit(2)
}

const client = new ResendSDK({
  apikey: key,
})

try {
  const domains = await client.Domain().list()
  console.log('Status: Success')
  console.log('Domains returned:', Array.isArray(domains) ? domains.length : domains)
} catch (err) {
  console.error('SDK request failed:', err?.message || err)
  process.exit(1)
}
