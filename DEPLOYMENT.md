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
- Railway service: `RINET-CENTER`
- Railway service ID: `247c86fe-e781-47dc-89ba-81c16362e2a5`
- Railway service URL: `https://rinet-center-production.up.railway.app`
- Migration status: Railway deployment complete; `www` domains connected through Wix DNS; apex domains remain on Wix A records and should redirect to the canonical `www.rinetcenter.com`

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

Verified on Railway on 2026-05-21:

- Deployment ID: `a12434f1-621d-4c4e-8349-3ac81ac18262`
- Deployment status: `Active`
- Build driver: `nixpacks-v1.41.0`
- Runtime setup: `nodejs_22`, `npm-9_x`
- Install command: `npm ci`
- Build command: `npm run build`
- Start command: `npm run start`
- Runtime log: `Next.js 14.2.35`, `Ready in 204ms`
- Healthcheck: passed on `/en`
- Public Railway URL: `https://rinet-center-production.up.railway.app`

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

Current Railway public URL:

- `https://rinet-center-production.up.railway.app`

## Domain strategy

Canonical domain:

- `www.rinetcenter.com`

Redirect domains:

- `rinetcenter.com` -> `https://www.rinetcenter.com`
- `rinetcenter.ca` -> `https://www.rinetcenter.com`
- `www.rinetcenter.ca` -> `https://www.rinetcenter.com`
- `rinet.center` -> `https://www.rinetcenter.com`
- `www.rinet.center` -> `https://www.rinetcenter.com`

Prefer Railway-level redirect domains when available. Because Wix does not support CNAME, ALIAS, or ANAME records at the apex for these domains, apex hostnames should be redirected in Wix while `www` alternate hostnames are redirected by the Next.js app with explicit `301` responses.

Current domain status:

- `www.rinetcenter.com`: CNAME now points to Railway and returns the RINET Center site.
- `www.rinetcenter.ca`: CNAME now points to Railway; middleware `301` redirect sends requests to `https://www.rinetcenter.com`.
- `www.rinet.center`: CNAME now points to Railway; middleware `301` redirect sends requests to `https://www.rinetcenter.com`.
- `rinetcenter.com`: apex remains on Wix A records; configure Wix redirect to `https://www.rinetcenter.com`.
- `rinetcenter.ca`: apex remains on Wix A records; configure Wix redirect to `https://www.rinetcenter.com`.
- `rinet.center`: apex remains on Wix A records; configure Wix redirect to `https://www.rinetcenter.com`.

Railway DNS records to create in the active DNS host, currently Wix:

| Hostname | Type | Name | Value |
|---|---|---|---|
| `www.rinetcenter.com` | CNAME | `www` | `c25e05yb.up.railway.app` |
| `www.rinetcenter.com` | TXT | `_railway-verify.www` | `railway-verify=14077e618c61288ba87f8607a9c15d2cb5c704487bbddb4752fdc6c6a9bb16ad` |
| `rinetcenter.com` | CNAME | `@` | `6ia684jq.up.railway.app` |
| `rinetcenter.com` | TXT | `_railway-verify` | `railway-verify=d3271c8f4033c904ef5445c4d4aefe8adad85563a2da8cfb7ab8fa1d75bde27f` |
| `www.rinetcenter.ca` | CNAME | `www` | `0vptgha0.up.railway.app` |
| `www.rinetcenter.ca` | TXT | `_railway-verify.www` | `railway-verify=d998f1f7a62e8b815656738f54e50740cd02dc3ef31ce43958fe194de5fd2035` |
| `rinetcenter.ca` | CNAME | `@` | `gbtcmpd4.up.railway.app` |
| `rinetcenter.ca` | TXT | `_railway-verify` | `railway-verify=3c17cc39b37740a6c290011ecd056a198aa8bdaeec8696949ae3758820c5f68e` |
| `www.rinet.center` | CNAME | `www` | `p4olh7eh.up.railway.app` |
| `www.rinet.center` | TXT | `_railway-verify.www` | `railway-verify=439da943cb5d5948b0aeb4cfaf089d0fe5dbaa2ef0b02e9dcaca463c72ba2685` |
| `rinet.center` | CNAME | `@` | `0onxq40n.up.railway.app` |
| `rinet.center` | TXT | `_railway-verify` | `railway-verify=05ad6580e52af769e65eadf0702c9742ebfa7577daae9c9cd645e568d0526623` |

Important: Wix rejected CNAME records at `@`; keep the apex A records on Wix and use Wix redirects for apex hostnames unless Railway provides A records or the DNS zone is moved to a provider with CNAME flattening. Do not delete or alter MX, SPF, DKIM, DMARC, or existing Google verification TXT records while adding the Railway verification TXT records.

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

1. Create all custom domains in Railway first. Done on 2026-05-21.
2. Capture Railway's required CNAME/TXT targets. Done on 2026-05-21; see the DNS table above.
3. In Wix DNS, update only `www` CNAME records and Railway TXT verification records.
4. Preserve all MX, SPF, DKIM, DMARC, and verification TXT records.
5. Configure Wix redirects for apex hostnames to `https://www.rinetcenter.com`.
6. Keep Wix site active for 24-48 hours as rollback.

### Alternative path: move DNS hosting to GoDaddy

Use this only after exporting or screenshotting the full Wix DNS zone.

1. Recreate all required records in GoDaddy before changing nameservers.
2. Preserve Google Workspace MX for `rinet.center`.
3. Preserve Google Workspace MX for `rinetcenter.ca` unless Steven confirms it is unused.
4. Preserve SPF, DKIM, DMARC, and Google verification TXT records.
5. Change nameservers from Wix to GoDaddy.
6. Verify mail first, then web.

## Acceptance checklist

- [x] Railway service created from `RusingAcademy/RINET-CENTER` on `main`
- [x] Build green on Railway
- [x] Healthcheck `/en` returns `200`
- [x] Railway logs clean after boot
- [x] `*.up.railway.app/` redirects to `/en`
- [x] `*.up.railway.app/en` and `/fr` return `200`
- [x] All locale routes return `200`
- [x] Images load correctly
- [x] `https://www.rinetcenter.com` serves the new Next.js site
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
