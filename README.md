# Som Rambhan Singh — Personal Portfolio Website

An architectural, high-impact, fully responsive personal portfolio website for **Som Rambhan Singh**, a Second-Year B.Sc. Computer Science undergraduate specializing in Data Science at **Pillai University – School of Computing**.

> *"Curiosity starts the process. Experimentation shapes the idea. Building makes it real."*

---

## 🏛️ Design Identity & Aesthetic

The website features an **architectural Swiss-contemporary / bento layout** designed for a high-impact technology innovator:

- **Typography System:**
  - **Display Headings:** **Syne** (Weights 600, 700, 800) — Bold, geometric, avant-garde architectural headlines.
  - **Body & Editorial:** **Plus Jakarta Sans** (Weights 300 to 800) — Highly readable modern grotesque.
  - **Data & Metadata:** **JetBrains Mono** — Monospaced technical labels, coordinates, and system tags.
- **Curated Natural Palette:** Warm Ivory (`#F4F1EA`), Soft Porcelain White (`#FAF9F6`), Deep Charcoal (`#1F231E`), Muted Olive (`#686C52`), Warm Grey (`#6E7166`), and Warm Sand (`#E0DBD0`).
- **Signature Opening Transition ("The Som Introduction"):** An architectural shutter reveal with typography wipe, dismissible on click or keypress.
- **Bento Magazine Layouts:** Asymmetrical modular cards, quick metric badges, interactive technology chips, and live architecture pipeline flows.
- **Direct Contacts:**
  - **Email:** [`i.somsinghh@gmail.com`](mailto:i.somsinghh@gmail.com)
  - **GitHub:** [`https://github.com/somsinghhh`](https://github.com/somsinghhh)
  - **LinkedIn:** [`https://www.linkedin.com/in/som-tech`](https://www.linkedin.com/in/som-tech)
- **Pure Web Standards:** Built using **100% Vanilla HTML5, CSS3, and ES6+ JavaScript**. Zero dependencies, zero build tools.

---

## 📁 Repository Structure

```text
SOM/
│
├── index.html              # Main HTML document with architectural bento layout
├── style.css               # Complete stylesheet with tokens, Syne typography & bento grids
├── script.js               # Vanilla JS (intro timeline, sticky nav, filtering, clipboard)
│
├── assets/
│   ├── images/
│   │   └── som-portrait.jpg # Som's authentic portrait photo (1024x1024)
│   ├── icons/              # Scalable SVG vector icons
│   └── fonts/              # Typography references and local fallbacks
│
└── README.md               # Documentation and GitHub Pages deployment guide
```

---

## 🚀 Live Projects Featured

| Project | Category | Live URL / Status | Source Code |
| :--- | :--- | :--- | :--- |
| **TRAVORA** | Collaborative (Dynamic Tour Planning) | [Launch Live Demo](https://travora-20260926t054032z-1-001-2.onrender.com/) | [GitHub](https://github.com/somsinghhh) |
| **DRISHTI** | Collaborative (Transparent Land Acquisition) | [Launch Live Demo](https://drishti-land-acquisition.onrender.com/) | [GitHub](https://github.com/somsinghhh) |
| **DARPAN** | Collaborative (Smart India Hackathon 2026) | [Launch Live Demo](https://darpan-sih-2026.onrender.com/) | [GitHub](https://github.com/somsinghhh) |
| **RASEED** | Collaborative (Receipt & Ledger Parsing) | Team Collaboration Archive | [GitHub](https://github.com/somsinghhh) |
| **Notes Tracker System** | Academic Project | Academic Coursework | [GitHub](https://github.com/somsinghhh) |
| **Office Attendance System** | Academic Project | Academic Coursework | [GitHub](https://github.com/somsinghhh) |
| **Office Asset Allocation System** | Academic Project | Academic Coursework | [GitHub](https://github.com/somsinghhh) |

---

## 🌐 Deploying to GitHub Pages (Step-by-Step)

Because this website uses purely relative asset paths and standard static web files, it deploys directly to **GitHub Pages** in under two minutes:

### Step 1: Initialize Git & Push to GitHub
1. Open your terminal in this directory:
   ```bash
   git init
   git add .
   git commit -m "Launch Som Rambhan Singh portfolio"
   ```
2. Create a new public repository on [GitHub](https://github.com/new) named `som-portfolio` (or `somsinghhh.github.io`).
3. Link your remote repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/somsinghhh/som-portfolio.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository in your web browser.
2. Click on **Settings** (gear icon) in the top navigation.
3. On the left sidebar under *Code and automation*, click **Pages**.
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` and folder `/(root)`.
5. Click **Save**.
6. Within 1–2 minutes, GitHub will generate your live URL (e.g. `https://somsinghhh.github.io/som-portfolio/`).

---

## 🛠️ Customization & Easy Updates

All content is structured cleanly so that Som can easily update links and details over time:

1. **Email Address:** Configured as `i.somsinghh@gmail.com` across `index.html`, `script.js`, and `README.md`.
2. **Social URLs:**
   - GitHub: [`https://github.com/somsinghhh`](https://github.com/somsinghhh)
   - LinkedIn: [`https://www.linkedin.com/in/som-tech`](https://www.linkedin.com/in/som-tech)
3. **Adding New Projects:** In `index.html`, duplicate any `<article class="project-card">` block inside `#projects-grid`. Add `data-category="collaborative"` or `data-category="academic"` to support instant category filtering.
4. **Certificates & Verification:** In `#certifications`, links point to `mailto:i.somsinghh@gmail.com` for direct credential verification inquiries.

---

© 2026 Som Rambhan Singh. Designed with curiosity. Built with intention.
