# Vercel Deployment Guide - SPA 404 Fix

## Problem Summary
Your React/Vite SPA was showing "404: NOT_FOUND" on routes like `/booking`, `/services` because Vercel was not redirecting all routes to `index.html` for client-side routing to work.

## Solution Overview
The issue has been fixed with an optimized `vercel.json` configuration that:
1. **Rewrites all routes to index.html** - Allows TanStack Router to handle client-side routing
2. **Specifies the build command** - Ensures Vite builds correctly to the `dist` folder
3. **Includes cache headers** - Optimizes performance for production
4. **Sets production environment** - Ensures builds are optimized

---

## ✅ Fixed Files

### Updated: vercel.json
Located at: `/vercel.json` (root of your project)

```json
{
  "buildCommand": "bun run build",
  "installCommand": "bun install",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": {
    "NODE_ENV": "production"
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/index.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

### No Changes Needed
- **vite.config.ts** ✅ - Already using `@lovable.dev/vite-tanstack-config` (optimized for TanStack)
- **package.json** ✅ - Build scripts are correct
- **src/router.tsx** ✅ - TanStack Router is properly configured

---

## 🚀 Step-by-Step Deployment Instructions

### Step 1: Push Changes to GitHub
```bash
# In your project directory
git add vercel.json VERCEL_DEPLOYMENT_GUIDE.md
git commit -m "Fix: Configure Vercel for SPA routing"
git push origin main
```

### Step 2: Verify Vercel Configuration
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **luxespace-design-studio** project
3. Go to **Settings** → **Build & Development Settings**
4. Verify these settings match:
   - **Build Command:** `bun run build`
   - **Output Directory:** `dist`
   - **Framework:** Vite (should be auto-detected)
   - **Install Command:** `bun install`

### Step 3: Clear Cache & Redeploy
1. In Vercel dashboard, go to **Deployments**
2. Click the **three dots (...)** next to latest deployment
3. Select **Redeploy** (this will use the updated vercel.json)
4. ⏳ Wait for deployment to complete (should take 1-2 minutes)

### Step 4: Verify Deployment
Test these URLs to ensure all routes work:
- ✅ `https://luxespace-design-studio.vercel.app/` - Home page
- ✅ `https://luxespace-design-studio.vercel.app/booking` - Booking page
- ✅ `https://luxespace-design-studio.vercel.app/services` - Services page
- ✅ `https://luxespace-design-studio.vercel.app/projects` - Projects page
- ✅ `https://luxespace-design-studio.vercel.app/about` - About page
- ✅ `https://luxespace-design-studio.vercel.app/contact` - Contact page

If you see the app load (not 404), the fix is working! ✅

---

## 🔍 What Each Config Does

### rewrites
```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```
- **Matches:** All routes (e.g., `/booking`, `/services`, `/about`)
- **Action:** Serves `index.html` instead of looking for physical files
- **Why:** TanStack Router handles routing in the browser, not on the server

### headers
```json
"headers": [
  {
    "source": "/assets/(.*)",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "public, max-age=31536000, immutable"
      }
    ]
  },
  {
    "source": "/index.html",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "public, max-age=0, must-revalidate"
      }
    ]
  }
]
```
- **Assets (1 year cache):** Vite generates files with content hashes (e.g., `app-abc123.js`). These never change, so we cache them for 1 year for better performance.
- **index.html (no cache):** The HTML file might reference different JS files, so we don't cache it. Browsers always fetch the latest version.

### outputDirectory & buildCommand
- **outputDirectory: "dist"** - Vite outputs the built app here (Vercel serves this folder)
- **buildCommand: "bun run build"** - Runs `vite build` which creates the `dist` folder
- **installCommand: "bun install"** - Ensures dependencies are installed before building

---

## ❓ Troubleshooting

### Still seeing 404 errors?
1. **Clear browser cache:** Press `Ctrl+Shift+Delete` and clear everything
2. **Hard refresh:** Press `Ctrl+Shift+R`
3. **Check Vercel logs:**
   - Go to Deployments → Click deployment → Scroll to "Build Logs"
   - Look for errors related to `bun build`

### Build fails on Vercel?
1. **Verify bun.lockb exists** - This file locks dependency versions
   - Run `git add bun.lockb` if missing and push to GitHub
2. **Check Node version** - Vercel should auto-detect correctly, but verify in project settings
3. **Manually trigger redeploy** - Sometimes Vercel's cache needs clearing

### Routes work locally but not on Vercel?
1. Run `npm run build` (or `bun run build`) locally
2. Run `npm run preview` (or `bun run preview`)
3. Test routes at `http://localhost:4173/booking`, etc.
4. If they work here, the issue is Vercel configuration (make sure vercel.json is correct)

---

## 📋 Project Structure (Correct Path)
Your vercel.json is in the correct location:
```
luxespace-design-studio/
├── vercel.json ← THIS FILE (Root of project)
├── package.json
├── vite.config.ts
├── src/
│   ├── router.tsx
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx (Home)
│   │   ├── booking.tsx
│   │   ├── services.tsx
│   │   ├── projects.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   └── components/
└── dist/ (Generated on build, NOT in git)
```

---

## 🎯 Key Takeaways

| Issue | Root Cause | Solution |
|-------|-----------|----------|
| 404 on `/booking` | Vercel looking for physical `/booking` file | `vercel.json` rewrites to index.html |
| Routes work locally | Vite dev server handles routing | Vercel needs explicit config for production |
| After build it works | `npm run preview` emulates production routing | vercel.json ensures same behavior on Vercel |

---

## 📚 Additional Resources
- [Vercel Docs - SPA Routing](https://vercel.com/docs/concepts/projects/project-settings#rewrites)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## ✨ Summary
Your app is now configured for production! The 404 errors should be resolved, and all routes will work properly on Vercel.

**Next step:** Push to GitHub and redeploy on Vercel. You're good to go! 🚀
