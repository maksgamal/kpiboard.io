# KPIBoard Brevo email system

## MCP connection for Codex

Brevo uses a dedicated MCP token for AI clients. It is different from the REST API key used by the website and synchronization scripts.

1. In Brevo, open **SMTP & API → API Keys**, create a key, and enable the **MCP** option.
2. Copy `outreach/brevo-mcp.example.toml` into `C:\Users\<you>\.codex\config.toml`.
3. Create or update `C:\Users\<you>\.codex\.env`:

   ```env
   BREVO_MCP_TOKEN=your-real-mcp-token
   ```

4. Restart Codex Desktop. Do not put the MCP token in the repository or Vercel.

The MCP endpoint is `https://mcp.brevo.com/v1/brevo/mcp` and authentication uses the `Authorization: Bearer` header.

## REST API key location

Generate a standard Brevo API v3 key and store it only in the ignored project file `.env.local`:

```env
BREVO_API_KEY=your-real-rest-api-key
BREVO_SENDER_NAME=KPIBoard
BREVO_SENDER_EMAIL=verified-sender@your-domain.com
BREVO_REPLY_TO_EMAIL=reply@your-domain.com
BREVO_NURTURE_LIST_ID=123
```

Add the same website-related variables to Vercel project environment variables. `BREVO_MCP_TOKEN` must not be added to Vercel.

## Create inactive templates

Preview the six English opt-in templates without changing Brevo:

```powershell
npm run brevo:templates:dry-run
```

After the REST API key and verified sender are configured:

```powershell
npm run brevo:templates:create
```

This creates inactive templates only. It never activates or sends them.

## Automation blueprint

Use the `optInNurture` section of `brevo-automation.json` in Brevo Automations:

1. Trigger: contact added after Double Opt-In confirmation.
2. Require `LIFECYCLE_STAGE = OPTED_IN` and a known `ICP`.
3. Add the six template emails at days 0, 3, 7, 12, 18, and 26.
4. Exit on meeting booked, reply, opportunity, customer, unsubscribe, complaint, or hard bounce.
5. Suppress contacts without documented consent and anyone already in another sales/nurture automation.
6. Keep the workflow paused until sender/domain verification, links, footer, and test contacts are validated.

This directory contains the English email architecture for KPIBoard.

## Safety boundary

Brevo requires active, explicit, and specific recipient consent. Do not import or send to scraped,
purchased, rented, or guessed email addresses.

The configuration deliberately separates:

- `optInNurture`: consent-based emails that can be synchronized to Brevo as drafts.
- `icpColdOutreachLibrary`: copy-only B2B scenarios. Synchronization and sending are disabled.

The included script never sends or schedules a campaign. With `--apply`, it creates draft campaigns
for the opt-in nurture sequence only.

## Files

- `brevo-automation.json`: campaign copy, segments, flow logic, suppression, and measurement.
- `brevo-automation.schema.json`: safety-focused structure definition.
- `../scripts/brevo-sync-campaigns.mjs`: dry-run/draft creation utility.
- `../api/lead.js`: double opt-in website lead endpoint.

## Brevo setup

The implementation uses Brevo's REST API, not SMTP. REST is required for Double Opt-In contacts,
lists, and campaign drafts. An SMTP key from `https://app.brevo.com/settings/keys/smtp` is therefore
not needed and should not be added to this project.

1. Authenticate the sending domain in Brevo.
2. Create and verify a sender such as `hello@kpiboard.io`.
3. Create the list `KPIBoard — Confirmed Website Leads`.
4. Create a Double Opt-In transactional template.
5. The confirmation button in the DOI template must use `{{ params.DOIurl }}`.
6. Create the optional contact attributes listed in `brevo-automation.json`.
7. Add the required variables from `.env.example` to `.env.local` and Vercel.
8. Run `npm run validate`.
9. Run `npm run brevo:dry-run`.
10. Only after reviewing every draft, run `npm run brevo:create-drafts`.

API keys must remain server-side. Never place them in HTML, browser JavaScript, JSON campaign files,
Git, screenshots, or chat messages.

Create the REST API key at `https://app.brevo.com/settings/keys/api`. The key is shown once. Save it
directly as `BREVO_API_KEY` in `.env.local` and in the Vercel project environment; do not paste it
into source files.

## Build the automation in Brevo

Brevo's public campaign API creates campaign drafts, but the visual Automation workflow should be
configured in the Brevo UI:

1. Go to Automations and create a custom automation.
2. Trigger when a contact completes double opt-in and joins the confirmed leads list.
3. Add the six campaign emails in the order defined by `optInNurture.emails`.
4. Add the delays from the `day` values.
5. Before each email, exit contacts whose lifecycle stage is `MEETING_BOOKED`, `OPPORTUNITY`, or
   `CUSTOMER`.
6. Exit immediately on unsubscribe, complaint, hard bounce, or direct reply.
7. Apply the global suppression list and the frequency cap.
8. Keep the automation paused until the sender domain, lists, templates, links, and tracking have
   been reviewed.

## Commands

```powershell
npm run validate
npm run brevo:dry-run
npm run brevo:create-drafts
```

`brevo:create-drafts` changes the Brevo account by creating drafts. It still does not schedule or
send them.

## Campaign review checklist

- Confirm the recipient list contains only documented opt-ins.
- Confirm sender and reply-to addresses are verified.
- Confirm the physical business address in the default footer.
- Confirm unsubscribe links.
- Test the DOI flow using an internal test address.
- Test every CTA and UTM parameter.
- Confirm cold outreach content is not present in the Brevo draft list.
- Keep complaint rate below 0.1% and hard bounce rate below 2%.
