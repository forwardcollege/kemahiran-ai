# Google authentication setup

Kemahiran.AI uses Google OAuth through Supabase Auth. The first successful sign-in creates the account; there is no separate registration form, password or email magic-link flow.

This document records the required external configuration. Do not place a Google client secret or Supabase secret/service-role key in the repository, browser environment or chat.

## 1. Supabase development project

Create a development project in the **Forward College** Supabase organisation when authorised. Keep production separate.

From **Project Settings → API**, copy only these public values into `.env.local`:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

Apply the versioned migration in `supabase/migrations/` before testing favourites. Do not expose a secret or service-role key to the Next.js application.

## 2. Google Cloud OAuth client

In the existing **Kemahiran AI** Google Cloud project:

1. Configure the Google Auth Platform audience for external Google accounts. While the app is in testing mode, add each test user explicitly.
2. Configure the branding, privacy-policy URL and support contact.
3. Request only `openid`, `userinfo.email` and `userinfo.profile` scopes.
4. Create a **Web application** OAuth client.
5. Add `http://localhost:3000` as a development JavaScript origin.
6. Add the Supabase provider callback shown in the Supabase Google provider screen as an authorised redirect URI. It normally has this form:

   ```text
   https://your-project-ref.supabase.co/auth/v1/callback
   ```

7. Enter the Google client ID and client secret directly in **Supabase → Authentication → Providers → Google**. Never place the client secret in `.env.local`.

Production origins and callbacks must be added deliberately when deployment is authorised. Do not use wildcard redirect URLs.

## 3. Supabase URL configuration

For local testing, configure:

- Site URL: `http://localhost:3000`
- Redirect allowlist: `http://localhost:3000/auth/callback`

Add the exact production callback only when deployment is authorised:

```text
https://kemahiran.ai/auth/callback
```

Disable unused email/password providers so Google remains the only visible and enabled MVP method.

## 4. Acceptance check

Test both Malay and English flows:

1. Open a public resource while signed out and confirm it remains readable and copyable.
2. Select the favourite button and confirm the explanatory dialog opens.
3. Continue with Google and confirm the callback returns to the initiating page.
4. Confirm the originally selected resource is saved automatically.
5. Confirm the favourite appears on another signed-in browser/device.
6. Confirm another user cannot read or delete the first user’s favourite.
7. Sign out and confirm all public resource pages remain accessible.

Pilot the flow with real DELIMa or other managed Google Workspace accounts before production approval. If organisational policy blocks a meaningful group, reopen the fallback-authentication decision rather than adding another method speculatively.
