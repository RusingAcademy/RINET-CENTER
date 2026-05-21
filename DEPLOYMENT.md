# RINET Center production deployment

This file tracks the Railway and domain launch plan for the RINET Center website.

## Current status

- Production canonical target: `https://www.rinetcenter.com`
- Railway project: `respectful-nature`
- Railway project ID: `54b2ebef-5753-4b0c-8674-beee468d8e4b`
- Railway environment: `production`
- Railway environment ID: `d2a1ae4e-c17a-4710-9a35-2db721f116a2`
- GitHub repo: `RusingAcademy/RINET-CENTER`
- Production branch: `main`
- Railway service URL: pending until the service is created
- Migration status: pre-production verification complete; Railway and DNS changes pending authenticated access

## Application verification

Verified locally on 2026-05-20 in production mode:

- Node runtime: `22`
- `npm run build`: passed
- Static generation: `22/22` pages generated
- `next start` with injected `PORT`: passed
- `/`: `307` redirect to `/en`
- `/en`, `/fr`, and all public locale routes: `200`
- `/sitemap.xml`: `200`
- `/robots.txt`: `200`

Public routes expected after deployment:

- `/en`
- `/fr`
- `/en/about`
- `/fr/about`
- `/en/programs`
- `/fr/programs`
- `/en/impact`
- `/fr/impact`
- `/en/events`
- `/fr/events`
- `/en/get-involved`
- `/fr/get-involved`
- `/en/donate`
- `/fr/donate`
- `/en/contact`
- `/fr/contact`
- `/sitemap.xml`
- `/robots.txt`

## Railway configuration

The repo contains `railway.json`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm run start",
    "healthcheckPath": "/en",
    "healthcheckTimeout": 60,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 5
  }
}
```

Important: keep the healthcheck on `/en`. The root `/` redirects to `/en`, and Railway healthchecks should not depend on redirect following.

Deployment steps:

1. In Railway project `54b2ebef-5753-4b0c-8674-beee468d8e4b`, create a new service from GitHub repo `RusingAcademy/RINET-CENTER`.
2. Select branch `main`.
3. Keep auto-deploy enabled.
4. Do not add environment variables for v1.
5. Let Nixpacks install, build, and start the app.
6. Generate or copy the service `*.up.railway.app` URL.
7. Verify `/en` returns `200` and the build logs show `22/22` generated pages.

## Domain strategy

Canonical domain:

- `www.rinetcenter.com`

Redirect domains:

- `rinetcenter.com` -> `https://www.rinetcenter.com`
- `rinetcenter.ca` -> `https://www.rinetcenter.com`
- `www.rinetcenter.ca` -> `https://www.rinetcenter.com`
- `rinet.center` -> `https://www.rinetcenter.com`
- `www.rinet.center` -> `https://www.rinetcenter.com`

Prefer Railway-level redirect domains instead of hardcoded application redirects.

## DNS inventory before migration

Observed on 2026-05-20:

### GoDaddy browser inventory

All three domains are registered in GoDaddy but currently use custom Wix nameservers:

- `ns8.wixdns.net`
- `ns9.wixdns.net`

GoDaddy DNS Management reports `DNS Provider: Wix` and does not allow record edits while those nameservers are active.

### Public DNS inventory

`rinet.center`:

- A: `185.230.63.107`, `185.230.63.171`, `185.230.63.186`
- WWW: `cdn1.wixdns.net`
- MX: Google Workspace records are present and must be preserved
- TXT: `google-site-verification=_wEqrOO2pm0eqEkB64p_QxBuGoiH73zuM8kZOKVPkME`

`rinetcenter.ca`:

- A: `185.230.63.107`, `185.230.63.171`, `185.230.63.186`
- WWW: `cdn1.wixdns.net`
- MX: Google Workspace records are present; do not assume this domain has no mail without confirmation
- TXT: `google-site-verification=bs4H1ZOVpOeqAKWo4bjh7EopKKWXLmBcQOm0XupiBs4`

`rinetcenter.com`:

- A: `185.230.63.107`, `185.230.63.171`, `185.230.63.186`
- WWW: `cdn1.wixdns.net`
- MX: no public MX answer observed
- TXT: `google-site-verification=6V4HQS2aaOL_3XFPUA6DuB31qzNI-BzYfI09WJFXW64`

## Migration plan

Because DNS is hosted at Wix, use one of these two safe paths:

### Preferred path: update DNS in Wix

1. Create all custom domains in Railway first.
2. Capture Railway's required A/CNAME targets.
3. In Wix DNS, update only web records for apex and `www`.
4. Preserve all MX, SPF, DKIM, DMARC, and verification TXT records.
5. Keep Wix site active for 24-48 hours as rollback.

### Alternative path: move DNS hosting to GoDaddy

Use this only after exporting or screenshotting the full Wix DNS zone.

1. Recreate all required records in GoDaddy before changing nameservers.
2. Preserve Google Workspace MX for `rinet.center`.
3. Preserve Google Workspace MX for `rinetcenter.ca` unless Steven confirms it is unused.
4. Preserve SPF, DKIM, DMARC, and Google verification TXT records.
5. Change nameservers from Wix to GoDaddy.
6. Verify mail first, then web.

## Acceptance checklist

- [ ] Railway service created from `RusingAcademy/RINET-CENTER` on `main`
- [ ] Build green on Railway
- [ ] Healthcheck `/en` returns `200`
- [ ] Railway logs clean after boot
- [ ] `*.up.railway.app/` redirects to `/en`
- [ ] `*.up.railway.app/en` and `/fr` return `200`
- [ ] All locale routes return `200`
- [ ] Images load correctly
- [ ] `https://www.rinetcenter.com` serves the new Next.js site
- [ ] Apex and alternate domains redirect with `301` to `https://www.rinetcenter.com`
- [ ] SSL valid for all hostnames
- [ ] `contact@rinet.center` receives a test email after DNS propagation
- [ ] Wix remains available as rollback for 24-48 hours
- [ ] Lighthouse targets met for `/en` and `/fr`
- [ ] Google Search Console updated and sitemap submitted

## Rollback

If web migration fails:

1. Restore the previous Wix A records:
   - `185.230.63.107`
   - `185.230.63.171`
   - `185.230.63.186`
2. Restore `www` to `cdn1.wixdns.net`.
3. Keep all mail records unchanged.
4. Confirm `https://www.rinetcenter.com` resolves to Wix again.

If email breaks:

1. Stop web changes.
2. Restore original MX/TXT mail records from the Wix or GoDaddy DNS backup.
3. Confirm MX resolution for `rinet.center`.
4. Send a new test email to `contact@rinet.center`.

## Contacts

- Owner: Steven Barholere
- Organization: Rusinga International Consulting Ltd. o/a RusingAcademy
- Project: RINET Center
- Technical handoff: Codex deployment session
