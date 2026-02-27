# DigitalOcean App Platform Setup Guide

This guide explains everything you need to do in DigitalOcean and GitHub to get auto-deploys working.

---

## How it works

- **Push to `master`** → GitHub Actions deploys the app to DigitalOcean App Platform automatically.
- **Open a Pull Request** → GitHub Actions deploys a temporary **preview app** and posts the URL as a PR comment.
- **Close/Merge a PR** → The preview app is automatically deleted.

App Platform handles the build (`npm run build`) and hosting. You do **not** commit the `build/` folder.

---

## Step 1 — Create a DigitalOcean API Token

1. Go to [DigitalOcean Control Panel → API](https://cloud.digitalocean.com/account/api/tokens)
2. Click **Generate New Token**
3. Give it a name (e.g. `portfolio-github-actions`)
4. Select **Full Access** (or at minimum: Apps → Read/Write)
5. Copy the token — you only see it once

---

## Step 2 — Authorize GitHub on App Platform (one-time)

DigitalOcean needs permission to access your GitHub repo. Do this **once** by creating any app manually:

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click **Create App**
3. Select **GitHub** as the source and authorize DigitalOcean when prompted
4. You can cancel/delete this app after authorization — the permission persists

> If you already have an existing portfolio app connected to GitHub, this step is already done.

---

## Step 3 — Add the API Token as a GitHub Secret

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `DIGITALOCEAN_ACCESS_TOKEN`
4. Value: paste the token from Step 1
5. Click **Add secret**

---

## Step 4 — Push this branch and open a Pull Request

Push this branch (`feat/digitalocean-deploy`) to GitHub and open a PR targeting `master`.  
The **Deploy PR Preview** workflow will run and post a preview URL in the PR comments.

When the PR is merged into `master`, the **Deploy to DigitalOcean App Platform** workflow runs and deploys the live site.

---

## App Spec (`.do/app.yaml`)

The file `.do/app.yaml` defines how App Platform builds and serves the app.  
On first run, the GitHub Action will **create a new app** automatically using this spec.  
On subsequent runs it **updates the existing app**.

You do not need to touch the DigitalOcean dashboard after the first deployment.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Workflow fails with "unauthorized" | Check that `DIGITALOCEAN_ACCESS_TOKEN` secret is set correctly |
| Workflow fails with "no app found" | The first run creates the app — check Actions logs for details |
| Build fails on App Platform | Check `build_command` in `.do/app.yaml` |
| Preview URL not posted in PR | Check that the repo has `pull-requests: write` permission in the workflow |
