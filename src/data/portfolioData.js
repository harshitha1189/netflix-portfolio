const portfolioData = {
  hero: {
    name: "Sri Harshitha",
    title: "SDE Intern @ SkillCaptain | Web Developer | Open Source Contributor",
    description:
      "Passionate about building scalable web applications and contributing to open source. Currently solving problems and building the future, one line of code at a time.",
    links: {
      github: "https://github.com/harshitha1189",
      linkedin: "https://linkedin.com/in/harshitha",
      resume: "#",
    },
  },
 education: [
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "National Institute of Technology, Silchar",
    duration: "Nov 2022 - June 2026",
    cgpa: "6.71",
    location: "Assam, India"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Tirumala College",
    duration: "July 2020 - Mar 2022",
    percentage: "95%",
    location: "Andhra Pradesh, India"
  }
],
experience: [
  {
    role: "Software Development Intern",
    company: "SkillCaptain",
    duration: "July 2025 – Present",
    type: "Internship",
    achievements: [
      "Built and deployed 10+ RESTful APIs in Spring Boot (quizzes, authentication, scratch-card logic), improving backend reliability and scalability.",
      "Developed streak tracking and gamified rewards with React Native + TypeScript, boosting user retention and average session time by 20%.",
      "Worked with a 6-member cross-functional team to align sprint deliverables with the product roadmap.",
      "Conducted feedback sessions with 25+ early adopters and delivered 5 major UI/UX improvements."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Exposys Data Labs",
    duration: "May 2025 – July 2025",
    type: "Internship",
    achievements: [
      "Built a responsive React.js application to upload and parse .csv/.txt files containing 1,000+ email addresses, validating them using regex and displaying categorized results (valid/invalid) in real time.",
      "Implemented client-side CSV parsing with instant classification and export options, enabling users to download clean or rejected email lists effortlessly.",
      "Integrated the EmailJS API to auto-send customized validation summary emails post-upload, reducing manual efforts by 60% and streamlining communication."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Brainwave Matrix Solutions",
    duration: "May 2023 – July 2023",
    type: "Internship",
    achievements: [
      "Developed a to-do list application using HTML, CSS, and JavaScript to improve user productivity.",
      "Designed and implemented an e-commerce website with interactive UI features."
    ]
  }
],

  projects: [
  {
    title: "Smart Recommendation Web Application",
    description:
      "Real-time recommendation engine integrating Retrieval-Augmented Generation (RAG) for query-based suggestions with high contextual accuracy.",
    technologies: ["React", "TailwindCSS", "Node.js", "RAG", "NLP"],
    github: "#", // replace with project link
    demo: "#",   // replace with live demo if available
    image: "/api/placeholder/300/200",
    category: "AI/ML",
    duration: "Apr 2025 - July 2025",
    achievements: [
      "Integrated RAG to improve response quality and contextual relevance by 35%.",
      "Achieved average query response latency under 1.2 seconds.",
      "Built a user-friendly React + TailwindCSS UI."
    ]
  },
  {
    title: "Interactive AI Code Review System",
    description:
      "Full-stack AI code review tool using Google Gemini API to analyze code logic, readability, and efficiency in real-time.",
    technologies: ["React (Vite)", "Node.js", "Express.js", "Gemini API", "PrismJS"],
    github: "#", 
    demo: "#",
    image: "/api/placeholder/300/200",
    category: "Full Stack",
    duration: "Mar 2025 - Apr 2025",
    achievements: [
      "Enabled real-time code editing and automated feedback for 200+ users.",
      "Reduced review time by 70% using Google Gemini Generative AI API.",
      "Added Markdown rendering + syntax highlighting with PrismJS, boosting engagement by 50%."
    ]
  },
  {
    title: "SafePath – Smart Geolocation Safety System",
    description:
      "Women’s safety app with live tracking, SOS alerts, fake calls, safe zone mapping, and smart route guidance.",
    technologies: ["Next.js", "React", "Leaflet", "OpenStreetMap"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/300/200",
    category: "Web App",
    duration: "Jun 2025 - Jul 2025",
    achievements: [
      "Mapped 100+ incident-based routes with green/red safety indicators.",
      "Implemented 6+ advanced safety features (live tracking, SOS alerts, fake calls, helplines, smart maps).",
      "Integrated Nearby Help feature showing 50+ real-time safe zones, increasing emergency engagement by 40%."
    ]
  },
  {
    title: "Freelance Marketplace",
    description:
      "Responsive freelance-client matchmaking platform with advanced search and role-based user interactions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/300/200",
    category: "Web App",
    duration: "May 2024 - Jun 2024",
    achievements: [
      "Achieved 95%+ compatibility across mobile and desktop.",
      "Engineered advanced search & filter system improving project discovery by 40%.",
      "Enabled secure role-based project applications with 100% form submission success rate."
    ]
  },
  {
    title: "Job Scraper Platform",
    description:
      "Django-powered job scraping platform that collects, filters, and exports postings from RemoteOK.",
    technologies: ["Django", "Python", "SQL", "REST API"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/300/200",
    category: "Backend",
    duration: "Jan 2025",
    achievements: [
      "Implemented idempotent scraper ensuring zero duplicate entries, improving database reliability by 100%.",
      "Built REST API with search, pagination, CSV export, reducing query response time to under 1.5s.",
      "Used Django Admin + SQL database for efficient management and filtering of postings."
    ]
  }
],

skills: [
  // Programming Languages
  { name: "C++", icon: "https://skillicons.dev/icons?i=cpp", level: 90 },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript", level: 95 },
  { name: "Python", icon: "https://skillicons.dev/icons?i=python", level: 90 },
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html", level: 95 },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css", level: 90 },

  // Frameworks & Libraries
  { name: "React.js", icon: "https://skillicons.dev/icons?i=react", level: 95 },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs", level: 90 },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs", level: 85 },
  { name: "Express.js", icon: "https://skillicons.dev/icons?i=express", level: 85 },
  { name: "Django", icon: "https://skillicons.dev/icons?i=django", level: 80 },
  { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap", level: 85 },
  { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind", level: 90 },

  // Databases
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql", level: 85 },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb", level: 80 },
  { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres", level: 85 },

  // Tools
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github", level: 90 },
  { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode", level: 90 },
  { name: "Postman", icon: "https://skillicons.dev/icons?i=postman", level: 85 },
],
achievements: [
  {
    title: "Coding Problems Solved",
    description: "Solved 200+ problems across LeetCode, GFG, and CodeChef.",
    metric: "200+",
    icon: "🚀",
    color: "from-red-700 to-black", // 🩸 Red → Black
  },
  {
    title: "Contest Contender",
    description: "Earned the Contest Contender badge on CodeChef.",
    metric: "Badge",
    icon: "🏆",
    color: "from-black to-red-800", // ⚫ Black → Dark Red
  },
  {
    title: "GSSoC 2025 Contributor",
    description:
      "Contributed to open-source projects, gaining real-world experience.",
    metric: "Contributor",
    icon: "🌟",
    color: "from-red-600 to-black", // 🔴 Netflix Red → Black
  },
],



 certifications: [
  {
    name: "Full Stack Web Development",
    platform: "Udemy",
    // year: "2024",
    // credentialId: "UDEMY-FSWD",
    description:
      "Certified in Full Stack Web Development with hands-on expertise in building scalable front-end and back-end applications.",
  },
  {
    name: "Advanced Graph Algorithms",
    platform: "AlgoUniversity",
    // year: "2024",
    // credentialId: "ALGO-GRAPH-11",
    description:
      "Solved 11 advanced graph problems including BFS, DFS, MSTs, shortest paths, and more, strengthening DSA & problem-solving skills.",
  },
  {
    name: "Aspire For Her x Myntra",
    platform: "Aspire For Her",
    // year: "2023",
    // credentialId: "MYNTRA-CERT",
    description:
      "Awarded certification for completing an industry-recognized program in collaboration with Myntra.",
  },
  {
    name: "Demo Day Recognition",
    platform: "SkillCaptain",
    // year: "2025",
    // credentialId: "SC-DEMODAY",
    description:
      "Recognized for pitching a real-world project during Demo Day in front of startup founders and industry professionals.",
  },
  {
    name: "Software Engineering Skills",
    platform: "HackerRank",
    // year: "2025",
    // credentialId: "HACKER-SWE-2025",
    description:
      "Certified in Software Engineering skills on HackerRank. Covered SQL, REST APIs, Data Structures, and Problem Solving.",
  },
],

  contact: {
    email: "sreeharshitha1189@gmail.com",
    phone: "+91 9998833991",
    github: "https://github.com/harshitha1189",
    linkedin: "https://linkedin.com/in/harshitha",
  },
};

export default portfolioData;
