# Muhammad Hamza — Developer Portfolio

A production-ready, dark-themed personal developer portfolio for **Muhammad Hamza (Frontend React Developer)** built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18, Vite
- **Styling**: Tailwind CSS (Tailwind typography, glassmorphism, custom slate palettes)
- **Icons**: Lucide React
- **Architecture**: Modular separation of concerns. Centralized configuration in `src/data/portfolioData.js` isolates personal info, project metadata, and skills from UI presentation components.

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky glassmorphic top navigation with smooth scroll & mobile drawer
│   ├── Hero.jsx           # Impactful headline, tech badge, metrics & quick CTA actions
│   ├── Projects.jsx       # Featured projects with category filters & compact architectural studies
│   ├── Skills.jsx         # Categorized tech stack (Frontend, State Management, Tools & Cloud)
│   ├── Contact.jsx        # One-click copy email button, direct mailto, & social channels
│   └── Footer.jsx         # Clean footer with quick links & back-to-top handler
├── data/
│   └── portfolioData.js   # Centralized single source of truth for portfolio content
├── App.jsx                # Root application layout
├── main.jsx               # React DOM entrypoint
└── index.css              # Tailwind directives and custom utility classes
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/muhammadhamza305237/portfolio.git

# Navigate into the project
cd muhammad-hamza-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌟 Featured Projects

1. **Cinematic Movie Explorer** — Film discovery app with real-time API ingestion, dynamic search, ratings, and detail routing.  
   *Live Demo*: [https://cinematic-movie-explorer.vercel.app/](https://cinematic-movie-explorer.vercel.app/)
2. **Admin Analytics Dashboard** — SaaS dashboard featuring KPI metrics, responsive sidebar, and data visualizations.  
   *Live Demo*: [https://admin-analytics-dashboard-delta.vercel.app/](https://admin-analytics-dashboard-delta.vercel.app/)
3. **E-Commerce Storefront** — Full shopping experience with cart state, category filters, and persistent checkout UI.
4. **Megablog Platform** — Multi-user publishing platform built with Redux Toolkit and Appwrite BaaS.

---

## 📬 Contact & Connect

- **GitHub**: [github.com/muhammadhamza305237](https://github.com/muhammadhamza305237)
- **Role**: Frontend React Developer
