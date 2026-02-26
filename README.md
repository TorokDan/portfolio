# Török Dániel — Portfolio Website

A personal portfolio website for **Török Dániel**, a Backend Developer based in Hungary.
This README is intended as a full reference for recreating or rewriting the site from scratch using an AI assistant (e.g. GitHub Copilot).

---

## 🚀 Quick Start

```bash
npm install
npm start
# Opens at http://localhost:3000
```

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | ^18.2.0 | UI framework (Create React App) |
| react-dom | ^18.2.0 | DOM rendering |
| react-icons | ^4.7.1 | Icon library (used throughout all components) |
| swiper | ^8.4.5 | Carousel/slider (installed but not used in current version) |
| Plain CSS | — | All styling — no CSS framework, no Tailwind |
| Google Fonts | Poppins | Font (weights: 300, 400, 500, 600) |

**Bootstrapped with:** Create React App (`react-scripts` 5.0.1)

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html              # Basic HTML shell, <div id="root">
├── src/
│   ├── index.js                # React DOM render entry point
│   ├── index.css               # Global styles, CSS variables, resets
│   ├── App.jsx                 # Root component — assembles all sections
│   ├── assets/
│   │   ├── bg-texture.png      # Background texture (dark, subtle)
│   │   ├── stand.png           # Hero section image (full-body standing photo)
│   │   ├── torokdannew.jpg     # About section portrait photo
│   │   └── cv.pdf              # Downloadable CV
│   └── components/
│       ├── header/
│       │   ├── Header.jsx
│       │   ├── CTA.jsx
│       │   ├── HeaderSocials.jsx
│       │   └── header.css
│       ├── nav/
│       │   ├── Nav.jsx
│       │   └── nav.css
│       ├── about/
│       │   ├── About.jsx
│       │   └── about.css
│       ├── experience/
│       │   ├── Experience.jsx
│       │   └── experience.css
│       ├── learnings/
│       │   ├── Learnings.jsx
│       │   └── learnings.css
│       ├── jobs/
│       │   ├── Jobs.jsx
│       │   └── jobs.css
│       ├── contact/
│       │   ├── Contact.jsx
│       │   └── contact.css
│       ├── footer/             # Exists but NOT rendered (commented out in App.jsx)
│       ├── portfolio/          # Exists but NOT rendered (commented out in App.jsx)
│       └── services/           # Exists but NOT rendered (commented out in App.jsx)
```

---

## 🎨 Design System (CSS Variables)

Defined in `src/index.css` under `:root`:

```css
--color-bg: #1f1f38;                        /* dark navy/purple — main background */
--color-bg-variant: #2c2c6c;                /* slightly lighter navy — card backgrounds */
--color-primary: #4db5ff;                   /* bright blue — accents, links, icons */
--color-primary-variant: rgba(77,181,255,0.4); /* transparent blue — hover borders */
--color-white: #fff;
--color-light: rgba(255,255,255,0.6);       /* muted white — subtitles, labels */

--container-width-lg: 75%;
--container-width-md: 86%;
--container-width-sm: 90%;

--transition: all 400ms ease;
```

**Font:** `Poppins` (Google Fonts), weights 300/400/500/600  
**Background:** `bg-texture.png` applied as `background-image` on `body`  
**Scrollbar:** hidden via `::-webkit-scrollbar { display: none }`  
**Smooth scroll:** `html { scroll-behavior: smooth }`

### Responsive Breakpoints

| Breakpoint | Width |
|-----------|-------|
| Medium | `max-width: 1024px` |
| Small | `max-width: 600px` |

---

## 🧩 Sections & Components

### 1. `<Header>` — Hero Section
- Full viewport height (`100vh`)
- Displays: **name**, **job title**, CTA buttons, social icons, profile image
- Sub-components:
  - **`CTA`**: Two buttons — "Download CV" (links to `cv.pdf`) and "Contact Me" (scrolls to `#contact`)
  - **`HeaderSocials`**: Vertical column of social icons on the left side — LinkedIn, GitHub, Codewars
- Profile image: `stand.png` in a pill-shaped container with blue gradient background
- "Jump Down" link (`#contact`) rotated 90° on the right side

### 2. `<Nav>` — Fixed Bottom Navigation
- Fixed at bottom center of screen
- Frosted glass effect: `backdrop-filter: blur(15px)`, dark background
- Icon-only links using `react-icons`, active state tracked via `useState`
- Links to: `#` (home), `#about`, `#experience`, `#learnings`, `#jobs`, `#contact`
- Icons used: `AiOutlineHome`, `AiOutlineUser`, `BiBookBookmark`, `MdOutlineSchool`, `CgWorkAlt`, `BiMessageAltEdit`

### 3. `<About>` — About Me
- Two-column grid: image left (35%), text right (50%), gap 15%
- Image in a rounded card with blue gradient border
- Bio text (see **Personal Info** section below)
- "Contact Me" button linking to `#contact`

### 4. `<Experience>` — My Knowledge (Skills)
- Section title: "My Knowledge"
- Two-column grid of skill cards
- Each card: category title (blue) + 2-column grid of items with checkmark icon (`BsPatchCheckFill`)
- **4 categories:**
  1. **Programming and Scripting Languages**: Java, Python, Bash, Groovy
  2. **Frameworks and Tools**: Spring Boot, Maven, Gradle, Kubernetes, Docker, Git
  3. **Databases and Search Technologies**: MySQL, Elasticsearch, Kibana
  4. **Frontend**: HTML, CSS, JavaScript
- Card hover: background turns transparent, blue border appears

### 5. `<Learnings>` — Schools
- Section title: "Schools"
- Two sub-sections: **Schools** and **Trainings**
- **Schools:**
  - University Of Óbuda | 2022 – present | Computer Science And Engineering
- **Trainings:**
  - GreenFox Academy | 2022 | Java backend
    - Technologies: Java, Spring Boot, gradle, JUnit 5
    - Displayed with `BiCode` icons

### 6. `<Jobs>` — Experience (Work History)
- Section title: "Experience"
- Card-based list, 3 entries, each shows: time period, company name, job title, description
- Icon: `MdWork` per job entry
- **Work history:**
  1. **Liligo** | 2023 – present | Junior Java Developer
     - "Responsible for planning, developing, and maintaining Java Spring Boot-based microservices with a focus on clean code and scalability."
  2. **Erste Bank** | 2023 | Integration Developer
     - "I was developing the integration between software platforms, programs and applications in the infrastructure of the company"
  3. **National Police Headquarters Of Hungary** | 2020 – 2022 | Linux System Administrator
     - "I was responsible for company's local Linux Network – GNU/Linux installation, management, and troubleshooting"

### 7. `<Contact>` — Contact Me
- Section title: "Contact Me"
- Three contact cards side by side, each with icon, label, and link:
  1. **Email** — `dani.torok8@gmail.com` — mailto link "Send a message"
  2. **LinkedIn** — `https://www.linkedin.com/in/török-dániel` — "View Profile"
  3. **GitHub** — `https://github.com/TorokDan` — "Visit GitHub"
- Icons: `MdOutlineEmail`, `FaLinkedin`, `FaGithub`

### Not Rendered (exist in codebase, not in App.jsx):
- `<Footer>` — Logo + navigation links
- `<Portfolio>` — Project showcase (6 projects with GitHub/demo links)
- `<Services>` — 3 services (UI/UX, Web Dev, Content — lorem placeholder text)

---

## 👤 Personal Information

| Field | Value |
|-------|-------|
| Name | Török Dániel |
| Role | Backend Developer |
| Email | dani.torok8@gmail.com |
| LinkedIn | https://www.linkedin.com/in/török-dániel |
| GitHub | https://github.com/TorokDan |
| Codewars | https://codewars.com/users/Osztor |

**Bio (About section):**
> "I am a passionate backend developer who strives to write clean, maintainable, and easy-to-understand code. Over the years, I have specialized in Java-based technologies and the design and development of microservices architectures. My professional journey began as a Linux system administrator, where I gained valuable experience in managing systems and ensuring their reliability. However, I soon discovered that my true passion lies in coding and creating solutions that directly impact users and businesses. In my free time, I enjoy sports like inline skating and wall climbing, which help me stay focused and energized. I am also deeply committed to continuous learning and improving my skills, exploring new technologies, and expanding my knowledge to become a better developer every day. For me, programming is not just a job but a craft I take pride in perfecting."

---

## 📐 Layout Patterns

- **Global container:** centered, `width: var(--container-width-lg)` (75% desktop)
- **Section spacing:** `margin-top: 8rem` between sections
- **Section headings:** `<h2>` in `--color-primary` (blue), centered, `margin-bottom: 3rem`
- **Cards:** `background: var(--color-bg-variant)`, `border-radius: 2rem`, hover reveals blue border
- **Buttons (`.btn`):** outlined blue; `.btn-primary` filled blue
- **Links:** `--color-primary` default, white on hover

---

## 🔗 App Component Order

```jsx
<Header />     {/* Hero */}
<Nav />        {/* Fixed bottom navigation */}
<About />      {/* #about */}
<Experience /> {/* #experience */}
<Learnings />  {/* #learnings */}
<Jobs />       {/* #jobs */}
<Contact />    {/* #contact */}
```

---

## 📦 Available Scripts

```bash
npm start       # Dev server at http://localhost:3000
npm run build   # Production build to /build
npm test        # Run tests
```
