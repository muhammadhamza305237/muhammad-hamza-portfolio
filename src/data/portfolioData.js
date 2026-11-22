export const personalInfo = {
  name: "Muhammad Hamza",
  title: "Frontend React Developer",
  tagline: "Building clean, responsive, and user-focused web applications with modern React.",
  bio: "I specialize in React.js, Tailwind CSS, and state management with Redux Toolkit and Context API—turning ideas into fast, well-structured interfaces with clean, maintainable code.",
  email: "hamzaakram305237@gmail.com",
  location: "Remote / Open to Relocation",
  status: "Available for new opportunities",
  socials: {
    github: "https://github.com/muhammadhamza305237",
    linkedin: "https://www.linkedin.com/in/muhammad-hamza-8a55b8253/",
    email: "mailto:hamzaakram305237@gmail.com",
  },
  metrics: [
    { label: "Production Apps", value: "4+" },
    { label: "Core Technologies", value: "12+" },
    { label: "Code Quality", value: "100%" },
    { label: "Design Precision", value: "Pixel Perfect" },
  ]
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Core",
      description: "Modern component architecture, semantic markup, and responsive design systems.",
      skills: [
        { name: "React.js", level: "Advanced", icon: "Code2" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
        { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
        { name: "HTML5 / CSS3", level: "Expert", icon: "Layout" },
        { name: "React Router", level: "Advanced", icon: "Navigation" },
      ],
    },
    {
      id: "state",
      title: "State Management",
      description: "Predictable, scalable application state flows and side-effect handling.",
      skills: [
        { name: "Redux Toolkit", level: "Advanced", icon: "Cpu" },
        { name: "Context API", level: "Advanced", icon: "Layers" },
        { name: "Custom Hooks", level: "Advanced", icon: "Zap" },
        { name: "Component State", level: "Expert", icon: "Workflow" },
      ],
    },
    {
      id: "tools",
      title: "Tools, Backend & Deployment",
      description: "Modern development toolchains, cloud BaaS, and continuous deployment workflows.",
      skills: [
        { name: "Vite", level: "Advanced", icon: "Flame" },
        { name: "Git", level: "Advanced", icon: "GitBranch" },
        { name: "GitHub", level: "Advanced", icon: "Github" },
        { name: "Vercel", level: "Advanced", icon: "Globe" },
        { name: "Appwrite", level: "Intermediate", icon: "Database" },
        { name: "REST APIs", level: "Advanced", icon: "Server" },
      ],
    },
  ],
};

export const featuredProjects = [
  {
    id: "ecommerce-storefront",
    title: "E-Commerce Storefront",
    subtitle: "Modern Reactive Retail Experience",
    description:
      "Full-featured e-commerce platform offering real-time cart state management, multi-facet product filtering, instant search, and a responsive checkout workflow with persistent storage.",
    category: "E-Commerce",
    techStack: ["React.js", "Tailwind CSS", "Context API"],
    highlights: [
      "Global cart management via React Context API with persistent local storage",
      "Real-time category filtering, price sorting, and item quantity controllers",
      "Zero-latency optimistic UI updates for a frictionless consumer experience",
    ],
    liveUrl: "https://ecommerce-react-app-woad.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/ecommerce-react-app",
    accent: "from-emerald-500 to-teal-600",
    badge: "Live Production",
  },
  {
    id: "admin-analytics-dashboard",
    title: "Admin Analytics Dashboard",
    subtitle: "Enterprise SaaS Metrics & Interactive Visualizer",
    description:
      "A SaaS administrative control center featuring high-density KPI cards, data visualization breakdowns, collapsible multi-tier navigation, and performance-tuned layout rendering.",
    category: "Dashboard",
    techStack: ["React.js", "Tailwind CSS", "Vite"],
    highlights: [
      "Modular dashboard cards with interactive visual indicators and trends",
      "Adaptive sidebar navigation with collapse/expand and active page tracking",
      "Sub-second page load times optimized with Vite and tree-shaken components",
    ],
    liveUrl: "https://admin-analytics-dashboard-delta.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/admin-analytics-dashboard",
    accent: "from-indigo-500 to-cyan-500",
    badge: "Live Production",
  },
  {
    id: "cinematic-movie-explorer",
    title: "Cinematic Movie Explorer",
    subtitle: "Real-time Film Discovery & Streaming Interface",
    description:
      "A cinematic movie discovery application with real-time API ingestion, dynamic search, genre filtering, and responsive modal views. Built with optimized routing and fluid micro-interactions.",
    category: "React App",
    techStack: ["React.js", "Tailwind CSS", "React Router", "REST API"],
    highlights: [
      "Dynamic REST API data pipeline with async caching and debounced live search",
      "Dynamic client-side routing with deep linkable movie detail views",
      "Responsive card layouts with backdrop blur poster view and ratings indicators",
    ],
    liveUrl: "https://cinematic-movie-explorer.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/cinematic-movie-explorer",
    accent: "from-cyan-500 to-blue-600",
    badge: "Live Production",
  },
  {
    id: "react-password-manager",
    title: "React Password Manager",
    subtitle: "Secure Client-Side Credential Vault",
    description:
      "Secure credential manager with instant copy-to-clipboard, visibility toggles, and local storage persistence.",
    category: "Security Tool",
    techStack: ["React.js", "Tailwind CSS"],
    highlights: [
      "Secure client-side credential persistence with browser Local Storage",
      "Instant one-click copy-to-clipboard with dynamic visual feedback",
      "Intuitive show/hide visibility toggles and zero-latency state updates",
    ],
    liveUrl: "https://password-manager-roan-three.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/react-password-manager",
    accent: "from-amber-500 to-rose-500",
    badge: "Live Production",
  },
];

export const secondaryProjects = [
  {
    id: "react-megablog-website",
    title: "Megablog Full-Stack Platform",
    description:
      "Multi-user blogging platform with Appwrite authentication, rich-text editor, image uploads, and Redux Toolkit state management.",
    techStack: ["React.js", "Redux Toolkit", "Appwrite", "Tailwind CSS"],
    liveUrl: "https://megablog-website.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/react-megablog-website",
    type: "Full-Stack Web App",
  },
  {
    id: "todolist-context-api",
    title: "TodoList (Context API)",
    description:
      "Clean task tracker utilizing React Context API and custom hooks to eliminate prop drilling.",
    techStack: ["React.js", "Context API", "Tailwind CSS"],
    liveUrl: "https://todo-list-context-api-five.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/todolist-contextapi",
    type: "Context API Architecture",
  },
  {
    id: "todolist-redux-toolkit",
    title: "TodoList (Redux Toolkit)",
    description:
      "Scalable task management app powered by Redux Toolkit (@reduxjs/toolkit) for predictable centralized state.",
    techStack: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "https://todo-list-redux-tool-kit.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/todolist-reduxtoolkit",
    type: "Redux Architecture",
  },
  {
    id: "react-router-multipage",
    title: "React Router Multi-Page App",
    description:
      "Multi-page SPA demonstrating nested routing, dynamic URL parameters, and active navigation states.",
    techStack: ["React.js", "React Router", "Tailwind CSS"],
    liveUrl: "https://react-router-project-kohl.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/react-router-project",
    type: "Routing Architecture",
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description:
      "Customizable random password generator with length slider, character/number toggles, and instant clipboard copy.",
    techStack: ["React.js", "Tailwind CSS"],
    liveUrl: "https://password-generator-chi-cyan-53.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/password-generator",
    type: "Hooks Utility",
  },
  {
    id: "react-todolist",
    title: "React TodoList",
    description:
      "Task management application featuring full CRUD operations and persistent local storage.",
    techStack: ["React.js", "Tailwind CSS"],
    liveUrl: "https://todo-list-steel-psi-83.vercel.app/",
    githubUrl: "https://github.com/muhammadhamza305237/react-todolist",
    type: "CRUD Web App",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
