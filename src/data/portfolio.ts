export const portfolioData = {
  name: "Sarra Hamdi",
  title: "Junior Full Stack Developer",
  tagline: "Full stack apps from database to UI — ready to ship.",
  email: "hamdisaraa004@gmail.com",
  github: "https://github.com/SarraHamdi11",
  linkedin: "https://linkedin.com/in/sarra-hamdi",
  cv: "/resume.pdf",
  availableImmediately: true,

  summary: "Junior Full Stack Developer with professional internship experience at NTT DATA (global IT company) and 6+ full-stack projects (4 live on Vercel). I build scalable APIs and modern UIs with Laravel, React, and Next.js.",

  education: [
    {
      degree: "Specialized Technician Diploma in Digital Development",
      school: "OFPPT",
      location: "Tétouan, Morocco",
      dates: "Expected June 2025"
    },
    {
      degree: "Baccalaureate in Physical Sciences",
      school: "Abi Bakr Sedik High School",
      location: "Morocco",
      dates: "2021–2022"
    }
  ],

  experience: [
    {
      company: "NTT DATA",
      location: "Tétouan, Morocco",
      position: "Junior Full Stack Developer Intern",
      dates: "May–July 2025",
      description: "Built production-grade features for an Employee Management System.",
      responsibilities: [
        "Developed RESTful APIs with Java & Spring Boot",
        "Implemented Angular frontend components",
        "Refactored business logic for 30% better maintainability",
        "Collaborated via Git (branches, PRs, code reviews)",
        "Participated in Agile sprints & daily standups",
        "Debugged cross-stack issues (backend/frontend integration)"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: "StayFind",
      description: "Student accommodation platform connecting students to verified landlords. Features role-based auth, real-time listings, search/filters, and messaging system.",
      problem: "Students struggle to find safe, verified accommodation near universities.",
      solution: "Full-stack Laravel application with JWT authentication, role management (student/landlord), and RESTful APIs.",
      challengesSolved: ["JWT Authentication", "Role-based access", "REST API design"],
      whatIlearned: ["Laravel MVC", "Database relationships", "API security"],
      tech: ["Laravel", "MySQL", "JWT Auth", "REST APIs"],
      demo: "#",
      github: "https://github.com/SarraHamdi11/projet-de-synthese",
      images: [
        "/screenshots%20previous%20project/findstay/dashbaord.png",
        "/screenshots%20previous%20project/findstay/modify%20my%20information.png",
        "/screenshots%20previous%20project/findstay/notifications.png",
        "/screenshots%20previous%20project/findstay/reservation%20history.png",
        "/screenshots%20previous%20project/findstay/reservation.png",
        "/screenshots%20previous%20project/findstay/sign%20in.png",
        "/screenshots%20previous%20project/findstay/welcome%20page.png"
      ],
      featured: true,
      date: "June 2025",
      metrics: ["50+ test users", "30+ listings added"]
    },
    {
      id: 2,
      name: "PharmaDock (Stock Management)",
      description: "Multi-branch pharmacy inventory system managing 200+ SKUs with Excel import/export, bilingual UI, and reporting.",
      problem: "Pharmacies need efficient inventory tracking across multiple locations.",
      solution: "Laravel-based system with CRUD operations, Maatwebsite Excel for data import/export, and localization support.",
      challengesSolved: ["Excel file handling", "Multi-branch inventory", "Internationalization"],
      whatIlearned: ["File processing", "Database optimization", "Localization"],
      tech: ["Laravel 12", "Blade", "Tailwind CSS", "MySQL"],
      demo: "#",
      github: "https://github.com/SarraHamdi11/pharmacystock",
      images: [
        "/screenshots%20previous%20project/pharmacystock/pharmacy%20overview.png",
        "/screenshots%20previous%20project/pharmacystock/login.png",
        "/screenshots%20previous%20project/pharmacystock/medication%20inventory.png",
        "/screenshots%20previous%20project/pharmacystock/order%20management.png",
        "/screenshots%20previous%20project/pharmacystock/patient%20directory.png",
        "/screenshots%20previous%20project/pharmacystock/report&analytics.png",
        "/screenshots%20previous%20project/pharmacystock/sales%20report.png"
      ],
      featured: true,
      date: "May 2025",
      metrics: ["200+ SKUs managed", "Excel import/export up to 500 items"]
    },
    {
      id: 3,
      name: "Cucinare",
      description: "Full-featured recipe journal with authentication, dashboard, and meal planning — live on Vercel.",
      problem: "Home cooks need an organized way to save recipes and plan meals.",
      solution: "Next.js app with API routes, TypeScript, and Tailwind CSS for responsive design.",
      challengesSolved: ["Next.js API routes", "State management", "Responsive design"],
      whatIlearned: ["Next.js App Router", "React hooks", "TypeScript type safety"],
      tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      demo: "https://cucinare-recipe-journal.vercel.app/dashboard",
      github: "https://github.com/SarraHamdi11/cucinare-recipe-journal",
      images: [
        "/screenshots%20previous%20project/cucinare/dashbaord.png",
        "/screenshots%20previous%20project/cucinare/list%20recipe%20journal.png",
        "/screenshots%20previous%20project/cucinare/login%20page.png",
        "/screenshots%20previous%20project/cucinare/recipe%20journal.png"
      ],
      featured: true,
      date: "April 2025",
      metrics: ["100+ recipe entries", "Responsive on mobile & desktop"]
    },
    {
      id: 4,
      name: "GlowTrack",
      description: "Productivity & habit tracking app with dark/light mode, dashboard, and goal tracking (live on Vercel).",
      problem: "Users need a simple, beautiful way to track habits and improve productivity.",
      solution: "React + TypeScript app with localStorage persistence and theme switching.",
      challengesSolved: ["Theme switching", "Habit logic", "Local storage"],
      whatIlearned: ["Context API", "Persistent state", "Dark mode patterns"],
      tech: ["React", "TypeScript", "Tailwind CSS"],
      demo: "https://glowtrack1-glow-track.vercel.app/dashboard",
      github: "https://github.com/SarraHamdi11/glowtrack1",
      images: [
        "/screenshots%20previous%20project/glowtrack/dashboard.png",
        "/screenshots%20previous%20project/glowtrack/dailyritual.png",
        "/screenshots%20previous%20project/glowtrack/dashboard%20darkmode.png",
        "/screenshots%20previous%20project/glowtrack/job%20tracker.png",
        "/screenshots%20previous%20project/glowtrack/login.png",
        "/screenshots%20previous%20project/glowtrack/welcome%20dashboard%20dark%20mode.png",
        "/screenshots%20previous%20project/glowtrack/welcome%20dashboard.png"
      ],
      featured: false,
      date: "March 2025",
      metrics: ["5+ habit types tracked", "Dark/light mode support"]
    },
    {
      id: 5,
      name: "Travel Guide",
      description: "Modern travel guide with dynamic content and optimized images (live on Vercel).",
      problem: "Travelers need a beautiful, fast guide for inspiration.",
      solution: "Next.js static site with optimized images and responsive design.",
      challengesSolved: ["Image optimization", "Responsive layout", "Performance"],
      whatIlearned: ["Next.js Image component", "Static generation", "Performance tuning"],
      tech: ["React", "Next.js", "Tailwind CSS"],
      demo: "https://yourtravelguide-nu.vercel.app/",
      github: "https://github.com/SarraHamdi11/travel-guide",
      images: [
        "/screenshots%20previous%20project/travel-guide-pictures/image1.jpg",
        "/screenshots%20previous%20project/travel-guide-pictures/image2.jpg",
        "/screenshots%20previous%20project/travel-guide-pictures/image3.jpg",
        "/screenshots%20previous%20project/travel-guide-pictures/image4.jpg"
      ],
      featured: false,
      date: "February 2025",
      metrics: ["Optimized images loading 3x faster", "10+ travel destinations"]
    },
    {
      id: 6,
      name: "Coffee Shop",
      description: "Elegant coffee shop website with smooth animations and responsive design (live on Vercel).",
      problem: "Coffee shops need a modern online presence.",
      solution: "Next.js website with Tailwind CSS and subtle animations.",
      challengesSolved: ["Responsive grid", "Animation performance", "UI polish"],
      whatIlearned: ["CSS transitions", "Grid layouts", "Design systems"],
      tech: ["React", "Next.js", "Tailwind CSS"],
      demo: "https://coffee-shop-website-ten-beta.vercel.app/",
      github: "https://github.com/SarraHamdi11/coffee-shop-website-",
      images: [
        "/screenshots%20previous%20project/coffee-shop-pictures/image1.jpg",
        "/screenshots%20previous%20project/coffee-shop-pictures/image2.jpg",
        "/screenshots%20previous%20project/coffee-shop-pictures/image3.jpg",
        "/screenshots%20previous%20project/coffee-shop-pictures/image4.jpg"
      ],
      featured: false,
      date: "January 2025",
      metrics: ["Responsive on all devices", "Smooth page transitions"]
    }
  ],

  skills: {
    primary: [
      { 
        name: "React.js", 
        color: "#61DAFB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      { 
        name: "Next.js", 
        color: "#ffffff",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      { 
        name: "Laravel", 
        color: "#FF2D20",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
      },
      { 
        name: "MySQL", 
        color: "#4479A1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      { 
        name: "Tailwind CSS", 
        color: "#06B6D4",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      },
      { 
        name: "TypeScript", 
        color: "#3178C6",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      },
      { 
        name: "PHP", 
        color: "#777BB4",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      },
      { 
        name: "Git & GitHub", 
        color: "#F05032",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
    ],
    familiar: [
      { 
        name: "Angular", 
        color: "#DD0031",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
      },
      { 
        name: "MongoDB", 
        color: "#47A248",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      { 
        name: "Spring Boot", 
        color: "#6DB33F",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
      },
      { 
        name: "Docker", 
        color: "#2496ED",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      { 
        name: "Python", 
        color: "#3776AB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      { 
        name: "React Native", 
        color: "#61DAFB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      { 
        name: "Redux", 
        color: "#764ABC",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      },
      { 
        name: "Figma", 
        color: "#F24E1E",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      },
      { 
        name: "Microsoft Teams", 
        color: "#6264A7",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftteams/microsoftteams-original.svg"
      },
    ]
  },

  softSkills: ["Communication & Teamwork", "Problem Solving & Algorithmics", "Time Management", "Adaptability & Continuous Learning", "Database Design & Management"],

  languages: [
    { language: "English", level: "Fluent" },
    { language: "French", level: "Intermediate" },
    { language: "Arabic", level: "Native" },
    { language: "German", level: "Basic (A2)" },
    { language: "Spanish", level: "Basic (A2)" }
  ],

  careerGoal: "To obtain a Junior Full Stack Developer role in a modern tech company where I can grow, contribute to real-world projects, and improve my skills in scalable software development."
};
