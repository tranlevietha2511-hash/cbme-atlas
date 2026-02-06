# CBME Atlas – JS-first Next.js + Supabase Skeleton

This is a **JavaScript-only** (no TypeScript) monorepo-style **single Next.js app** skeleton aligned with your CBME Atlas architecture:
- Next.js **App Router**
- API Routes for domain modules
- Supabase Postgres/Storage (migrations/policies/functions folders prepared)
- Clear separation: UI vs feature/domain logic vs server-only utilities
- Zod validation (recommended when using JS)

## Quick start (local)
1) Install deps:
```bash
npm i
```

2) Create `.env.local` from `.env.example` and fill values.

3) Run dev:
```bash
npm run dev
```

## Suggested module workflow
- Put domain logic in `src/features/<domain>/`
- Keep DB access in `*.repo.js`
- Keep orchestration in `*.service.js`
- Validate inputs in `*.schema.js`
- API routes should call services (avoid writing DB logic directly in routes)

## Folder map (high-level)
- `src/app/` : routes by role + `api/` routes
- `src/features/` : domain modules (curriculum, rubric, survey, 360, analytics, feedback, users)
- `src/server/` : server-only utilities (supabase client, auth/permissions, AI, jobs)
- `supabase/` : migrations / RLS policies / edge functions / seed
- `scripts/` : import/export + maintenance scripts
- `docs/` : architecture docs, ERD, runbooks

---
Generated skeleton: 2026-02-06
