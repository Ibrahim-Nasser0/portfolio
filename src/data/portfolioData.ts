export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface ProjectModel {
  id: string;
  name: string;
  category: 'Mobile' | 'Desktop' | 'Other';
  isFeatured?: boolean;
  heroDescription: string;
  githubUrl: string;
  imageUrl: string;
  mockupUrl?: string;
  videoUrl?: string;
  skillsUsed: string[];
  descriptionPoints: string[];
  features: string[];
  techMobile: string[];
  techBackend: string[];
  techTools: string[];
  architectureFlow: string[];
  challenges: ChallengeSolution[];
}

export interface SkillCategoryModel {
  title: string;
  iconName: string;
  skills: string[];
}

export interface CertificateModel {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Mobile' | 'Backend' | 'UI/UX' | 'Tools & Core';
  credentialId?: string;
  imageUrl: string;
  description?: string;
  skillsAcquired: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  descriptionPoints: string[];
}

export const personalInfo = {
  introName: "Ibrahim Nasser",
  name: "Ibrahim Nasser Ibrahim",
  title: "Flutter Developer | Cross-Platform Mobile & Desktop Developer",
  profileImage: "/assets/images/me1.jpeg",
  cvUrl: "/assets/cv/Ibrahim NasserCV (Flutter).pdf",
  email: "ibrahimnasser.mobile@gmail.com",
  phone: "+20 127 898 8474",
  location: "Ismailia, Egypt",
  linkedinUrl: "https://www.linkedin.com/in/ibrahim-nasser-mobile/",
  githubUrl: "https://github.com/Ibrahim-Nasser0",
  summaryHeadline: "Flutter Developer | Building Scalable Cross-Platform Mobile & Desktop Apps",
  summaryDetails:
    "Flutter Developer focused on building scalable cross-platform mobile and desktop applications using Flutter and Dart. Experienced with Clean Architecture, BLoC/Cubit, REST APIs, and responsive UI development. Currently expanding backend development skills with .NET.",
};

export interface RecommendationModel {
  id: string;
  name: string;
  headline: string;
  date: string;
  relationship: string;
  linkedinUrl?: string;
  text: string;
  highlights: string[];
}

export const recommendations: RecommendationModel[] = [
  {
    id: "amr-atef",
    name: "Amr Atef",
    headline: ".NET Backend Developer | ASP.NET Core · C# · SQL Server | CS Student @ Suez Canal University",
    date: "March 23, 2026",
    relationship: "Amr worked with Ibrahim on the same team as co-founders of 3AMI Team",
    linkedinUrl: "https://www.linkedin.com/in/amratef/",
    text: "I've had the privilege of working alongside Ibrahim across multiple projects as co-founders of 3AMI Team, and I can say with confidence that he's one of the most capable and dependable people I've worked with. What makes Ibrahim stand out isn't just his technical depth in Flutter and Clean Architecture — it's how he leads. From day one, he set the standard for how we work: structured GitHub workflows, clear architecture decisions, thorough code reviews, and a constant push to ship things the right way, not just the fast way. He made sure every team member understood the project direction and always kept us aligned even when things got complex. As a backend developer, I especially valued how Ibrahim approached the integration between our .NET APIs and the Flutter frontend — he communicated clearly, defined contracts early, and never left blockers unresolved. Ibrahim doesn't just write good code. He builds teams that write good code. Any engineering team would be lucky to have him.",
    highlights: ["Technical Depth in Flutter & Clean Architecture", "Structured GitHub Workflows", "Clear .NET API & Flutter Contract Definitions", "Team Leadership & Alignment"],
  },
  {
    id: "ahmed-elshazly",
    name: "Ahmed El-Shazly",
    headline: "Full-Stack Developer | MERN Stack · Next.js · TypeScript | Co-founder @ Modaresy & 3AMI Team",
    date: "September 15, 2025",
    relationship: "Ahmed and Ibrahim studied and co-founded 3AMI Team together",
    linkedinUrl: "https://www.linkedin.com/in/ahmedelshazly/",
    text: "I’m thrilled to recommend Ibrahim for his exceptional work as a Flutter developer. During our time collaborating on a mobile app project, Ibrahim showcased an impressive ability to craft seamless, high-performance applications with clean, maintainable code. His deep understanding of Flutter allowed him to build intuitive user interfaces that significantly enhanced the user experience, often exceeding our expectations. Ibrahim tackled complex challenges with a calm, solution-oriented mindset, whether it was optimizing app performance or integrating APIs under tight deadlines. Beyond his technical skills, his collaborative nature and willingness to share knowledge made him a standout team member. He consistently brought creative ideas to the table, elevating the quality of our deliverables. Ibrahim is a dedicated and talented developer who would be a tremendous asset to any team, and I wholeheartedly endorse him for any Flutter development role.",
    highlights: ["High-Performance Mobile Apps", "Clean Maintainable Code", "API Integration Under Tight Deadlines", "Solution-Oriented Mindset"],
  },
  {
    id: "abdullah-mohammed",
    name: "Abdullah Mohammed",
    headline: "Aspiring Data Analyst | Learning Excel, SQL, Python & Power BI",
    date: "September 14, 2025",
    relationship: "Abdullah worked with Ibrahim on the same team",
    linkedinUrl: "https://www.linkedin.com/in/abdullahmohammed/",
    text: "I had the pleasure of working with Ibrahim Naser, and I can confidently say that he is one of the best teammates you could ever work with. He is highly collaborative, dependable, and always ready to support his colleagues. His positive attitude and strong problem-solving skills make him not only an excellent professional but also a true asset to any team. I strongly recommend him for any future opportunities.",
    highlights: ["Highly Collaborative & Dependable", "Strong Problem-Solving Skills", "Supportive Teammate"],
  },
];

export const education = {
  university: "Suez Canal University",
  degree: "Bachelor of Science (B.Sc.) in Computer Science",
  year: "Year: Third",
  expectedGraduation: "Expected Jun 2027",
};

export const experiences: ExperienceItem[] = [
  {
    title: "Mobile Development Track Organizer (Volunteer)",
    company: "GDG – Suez Canal University (Remote)",
    date: "Apr 2026 – Present",
    descriptionPoints: [
      "Supported participants in Flutter development, state management, API integration, and responsive UI — reviewing assignments and providing technical feedback.",
      "Collaborated with the core team to organize workshops and hands-on sessions, contributing to track planning and content preparation.",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company: "Com Fab – Egypt (Remote)",
    date: "Nov 2025 – Jan 2026",
    descriptionPoints: [
      "Structured a multi-module Flutter application (e-commerce, chat, donation, support systems) with scalable architecture and UI/UX design.",
      "Contributed to MVP planning, feature prioritization, and future enhancements (notifications, localization).",
    ],
  },
  {
    title: "Flutter Developer Trainee",
    company: "Creativa Innovation Hub – Ismailia (On-site)",
    date: "Jul 2025",
    descriptionPoints: [
      "Built cross-platform Flutter applications applying OOP, reusable widgets, and responsive UI principles.",
      "Participated in hands-on projects simulating real-world development workflows.",
    ],
  },
];

export const projects: ProjectModel[] = [
  {
    id: "portfolio-web",
    name: "Interactive Developer Portfolio",
    category: "Other",
    isFeatured: true,
    heroDescription:
      "A high-performance, fully responsive portfolio featuring glassmorphism, fluid animations, and custom interactive timelines.",
    githubUrl: "https://github.com/Ibrahim-Nasser0/portfolio-web",
    imageUrl: "/assets/projectImages/Hungry.jpg",
    skillsUsed: [
      "Next.js",
      "TypeScript",
      "Flutter Web",
      "Responsive Design",
      "Glassmorphism UI",
      "Framer Motion",
    ],
    descriptionPoints: [
      "Designed and engineered a personal portfolio to showcase development skills across platforms.",
      "Implemented a highly interactive UI with glassmorphism, dynamic glowing components, and hover-triggered micro-animations.",
      "Engineered a responsive layout architecture that adapts seamlessly from ultra-wide desktops to compact mobile viewports.",
    ],
    features: [
      "Responsive, state-of-the-art Glassmorphism UI",
      "Interactive Project Filtering and Carousels",
      "Animated Experience Timeline & Education Cards",
      "Hover-reactive Glow and Scaling effects",
    ],
    techMobile: ["Next.js / React", "Flutter Web"],
    techBackend: ["Static Hosting (Vercel / GitHub Pages)"],
    techTools: ["Git", "GitHub Actions", "Figma"],
    architectureFlow: [
      "Component-Based UI Architecture",
      "Declarative State Management",
    ],
    challenges: [
      {
        challenge: "Computing accurate dynamic layouts for responsive viewports.",
        solution: "Implemented CSS Grid and Flexbox with dynamic breakpoints and smooth Framer Motion animations."
      }
    ],
  },
  {
    id: "hungry-app",
    name: "Hungry (E-Commerce Food App)",
    category: "Mobile",
    isFeatured: true,
    heroDescription:
      "A fully-featured cross-platform food delivery app integrating dynamic screens, multi-step cart logic, and robust state management via BLoC.",
    githubUrl: "https://github.com/Ibrahim-Nasser0/hungry",
    imageUrl: "/assets/projectImages/Hungry.jpg",
    mockupUrl: "/assets/projectImages/hungry_mockup.png",
    skillsUsed: [
      "Flutter",
      "Clean Architecture",
      "BLoC/Cubit",
      "REST API",
      "SOLID",
    ],
    descriptionPoints: [
      "Architected a scalable system using Feature-Driven Clean Architecture and SOLID principles.",
      "Implemented the Repository Pattern for data abstraction and utilized get_it for Dependency Injection.",
      "Developed full commerce workflows with robust API error handling and state management using BLoC/Cubit.",
      "Integrated RESTful APIs ensuring seamless data flow and high-performance user experience.",
    ],
    features: [
      "Feature-Driven Clean Architecture",
      "Repository Pattern & Dependency Injection (get_it)",
      "Robust API Error Handling",
      "State Management via BLoC/Cubit",
      "Cross-platform Support (iOS, Android, Web)",
    ],
    techMobile: ["Flutter", "Dart", "BLoC/Cubit", "Dio", "get_it"],
    techBackend: ["RESTful APIs", "JSON Data Handling", "JWT Authentication"],
    techTools: ["Figma", "Git / GitHub", "Postman", "VS Code"],
    architectureFlow: [
      "Flutter UI",
      "BLoC Layer",
      "Repository Layer",
      "REST API",
    ],
    challenges: [
      {
        challenge: "Managing complex shopping cart state across multiple screens efficiently.",
        solution: "Implemented the BLoC pattern to decouple UI from business logic, centralizing cart state to remain synchronized application-wide."
      }
    ],
  },
  {
    id: "donors-management",
    name: "Donors Management System (Flutter Desktop)",
    category: "Desktop",
    isFeatured: true,
    heroDescription:
      "A robust desktop application designed for donor tracking and administrative management using MVVM architecture.",
    githubUrl: "https://github.com/Ibrahim-Nasser0",
    imageUrl: "/assets/projectImages/Hungry.jpg",
    skillsUsed: ["Flutter Desktop", "MVVM", "SOLID", "Dependency Injection"],
    descriptionPoints: [
      "Developed a desktop application using MVVM and Feature-Driven architecture, adhering to SOLID principles.",
      "Integrated Dependency Injection and implemented comprehensive error handling for data persistence and API tracking.",
      "Designed intuitive administrative dashboards focusing on data integrity and optimized desktop performance.",
    ],
    features: [
      "MVVM & Feature-Driven Architecture",
      "Comprehensive Error Handling",
      "Administrative Dashboards",
      "Desktop Performance Optimization",
    ],
    techMobile: ["Flutter Desktop", "MVVM", "Dart", "get_it"],
    techBackend: ["Local Storage / API Integration", "Data Persistence"],
    techTools: ["VS Code", "Git", "Flutter DevTools"],
    architectureFlow: [
      "Desktop UI",
      "ViewModel",
      "Repository Layer",
      "Data Persistence",
    ],
    challenges: [
      {
        challenge: "Ensuring data integrity across complex administrative forms.",
        solution: "Implemented strict validation layers within the MVVM ViewModels to catch errors before persistence."
      }
    ],
  },
  {
    id: "bookly",
    name: "Bookly (E-Book Store)",
    category: "Mobile",
    heroDescription:
      "A modern e-book store app with Clean Architecture and immersive animations.",
    githubUrl: "https://github.com/Ibrahim-Nasser0",
    imageUrl: "/assets/projectImages/OpenFashion.jpg",
    mockupUrl: "/assets/projectImages/bookly_mockup.png",
    skillsUsed: ["Flutter", "Clean Architecture", "Dio", "Animations"],
    descriptionPoints: [
      "Built an e-book app with Clean Architecture, featuring robust error handling and Dio for network layers.",
      "Leveraged BLoC for state management and integrated image caching to enhance performance.",
      "Delivered a responsive UI with smooth animations and Hero transitions for a premium reading experience.",
    ],
    features: [
      "Clean Architecture Layout",
      "Dio Network Layer with Interceptors",
      "Dynamic Image Caching",
      "Hero Transitions & Smooth Animations",
    ],
    techMobile: ["Flutter", "Dart", "BLoC", "Dio"],
    techBackend: ["Google Books API", "Image Caching"],
    techTools: ["Postman", "Git", "VS Code"],
    architectureFlow: [
      "Presentation Layer",
      "Domain Layer",
      "Data Layer",
      "External API",
    ],
    challenges: [
      {
        challenge: "Handling large image loading without stuttering the UI.",
        solution: "Implemented an advanced image caching layer and reused cached network images strategically."
      }
    ],
  },
  {
    id: "student-info-system",
    name: "Student Information System (Flutter Desktop)",
    category: "Desktop",
    heroDescription:
      "A Windows desktop application managing over 500 student records with real-time analytics.",
    githubUrl: "https://github.com/Ibrahim-Nasser0",
    imageUrl: "/assets/projectImages/Hungry.jpg",
    mockupUrl: "/assets/projectImages/hungry_mockup.png",
    skillsUsed: ["Flutter Desktop", "MVVM", "CRUD", "Custom Storage"],
    descriptionPoints: [
      "Developed a Windows desktop app managing 500+ student records with custom file-based storage.",
      "Built an interactive analytics dashboard with real-time statistics, complete CRUD operations, and data export functionality.",
      "Achieved high code quality through MVVM + Cubit architecture with clean, maintainable code.",
    ],
    features: [
      "500+ Record Management",
      "Interactive Analytics Dashboard",
      "Real-time Statistics",
      "Data Export (CSV/PDF)",
    ],
    techMobile: ["Flutter Windows", "Dart", "MVVM", "Cubit"],
    techBackend: ["Custom File-based storage", "Local Persistence"],
    techTools: ["VS Code", "Windows SDK", "Git"],
    architectureFlow: [
      "Windows UI",
      "Cubit Logic",
      "Storage Service",
      "Local Files",
    ],
    challenges: [
      {
        challenge: "Achieving high code quality while handling complex CRUD operations.",
        solution: "Adhered strictly to MVVM patterns and used Cubit for lightweight, testable state management."
      }
    ],
  },
  {
    id: "open-fashion",
    name: "Open Fashion (E-Store)",
    category: "Mobile",
    heroDescription:
      "A pixel-perfect recreation of high-fidelity Figma designs into a functional e-commerce app.",
    githubUrl: "https://github.com/Ibrahim-Nasser0/open_fashion",
    imageUrl: "/assets/projectImages/OpenFashion.jpg",
    mockupUrl: "/assets/projectImages/open_fashon_mockup.png",
    skillsUsed: ["Flutter", "Provider", "Figma", "Animations"],
    descriptionPoints: [
      "Developed a pixel-perfect UI from Figma designs, focusing on high-performance reusable custom widgets.",
      "Managed app state using Provider and implemented smooth animations for a premium user experience.",
    ],
    features: [
      "Pixel-Perfect Figma Replication",
      "Reusable Custom Widget Library",
      "Smooth Micro-animations",
      "Provider State Management",
    ],
    techMobile: ["Flutter", "Dart", "Provider", "Animations API"],
    techBackend: ["Mock JSON / Local Data"],
    techTools: ["Figma", "Git", "VS Code"],
    architectureFlow: [
      "Flutter UI",
      "Provider Model",
      "Local Repository",
      "Design Specs",
    ],
    challenges: [
      {
        challenge: "Reproducing exact design specs from Figma accurately.",
        solution: "Used inspector tools and precise custom widget geometry to ensure 1:1 design fidelity."
      }
    ],
  },
];

export const skillCategories: SkillCategoryModel[] = [
  {
    title: "Mobile & Cross-Platform Engineering",
    iconName: "Smartphone",
    skills: [
      "Flutter",
      "Dart",
      "BLoC / Cubit",
      "Provider",
      "MVVM & MVC",
      "Clean Architecture",
      "Responsive UI",
      "Localization & Internationalization",
      "State Management",
      "App Performance Profiling",
    ],
  },
  {
    title: "Software Architecture & CS Principles",
    iconName: "ShieldCheck",
    skills: [
      "SOLID Design Principles",
      "Clean Coding & Refactoring",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Systems Analysis & Design",
      "UML Modeling",
      "Software Development Life Cycle (SDLC)",
    ],
  },
  {
    title: "Backend Development, APIs & Databases",
    iconName: "Server",
    skills: [
      "ASP.NET Core",
      "C#",
      "Entity Framework (EF) Core",
      "RESTful APIs & Integration",
      "HTTPS & Authentication",
      "Firebase",
      "Microsoft SQL Server",
      "SQLite",
      "MongoDB (NoSQL)",
      "ERD & Database Design",
    ],
  },
  {
    title: "UI/UX & Product Design Systems",
    iconName: "Palette",
    skills: [
      "Figma",
      "Wireframing & Prototyping",
      "User-Centered Design (UCD)",
      "UX Fundamentals & Usability",
      "Responsive UI Layouts",
      "Adobe Illustrator",
    ],
  },
  {
    title: "Tools, Version Control & Leadership",
    iconName: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "GitFlow",
      "Android Studio",
      "VS Code",
      "Postman",
      "Linux / Terminal",
      "Technical Team Leadership",
    ],
  },
];

export const certifications: CertificateModel[] = [
  {
    id: "udemy-clean-arch",
    title: "Deep Dive into Clean Architecture in Flutter",
    issuer: "Udemy",
    date: "Feb 2026",
    category: "Mobile",
    credentialId: "UC-f88d0300-7241-4225-9cf2-e7d5fa969028",
    imageUrl: "/assets/certificate/Clean_Architecture.jpg",
    skillsAcquired: ["Flutter", "Clean Architecture"],
  },
  {
    id: "udemy-bloc-mvvm",
    title: "Flutter Advanced Course BLoC and MVVM Pattern",
    issuer: "Udemy",
    date: "Jan 2026",
    category: "Mobile",
    credentialId: "UC-cb3a7fed-5af1-4cd9-9c69-74ae7f389361",
    imageUrl: "/assets/certificate/Flutter_Advanced_Course_Bloc_and_MVVM_Pattern.jpg",
    skillsAcquired: ["API Integration", "Mobile App Development", "BLoC", "Flutter", "MVVM"],
  },
  {
    id: "udemy-dart-lang",
    title: "Dart programming language",
    issuer: "Udemy",
    date: "Oct 2025",
    category: "Mobile",
    credentialId: "UC-395577b0-5223-4fed-b0af-7a80a0c420d8",
    imageUrl: "/assets/certificate/Dart_programming.jpg",
    skillsAcquired: ["Dart", "OOP"],
  },
  {
    id: "udemy-flutter-81",
    title: "Mobile App Development with Flutter (81.5 H)",
    issuer: "Udemy",
    date: "Oct 2025",
    category: "Mobile",
    credentialId: "UC-054d9555-672d-479c-9b40-ad71ab2b7cae",
    imageUrl: "/assets/certificate/Flutter_for_beginner.jpg",
    skillsAcquired: ["Dart", "Flutter", "SQLite", "Android Studio", "Local data storage"],
  },
  {
    id: "creativa-flutter-internship",
    title: "Mobile App Development with Flutter",
    issuer: "Creativa Innovation Hub",
    date: "Jul 2025",
    category: "Mobile",
    imageUrl: "/assets/certificate/Flutter_106.jpg",
    description: "Developed cross-platform mobile applications using Flutter & Dart in a hybrid environment.",
    skillsAcquired: ["Dart", "Flutter", "Problem Solving", "OOP", "Android Studio"],
  },
  {
    id: "satr-flutter-106",
    title: "Mobile App Development with Flutter 106",
    issuer: "Satr Platform (سطر)",
    date: "Sep 2025",
    category: "Mobile",
    imageUrl: "/assets/certificate/Flutter_106.jpg",
    skillsAcquired: ["Dart", "Flutter", "HTTPS"],
  },
  {
    id: "satr-flutter-105",
    title: "Mobile App Development with Flutter 105",
    issuer: "Satr Platform (سطر)",
    date: "Sep 2025",
    category: "Mobile",
    imageUrl: "/assets/certificate/Flutter_105.jpg",
    skillsAcquired: ["Dart", "Flutter"],
  },
  {
    id: "satr-dart-104",
    title: "Programming language Dart 104",
    issuer: "Satr Platform (سطر)",
    date: "Sep 2025",
    category: "Mobile",
    imageUrl: "/assets/certificate/Dart_104.jpg",
    skillsAcquired: ["Dart", "Flutter"],
  },
  {
    id: "sprints-mobile-camp",
    title: "Sprints x Microsoft Summer Camp - Mobile Development",
    issuer: "Sprints",
    date: "Aug 2025",
    category: "Mobile",
    credentialId: "SPR - 1FB77R",
    imageUrl: "/assets/certificate/Sprints_x_Microsoft_Flutter.jpg",
    skillsAcquired: ["Dart", "Flutter", "OOP", "Android Studio"],
  },
  {
    id: "manara-db",
    title: "Database",
    issuer: "Manara",
    date: "Sep 2025",
    category: "Backend",
    credentialId: "1758040647-7FF8037C04C72755",
    imageUrl: "/assets/certificate/Database.jpg",
    skillsAcquired: ["MongoDB", "NoSQL", "Database Design", "SQL"],
  },
  {
    id: "mahara-mongodb",
    title: "Introduction to MongoDB",
    issuer: "MaharaTech",
    date: "Jan 2026",
    category: "Backend",
    credentialId: "u9qBQvGYCH",
    imageUrl: "/assets/certificate/Database.jpg",
    skillsAcquired: ["MongoDB", "NoSQL"],
  },
  {
    id: "datacamp-python",
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "Oct 2025",
    category: "Backend",
    credentialId: "421ac780724af82470e66281bda4d97bfe23c1d0",
    imageUrl: "/assets/certificate/Introduction_to_Python_DataCamp.jpg",
    skillsAcquired: ["Python", "NumPy"],
  },
  {
    id: "datacamp-sql",
    title: "Introduction to SQL",
    issuer: "DataCamp",
    date: "Oct 2025",
    category: "Backend",
    credentialId: "3c9a4ae458ec1befd407b6871ec8ec06da6aaada",
    imageUrl: "/assets/certificate/datacamp_sql.jpg",
    skillsAcquired: ["SQL", "Databases"],
  },
  {
    id: "mahara-db-fund",
    title: "Database Fundamentals",
    issuer: "MaharaTech",
    date: "Oct 2025",
    category: "Backend",
    credentialId: "Gga33mzdVG",
    imageUrl: "/assets/certificate/Database_Fundamentals.jpg",
    skillsAcquired: ["MS SQL Server", "SQL"],
  },
  {
    id: "satr-ui-design",
    title: "User Interface Design",
    issuer: "Satr Platform (سطر)",
    date: "Sep 2025",
    category: "UI/UX",
    imageUrl: "/assets/certificate/UI.jpg",
    skillsAcquired: ["Figma", "User Interface Design"],
  },
  {
    id: "mahara-ux",
    title: "UX Design Fundamentals",
    issuer: "MaharaTech",
    date: "Sep 2025",
    category: "UI/UX",
    credentialId: "vcluQL4WfG",
    imageUrl: "/assets/certificate/UX_Certificate_En.jpg",
    skillsAcquired: ["Prototyping", "UX", "Visual Design"],
  },
  {
    id: "sprints-uiux",
    title: "Sprints x Microsoft Summer Camp - UIUX Design",
    issuer: "Sprints x Microsoft",
    date: "Sep 2025",
    category: "UI/UX",
    credentialId: "SPR - 440IO6",
    imageUrl: "/assets/certificate/Sprints_x_Microsoft_UIUX.jpg",
    skillsAcquired: ["Prototyping", "UX", "Visual Design", "UI Design"],
  },
  {
    id: "mahara-oop",
    title: "Mastering Object-Oriented Programming (OOP) using C++",
    issuer: "MaharaTech",
    date: "Sep 2025",
    category: "Tools & Core",
    credentialId: "UcZaVWV6MW",
    imageUrl: "/assets/certificate/Mastering_Object_Oriented_Programming_OOP_using_C.jpg",
    skillsAcquired: ["Problem Solving", "OOP", "C++"],
  },
  {
    id: "mahara-clean-code",
    title: "The Principles of Writing Clean Code",
    issuer: "MaharaTech",
    date: "Sep 2025",
    category: "Tools & Core",
    credentialId: "jlkj5OzFFV",
    imageUrl: "/assets/certificate/The_Principles_of_Writing_Clean_Code.jpg",
    skillsAcquired: ["Clean Coding", "Clean Architecture", "Code Refactoring"],
  },
  {
    id: "almdrasa-git",
    title: "Git and GitHub",
    issuer: "Almdrasa (المدرسة)",
    date: "Sep 2025",
    category: "Tools & Core",
    credentialId: "733DA5CD10-733D963B87-13F557FB3",
    imageUrl: "/assets/certificate/Ibrahim_Nasser_Git_GitHub_Git_and_GitHub.jpg",
    skillsAcquired: ["GitHub", "Git"],
  },
  {
    id: "datacamp-github",
    title: "Introduction to GitHub Concepts",
    issuer: "DataCamp",
    date: "Oct 2025",
    category: "Tools & Core",
    credentialId: "21ab4df1772a1b3d59219b542e7d279964b9d4e8",
    imageUrl: "/assets/certificate/datacamp_github.jpg",
    skillsAcquired: ["GitHub", "Git"],
  },
];
