# OMEGA FINDER — next development steps

## Version 0.1.0
- Responsive French front-end.
- Local validation of optional email, phone, and profile-name clues.
- No external lookup, no data persistence, and no account authentication.

## Next phase
1. Make the repository private before any real personal data or secrets are introduced.
2. Choose and configure an independent backend project for OMEGA FINDER.
3. Implement owner authentication using the backend's supported secure authentication flow.
4. Enforce authorization on the server/database, not only in the interface.
5. Add a private owner dashboard with session expiry and sign-out.
6. Add a guided recovery checklist using only user-authorized records and official recovery pages.
7. Test privacy, access restrictions, and mobile usability before packaging an Android app.

## Backend decision required
The backend has not been selected or configured for OMEGA FINDER. Do not assume that another project’s Supabase or Appwrite credentials can be reused. Keep all credentials out of this repository.

## Facebook integration reality
There is no general public Facebook API that lets this app search Facebook's private account database by arbitrary email or phone number. The app must not promise that it can discover hidden linked contact details or last activity. It can guide the owner through official recovery and organize clues the owner already has.
