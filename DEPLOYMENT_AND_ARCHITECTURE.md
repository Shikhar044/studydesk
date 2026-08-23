# StudyDesk Marketing Website - Deployment & Architecture Reference

## 1. Git Repository & Vercel Deployment
* **GitHub Repository:** `https://github.com/Shikhar044/library-branding.git`
* **Default Branch:** `main`
* **Vercel Project Name:** `library-branding` (renamed domain to `library-desk.vercel.app`)
* **Vercel Framework Preset:** `Vite`
* **Live Vercel URL:** `https://library-desk.vercel.app`

---

## 2. Custom Domain Setup (`studydesk.in`)
When connecting the custom domain `studydesk.in` on Vercel, configure DNS records at your registrar:
* **Apex Domain (`studydesk.in`):**
  * Type: `A`
  * Name/Host: `@`
  * Value: `76.76.21.21`
* **WWW Subdomain (`www.studydesk.in`):**
  * Type: `CNAME`
  * Name/Host: `www`
  * Value: `cname.vercel-dns.com`

---

## 3. Multi-Tenant URL & Domain Architecture

### Overview of Structure
1. **Marketing Website (`studydesk.in` or `library-desk.vercel.app`):**
   * Static landing page for marketing, features, pricing, and onboarding new libraries.
2. **Main Application (`app.studydesk.in`):**
   * SaaS dashboard for library owners & managers to handle seat bookings, fees, and students.
3. **Individual Public Library Portals (`[library-slug].studydesk.in` or `library-desk.vercel.app/l/[library-slug]`):**
   * Dynamic portal for students of a specific study library to check seat availability or register.

### Execution Plan & Options

#### Option A: Subdomain-Based Routing (`[library-slug].studydesk.in`)
1. **Slug Generation on Onboarding:**
   * When a library owner registers (e.g. "Apex Library"), generate slug `apex-library`.
   * Store `slug` in Supabase `tenants` table.
2. **Vercel Wildcard Setup:**
   * Add `*.studydesk.in` to `library-main` Vercel project.
3. **Frontend Subdomain Resolution:**
   * React app reads `window.location.hostname`.
   * Extracts subdomain `apex-library` and loads that specific tenant's data.

#### Option B: Path-Based Routing (`library-desk.vercel.app/l/[library-slug]`)
1. Uses standard React Router path `/l/:tenantSlug`.
2. No wildcard DNS required; easy to run immediately on Vercel free subdomains.
