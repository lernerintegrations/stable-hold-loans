# WORKFLOW.md - RentRefi Site (Lovable + GitHub)

> Quick-reference workflow for the stable-hold-loans project.
> For full project context, see CLAUDE.md in the project root.

---

## Project Info

| Field | Value |
|-------|-------|
| Repo | github.com/lernerintegrations/stable-hold-loans |
| Local path | C:\Users\skyma\Documents\stable-hold-loans |
| Hosting | Lovable (auto-deploys from `main` branch) |
| Domain | rentrefi.com |
| Framework | Vite 5 + React 18 + TypeScript + Tailwind |
| Dev server | localhost:5173 |

---

## Initial Setup (One Time)

```bash
# 1. Clone the repo
cd C:\Users\skyma\Documents
git clone https://github.com/lernerintegrations/stable-hold-loans.git

# 2. Open in VS Code
cd stable-hold-loans
code .

# 3. Install dependencies
npm install

# 4. Verify dev server works
npm run dev
# Visit http://localhost:5173 - should see the RentRefi site
# Ctrl+C to stop

# 5. Create the dev branch (work here, not on main)
git checkout -b dev
git push -u origin dev
```

---

## Daily Workflow

### Start of Session

```bash
# Open terminal in VS Code (Ctrl + backtick)
cd C:\Users\skyma\Documents\stable-hold-loans

# Pull latest changes
git checkout dev
git pull origin dev

# Start dev server
npm run dev
```

Open Claude Code from the VS Code sidebar. It will read CLAUDE.md automatically.

### While Building

- Make changes via Claude Code
- Review in browser at localhost:5173
- Commit after each completed section or meaningful change:

```bash
git add .
git commit -m "description of what changed"
```

### End of Session

```bash
# 1. Tell Claude Code:
# "Update CLAUDE.md changelog with today's date and what we changed."

# 2. Commit and push everything
git add .
git commit -m "End of session: [summary]"
git push origin dev

# 3. Stop dev server
Ctrl+C
```

---

## Deploying to Production

Lovable auto-deploys from `main`. Merging to `main` = pushing live to rentrefi.com.

```bash
# Make sure dev is clean and pushed
git checkout dev
git add .
git commit -m "Ready for deploy"
git push origin dev

# Merge to main
git checkout main
git pull origin main
git merge dev
git push origin main

# Go back to dev for continued work
git checkout dev
```

**After pushing to main:** Wait 1-2 minutes, then check rentrefi.com to verify the deploy.

---

## Important Rules

1. **Never work directly on `main`.** Always work on `dev`, merge when ready.
2. **Never remove `lovable-tagger`** from devDependencies. It breaks Lovable sync.
3. **No server-side code.** This is a static SPA. Forms post to GHL webhooks or n8n.
4. **No em dashes in copy.** Use commas, periods, or colons.
5. **CLAUDE.md must be updated** at the end of every work session.

---

## Branch Strategy

| Branch | Purpose | Auto-deploys? |
|--------|---------|---------------|
| `main` | Production (live at rentrefi.com) | Yes, via Lovable |
| `dev` | Active development | No |
| `feature/*` | Optional: for large features before merging to dev | No |

For small/routine changes, `dev` is sufficient. Use feature branches for large changes you want to review before merging to `dev` (e.g., full page rebuilds, calculator integration).

```bash
# Create a feature branch (optional)
git checkout dev
git checkout -b feature/columbia-landing-page

# Work on it, commit as normal, then merge back to dev
git checkout dev
git merge feature/columbia-landing-page
git branch -d feature/columbia-landing-page
```

---

## Troubleshooting

### "npm run dev" fails
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Lovable sync issues after local changes
Lovable has 2-way sync with GitHub. If you see conflicts:
1. Always trust the GitHub version (your local pushes)
2. If Lovable made changes via its UI, pull before working locally:
   ```bash
   git pull origin main
   git checkout dev
   git merge main
   ```

### "fatal: not a git repository"
You are in the wrong directory. Navigate to the project root:
```bash
cd C:\Users\skyma\Documents\stable-hold-loans
```

### Changes not showing on rentrefi.com
- Did you merge to `main`? Dev branch does not auto-deploy.
- Did you push? `git push origin main`
- Wait 1-2 minutes for Lovable to build and deploy.
- Hard refresh the site: Ctrl+Shift+R

---

## Key URLs

| Resource | URL |
|----------|-----|
| Live site | https://rentrefi.com |
| GitHub repo | https://github.com/lernerintegrations/stable-hold-loans |
| GHL funnels | https://get.rentrefi.com |
| Pre-qual app (Vercel) | Skylar's Vercel account |
| n8n workflow | https://sldigitalmedia.app.n8n.cloud |
| GHL webhook (hero form) | https://services.leadconnectorhq.com/hooks/BFpydo68ZM7YR9ezSPDb/webhook-trigger/98421fc2-c4b7-4d2d-8ff0-48857b3b6371 |
| n8n pre-qual webhook | https://sldigitalmedia.app.n8n.cloud/webhook/rentrefi-prequal |
