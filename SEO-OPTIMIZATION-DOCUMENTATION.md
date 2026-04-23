# SEO Optimization Documentation

Date: 2026-03-26
Project: manticorestudio.com (Next.js on Vercel)
Primary host: https://www.manticorestudio.com

## 1. Objective
This document summarizes all SEO-focused implementation changes completed in the codebase, including metadata, crawl/index controls, structured data, and performance-related image optimizations.

## 2. What Was Implemented

### 2.1 Global SEO Metadata (Site-wide)
Updated the root layout metadata to include modern SEO defaults.

File:
- src/app/layout.tsx

Changes:
- Added metadataBase: https://www.manticorestudio.com
- Added title default + template pattern
- Added default meta description
- Added canonical alternate for root
- Added Open Graph defaults (type, locale, siteName, url, title, description)
- Added Twitter card metadata defaults
- Added robots directives for index/follow and Googlebot preview limits

SEO impact:
- Establishes canonical base URL behavior for generated metadata
- Improves consistency of search snippets and social previews
- Provides crawler directives explicitly at framework metadata level

### 2.2 Page-Level Metadata (Route-specific)
Converted key pages to server metadata wrappers while preserving client interactivity.

Files:
- src/app/page.tsx
- src/app/home-client.tsx
- src/app/upcoming-projects/page.tsx
- src/app/upcoming-projects/upcoming-projects-client.tsx

Changes:
- Home route now exports route-specific Metadata from src/app/page.tsx
- Upcoming projects route now exports route-specific Metadata from src/app/upcoming-projects/page.tsx
- Client UI logic moved into dedicated client component files:
  - src/app/home-client.tsx
  - src/app/upcoming-projects/upcoming-projects-client.tsx

SEO impact:
- Ensures stable metadata generation in server route files
- Enables unique title/description/canonical/social metadata per route
- Avoids metadata limitations from fully client-only route files

### 2.3 Crawl & Indexing Controls
Added framework-native robots and sitemap routes.

Files:
- src/app/robots.ts
- src/app/sitemap.ts

Changes:
- Implemented robots rules:
  - Allow: /
  - Disallow: /admin, /seo-admin, /studio, /api/auth, /upcoming-projects
- Added sitemap location and host in robots output
- Implemented sitemap entries for:
  - /
  - (Upcoming projects entry intentionally parked and commented out)

SEO impact:
- Improves search engine discovery and crawl governance
- Prevents accidental indexing of non-public surfaces

### 2.6 Parked Route Policy (Upcoming Projects)
Upcoming projects was intentionally parked instead of deleted.

Files:
- src/app/upcoming-projects/page.tsx
- src/app/upcoming-projects/upcoming-projects-client.tsx
- src/app/sitemap.ts
- src/app/robots.ts

Changes:
- Route wrapper now returns notFound() to hide the page from public access.
- Original metadata and render logic are kept as commented re-enable templates.
- Client component is retained with comments explaining it is intentionally parked.
- Sitemap excludes /upcoming-projects while preserving commented re-enable block.
- Robots explicitly disallows /upcoming-projects.

Reason:
- There is no active user journey linking to this page currently.
- Keeping the code (instead of deleting) allows low-risk relaunch later.

Re-enable checklist:
1. Restore metadata + UpcomingProjectsClient render in src/app/upcoming-projects/page.tsx.
2. Re-enable /upcoming-projects entry in src/app/sitemap.ts.
3. Remove /upcoming-projects from robots disallow list in src/app/robots.ts.

### 2.4 Structured Data (JSON-LD)
Added Organization and WebSite schema blocks in layout.

File:
- src/app/layout.tsx

Changes:
- Injected JSON-LD script for Organization
- Injected JSON-LD script for WebSite
- Included brand URL/logo and sameAs social profiles

SEO impact:
- Helps search engines understand brand entity and site context
- Supports eligibility for richer search presentation

### 2.5 Image Optimization for Performance SEO
Migrated key UI images from raw img tags to Next Image and configured remote image host.

Files:
- src/app/home-client.tsx
- src/app/upcoming-projects/upcoming-projects-client.tsx
- next.config.ts

Changes:
- Replaced key img usages with next/image Image component
- Added explicit width/height/sizes for optimized delivery
- Configured images.remotePatterns for Supabase host:
  - hostname: slelguoygbfzlpylpxfs.supabase.co
  - pathname: /storage/v1/**

SEO impact:
- Improves Core Web Vitals potential (especially image loading stability)
- Reduces layout shift risk by declaring image dimensions

## 3. Domain Canonicalization
Status confirmed:
- manticorestudio.com redirects to www.manticorestudio.com

SEO impact:
- Consolidates canonical host signals and avoids www/non-www duplication

## 4. Validation Performed
Post-change validation included:
- Type/diagnostic checks for changed files
- Multiple successful production builds (next build)
- Route generation confirmed for:
  - /
  - /robots.txt
  - /sitemap.xml
- Note: /upcoming-projects remains a defined route but currently resolves via notFound() by design.

## 5. Additional Cleanup Performed (Supporting Work)
To reduce maintenance overhead and avoid dead code noise:
- Removed duplicate API file: src/app/api/projects.ts
- Removed many unused UI component files under src/components/ui
- Removed unreferenced files:
  - src/lib/auth-client.ts
  - src/hooks/use-mobile.ts
  - src/db/seed.ts
- Removed empty folders discovered during cleanup
- Pruned unused npm dependencies and devDependencies
- Added dotenv as an explicit devDependency because drizzle.config.ts imports it

Note:
- This cleanup supports long-term SEO maintainability by reducing code/dependency clutter, but is not itself a ranking signal.

## 6. Current SEO Baseline (After Changes)
Implemented now:
- Global metadata foundation: Yes
- Page-level metadata on key routes: Yes
- Canonical metadata defaults: Yes
- Robots route: Yes
- Sitemap route: Yes
- JSON-LD Organization/WebSite: Yes
- Image optimization for key UI images: Yes
- Upcoming projects availability: Parked intentionally (not deleted)

## 7. Recommended Next Steps
1. Add route-level Open Graph image URLs for home and upcoming-projects.
2. Add dynamic sitemap entries for future project detail routes.
3. Introduce project SEO fields in data model (slug, seoTitle, seoDescription, ogImage).
4. Add project detail pages with per-project metadata and canonical URLs.
5. Connect site to Google Search Console and submit sitemap.
6. Run Lighthouse + Search Console monitoring monthly for regression checks.

## 8. Rollback Guidance
If rollback is required, revert the following files first:
- src/app/layout.tsx
- src/app/page.tsx
- src/app/home-client.tsx
- src/app/upcoming-projects/page.tsx
- src/app/upcoming-projects/upcoming-projects-client.tsx
- src/app/robots.ts
- src/app/sitemap.ts
- next.config.ts

Then run:
- npm install
- npm run build
