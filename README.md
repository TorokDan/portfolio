# Török Dániel — Portfolio

Personal portfolio website for Török Dániel, a Backend Developer based in Hungary.
Built with React, styled with plain CSS, with multi-language support (English / Hungarian).
Deployed via GitHub Actions to DigitalOcean App Platform.

## Quick Start

```bash
npm install
npm start       # http://localhost:3000
npm run build   # production build
```

---

## How to Update Content

All content lives in two files — one per language.
**You never need to touch any other file** just to update text, add a job, or change a link.

| File | Language |
|------|----------|
| `src/data/content.en.json` | English |
| `src/data/content.hu.json` | Hungarian |

Both files have the same structure. Edit both to keep languages in sync.

### Add a new job

Open `src/data/content.en.json` (and the Hungarian version) and add an object to the `jobs` array:

```json
"jobs": [
  {
    "company": "New Company",
    "period": "2024 - present",
    "title": "Senior Java Developer",
    "description": "What you do there."
  }
]
```

### Add a new skill

Add an item to an existing category's `items` array, or add a whole new category:

```json
"skills": [
  {
    "category": "New Category",
    "items": ["Tool A", "Tool B"]
  }
]
```

### Update personal info, bio or links

Edit the `personal` block:

```json
"personal": {
  "name": "Your Name",
  "title": "Your Job Title",
  "bio": "Your bio text...",
  "email": "your@email.com",
  "linkedin": "https://linkedin.com/in/...",
  "github": "https://github.com/...",
  "codewars": "https://codewars.com/users/..."
}
```

### Translate UI labels (buttons, section headings)

Every visible text label is in the `ui` block of each content file:

```json
"ui": {
  "header":    { "scrollDown": "...", "downloadCv": "...", "contactButton": "..." },
  "about":     { "heading": "...", "contactButton": "..." },
  "skills":    { "heading": "..." },
  "education": { "heading": "..." },
  "jobs":      { "heading": "..." },
  "contact":   { "heading": "...", "emailAction": "...", "linkedinAction": "...", "githubAction": "..." }
}
```

---

## Language Switching

The site supports English and Hungarian out of the box.
A toggle in the bottom navigation bar switches between **EN** and **HU** — no page reload needed.

To add a third language:
1. Create `src/data/content.xx.json` (copy from `.en.json` and translate)
2. Register it in `src/context/LanguageContext.jsx`:
   ```js
   import xx from '../data/content.xx.json'
   const languages = { en, hu, xx }
   ```
3. Add a button to `src/components/nav/Nav.jsx`

---

## Project Structure

```
src/
├── data/
│   ├── content.en.json        <- English content  (edit to update the site)
│   └── content.hu.json        <- Hungarian content (edit to update the site)
├── context/
│   └── LanguageContext.jsx    <- language state, useLanguage() hook
├── components/
│   ├── header/     hero section, CTA buttons, social links
│   ├── nav/        fixed bottom navigation + language toggle
│   ├── about/      bio and profile photo
│   ├── experience/ skill categories
│   ├── learnings/  education and training history
│   ├── jobs/       work history
│   └── contact/    email, LinkedIn, GitHub links
├── assets/         images, CV pdf, background texture
├── App.jsx
└── index.css       global styles and CSS variables
```
