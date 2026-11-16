# Security policy — OMEGA FINDER

## Current status
OMEGA FINDER is an early prototype. The current front end performs local input validation only. It does not search Facebook, contact Facebook, store submitted values, or authenticate an owner.

## Non-negotiable boundaries
- Use the tool only to help recover accounts belonging to the person using it, or accounts for which that person has explicit authorization.
- Never request, collect, store, guess, test, or transmit passwords.
- Never bypass login, identity checks, two-factor authentication, rate limits, or platform protections.
- Never scrape private Facebook data or claim access to Facebook's internal account database.
- Do not infer or fabricate an account's last activity, linked email, or linked phone number.
- Treat every possible match as unverified until the account owner confirms it through an official platform flow.

## Privacy requirements before real use
1. Make this GitHub repository private before adding personal data, private test records, API keys, or backend configuration.
2. Do not put secrets in HTML, CSS, JavaScript, Git history, screenshots, or public issue reports.
3. Keep privileged operations on a server-side backend. Never embed service-role keys or admin credentials in the Android app or browser.
4. Collect the minimum data necessary, explain why it is needed, and provide a way to clear it.
5. Use HTTPS, access controls, rate limits, and audit logs that avoid recording sensitive values.
6. Restrict the owner dashboard on the server; hiding a page or adding a client-side password is not access control.

## Safe recovery sources
- The user's own email inboxes and archived messages.
- The user's own password manager or personal records, without asking the app to read passwords.
- Facebook's official account-recovery and identity-verification pages.
- Public profile information supplied by the user, treated only as a clue and not proof of ownership.

## Incident reporting
Do not submit passwords, verification codes, identity documents, or other sensitive information in GitHub issues. Report only a brief description of the security concern.
