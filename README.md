# 🚀 Apoorv Kumar Singh — Developer Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Deploy_with-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-code--with--apoorv-181717?style=for-the-badge&logo=github)](https://github.com/code-with-apoorv)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-code--with--apoorv-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/code-with-apoorv)

An ultra-modern, high-performance, and modular personal portfolio website for **Apoorv Kumar Singh** (Computer Science Undergraduate specializing in Cloud Computing & Automation at VIT Bhopal).

---

## ✨ Features

- 🌌 **Cyber-Indigo & Electric-Cyan Theme**: Modern obsidian aesthetic with glow accents.
- 🎨 **Live Palette Customizer**: Real-time accent color switcher (Cyan, Emerald, Violet, Amber) with persistent `localStorage` support.
- 🌓 **Dark & Light Mode**: Clean glassmorphism across both themes.
- 💻 **Apple-Style Interactive Terminal**: Animated shell terminal simulating system diagnostics.
- 🔍 **Interactive Project Deep-Dive Modals**: Architectural breakdowns, problems, solutions, highlights, and learnings for CloudCart, V-PLAY, and NewsVITa.
- 📂 **Modular Architecture**: Clean separation between presentation layer (`index.html`, `styles.css`, `app.js`) and modular data entities in `data/`.
- 📜 **Interactive Scrollers & Marquees**: Seamless infinite marquee for skills/milestones and touch-friendly horizontal card carousels.
- 📸 **Campus & Event Life Gallery**: Event management and fest highlight showcase.
- ✉️ **Integrated Contact Form & Quick Copy**: Working submission endpoint via FormSubmit and one-click copy buttons for email/phone.

---

## 🛠️ Tech Stack

- **Frontend**: Semantic HTML5, Vanilla JavaScript (ES6+ Modules), CSS3 (Custom Design Tokens, Flexbox, CSS Grid)
- **Typography**: Plus Jakarta Sans, Space Grotesk, JetBrains Mono, Inter
- **Hosting**: Optimized for [Vercel](https://vercel.com), GitHub Pages, or any static host

---

## 📁 Repository Structure

```
├── index.html                   # Semantic entry HTML
├── styles.css                   # Custom Cyber-Indigo design tokens & responsive CSS
├── app.js                       # Main application logic & modal management
├── vercel.json                  # Vercel static routing & security headers
├── Apoorv_Kumar_Singh_Resume.pdf# Resume PDF
├── data/
│   ├── profile.js               # Personal bio, stats, and terminal diagnostics
│   ├── projects.js              # Projects data & modal content
│   ├── skills.js                # Categorized skill matrix & 12-step journey
│   ├── education.js             # VIT Bhopal degree & coursework
│   ├── certifications.js        # Networking, Accenture & AcWoc credentials
│   ├── experience.js            # Fest leadership & open-source roles
│   └── gallery.js               # Event and campus photography
└── [event photography assets]   # advitya.jpg, rangotsav.jpg, convocation.jpg, etc.
```

---

## ⚡ Local Development

To run locally:

```bash
# Using Python
python -m http.server 3000

# Or using Node
npx serve .
```

Open `http://localhost:3000` in your browser.

---

## 🚀 Deploy to Vercel

### Option 1: Vercel Dashboard (One-Click)
1. Push this repository to GitHub: `https://github.com/code-with-apoorv/Portfolio-Website.git`
2. Go to [vercel.com/new](https://vercel.com/new) and import your `Portfolio-Website` repository.
3. Keep default settings (Framework Preset: **Other**, Root Directory: `./`).
4. Click **Deploy**!

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 👤 Author

**Apoorv Kumar Singh**
- Email: [apoorv.singh2421@gmail.com](mailto:apoorv.singh2421@gmail.com)
- GitHub: [@code-with-apoorv](https://github.com/code-with-apoorv)
- LinkedIn: [in/code-with-apoorv](https://linkedin.com/in/code-with-apoorv)
