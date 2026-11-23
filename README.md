# 💼 Developer Portfolio — Muhammad Hamza

A modern, responsive developer portfolio built with **React**, **Tailwind CSS**, and **Vite**, showcasing featured projects, technical skills, and direct contact workflows.

**Live Demo:** https://muhammad-hamza-portfolio-seven.vercel.app

## 🛠️ Tech Stack
- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (Dark slate theme, custom glassmorphic utilities & animations)
- **Icons:** Lucide React & custom SVG brand components
- **Architecture:** Centralized data layer (`src/data/portfolioData.js`) with native React hooks (`useState`, `useEffect`, `useMemo`)

## ✨ Key Features
- **Sticky Glassmorphic Navbar:** Scroll-spy active section highlighting (`#about`, `#projects`, `#skills`, `#contact`) and responsive mobile drawer.
- **Hero & Code Preview Card:** Availability status badge, key developer metrics, quick social links, and a syntax-highlighted profile card.
- **Filterable Projects Showcase:** Dynamic category filtering (`useMemo`) for featured projects alongside a secondary grid of additional web apps, complete with Live Demo and GitHub source links.
- **Categorized Skills Matrix:** Structured breakdown across Frontend Core, State Management, and Tools, Backend & Deployment.
- **One-Click Email Copy & Contact:** Copy email address directly to clipboard with timed visual confirmation, plus direct mailto and social links.

## 🚀 How to run locally
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`