export interface Project {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image?: string;
  tech: string[];
  github: string;
  live?: string;
  walkthrough?: string;
  accent: {
    from: string;
    to: string;
    glow: string;
  };
  overview: string;
  highlights: string[];
  features: string[];
  challenge: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "woven-monopoly",
    title: "Woven Monopoly",
    tagline: "A digital Monopoly-style experience built for gameplay, clarity, and momentum",
    description:
      "An interactive board game application that recreates a Monopoly-style flow on the web with an emphasis on polished gameplay screens, player actions, and a demoable live experience.",
    image: "/projects/Monopoly/monopoly.jpeg",
    tech: ["React.js", "Vite", "TypeScript", "Node.js", "Express.js", "MongoDB","Vercel"],
    github: "https://github.com/02siri/Woven-Monopoly",
    live: "https://woven-monopoly.vercel.app/",
    walkthrough:
      "https://drive.google.com/file/d/1a8QNfBL85wHdQPEaSRQpvCrZtH9UE6Pn/view?usp=sharing",
    accent: {
      from: "#172554",
      to: "#7c2d12",
      glow: "rgba(249, 115, 22, 0.25)",
    },
    overview:
      "Woven Monopoly translates a board-game experience into a browser-first product. The goal is not just implementing turns and movement, but presenting state changes, player decisions, and gameplay context in a way that stays readable and enjoyable.",
    highlights: [
      "Built a web-based Monopoly-style game that turns classic board mechanics into a more accessible digital experience.",
      "Added a live deployment and walkthrough-ready flow so the project can be shown end-to-end during reviews and applications.",
      "Focused on making game state and player actions visually understandable instead of burying them inside dense UI.",
    ],
    features: [
      "Interactive digital board-game flow",
      "Turn-based gameplay patterns and state transitions",
      "Readable UI for player actions and progression",
      "Live demo plus walkthrough support for recruiters and reviewers",
    ],
    challenge:
      "Game interfaces can become noisy quickly, especially when rules and state updates stack up. This build focuses on keeping core actions visible and the board experience understandable without sacrificing energy.",
  },
  {
    id: 2,
    slug: "streamgpt",
    title: "StreamGPT",
    tagline: "AI-powered movie discovery experience with streaming-first interactions",
    description:
      "A cinematic discovery platform that helps users search, explore, and browse movie content through an AI-forward interface and responsive Firebase deployment.",
   image:"/projects/StreamGPT/streamGPT.jpeg",
      tech: ["React.js", "Redux", "JavaScript", "TailwindCSS", "Firebase", "TMDB API", "Gemini API"],
    github: "https://github.com/02siri/StreamGPT",
    live: "https://streamgpt-fbfdc.web.app",
    accent: {
      from: "#0f172a",
      to: "#0f766e",
      glow: "rgba(45, 212, 191, 0.28)",
    },
    overview:
      "StreamGPT is positioned as a polished entertainment product rather than a plain search tool. The experience focuses on helping users find something worth watching quickly, with an interface that feels immersive, fast, and easy to scan across devices.",
    highlights: [
      "Designed an AI-inspired movie discovery flow that feels more conversational and visual than a traditional catalog UI.",
      "Shipped the app with Firebase hosting so the experience is fast to access and easy to demo live.",
      "Focused the front-end around responsive browsing, prominent content previews, and smooth interaction patterns.",
    ],
    features: [
      "Movie discovery and search experience",
      "Responsive browsing for desktop and mobile",
      "Immersive visual presentation for featured content",
      "Production-style deployment via Firebase hosting",
    ],
    challenge:
      "The main design challenge was making discovery feel engaging instead of overwhelming. The interface leans on hierarchy, strong previews, and quick actions so users can move from curiosity to selection without friction.",
  },
  {
    id: 3,
    slug: "loopedin",
    title: "LoopedIn",
    tagline: "Serverless music subscription platform backed by AWS cloud services",
    description:
      "A cloud-native music subscription web app powered by AWS services, built around scalable content delivery, user flows, and serverless architecture.",
    image: "/projects/LoopedIn/LI_Home.png",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "AWS S3",
      "AWS DynamoDB",
      "AWS API Gateway",
      "AWS Lambda",
      "AWS EC2",
    ],
    github: "https://github.com/02siri/LoopedIn",
    live: "https://looped-in-pi.vercel.app/",
    accent: {
      from: "#1d4ed8",
      to: "#7c3aed",
      glow: "rgba(96, 165, 250, 0.26)",
    },
    overview:
      "LoopedIn demonstrates a stronger cloud engineering angle in the portfolio. It combines a polished subscription product surface with AWS services for data storage, asset delivery, API exposure, and scalable backend behavior.",
    highlights: [
      "Built a serverless music subscription workflow using AWS Lambda, DynamoDB, S3, API Gateway, and EC2-backed infrastructure pieces.",
      "Designed the platform around scalable cloud services rather than a single monolithic backend.",
      "Connected a modern Next.js front-end to a service-oriented backend for a more production-shaped architecture.",
    ],
    features: [
      "Music subscription and user interaction flows",
      "Cloud-backed metadata and storage management",
      "Serverless API and compute handling",
      "Responsive front-end for content discovery and subscription actions",
    ],
    challenge:
      "The core engineering tradeoff was balancing a smooth user experience with distributed cloud services. The project shows how product UX and cloud architecture can work together instead of being treated separately.",
  },
  {
    id: 4,
    slug: "teachteam",
    title: "TeachTeam",
    tagline: "Collaborative education platform for teams, assignments, and project coordination",
    description:
      "A full-stack learning platform that supports collaborative team formation, project workflows, and classroom-style coordination between students and educators.",
    image: "/projects/TeachTeam/TeachTeam.png",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MySQL",
      "TypeORM",
      "GraphQL",
      "Jest",
    ],
    github: "https://github.com/02siri/TeachTeam",
    accent: {
      from: "#1e293b",
      to: "#14532d",
      glow: "rgba(74, 222, 128, 0.22)",
    },
    overview:
      "TeachTeam focuses on collaboration-heavy product flows. It is designed around the practical friction points that show up when teams need to organize work, track assignments, and communicate clearly inside a shared learning environment.",
    highlights: [
      "Created a collaboration-focused platform for learning teams, assignment tracking, and project organization.",
      "Used GraphQL, TypeORM, and MySQL to support more structured data relationships across users, teams, and tasks.",
      "Included testing support with Jest to reinforce reliability across core flows.",
    ],
    features: [
      "Team formation and coordination workflows",
      "Assignment and project tracking",
      "Shared collaboration features for students and educators",
      "Structured relational data management through MySQL and TypeORM",
    ],
    challenge:
      "Educational products need information clarity more than flashy complexity. The main goal here was shaping collaborative features so teams could understand ownership, progress, and context without feeling lost.",
  },
  {
    id: 5,
    slug: "burritoking",
    title: "BurritoKing",
    tagline: "Desktop food-ordering system with admin and customer management flows",
    description:
      "A Java desktop application for restaurant ordering and operations, covering menu management, order handling, and customer-facing flows.",
    image: "/projects/BurritoKing/BurritoKing.png",
    tech: ["Java", "JavaFX", "SceneBuilder", "JDK", "JDBC", "SQLite", "JUnit"],
    github: "https://github.com/02siri/BurritoKing",
    accent: {
      from: "#422006",
      to: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.28)",
    },
    overview:
      "BurritoKing shows a different side of the portfolio by moving beyond web apps into desktop software. It focuses on a more operations-driven domain where order flow, data persistence, and UI clarity matter just as much as aesthetics.",
    highlights: [
      "Built a restaurant management desktop app with ordering, menu management, and order tracking capabilities.",
      "Used JavaFX and SceneBuilder to create a GUI-based experience rather than relying on browser delivery.",
      "Backed the app with SQLite and JDBC for persistent transactional workflows.",
    ],
    features: [
      "Customer ordering journey",
      "Menu and order management workflows",
      "Desktop UI built with JavaFX",
      "SQLite-backed persistence and JUnit-based testing",
    ],
    challenge:
      "Desktop interfaces need clear structure because users cannot rely on familiar browser interaction patterns. This project puts emphasis on making restaurant operations approachable inside a custom GUI.",
  },
  {
    id: 6,
    slug: "airstay",
    title: "AirStay",
    tagline: "Accommodation booking platform inspired by modern hospitality products",
    description:
      "A booking platform for property browsing, authentication, reservations, and listing exploration, built with a hospitality-oriented user flow.",
    image: "/projects/AirStay/AirStay.png",
    tech: ["HTML", "Tailwind CSS", "Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/02siri/AirStay",
    accent: {
      from: "#0f172a",
      to: "#be123c",
      glow: "rgba(244, 63, 94, 0.24)",
    },
    overview:
      "AirStay reflects product thinking around search, browsing, and booking. It is structured to feel familiar to users while still giving enough backend support for listings, user sessions, and reservation-oriented workflows.",
    highlights: [
      "Built a full-stack accommodation booking experience with listings, reservations, and authentication flows.",
      "Used Express and MongoDB to support property and booking data in a document-oriented backend.",
      "Focused on responsive UI patterns so browsing and booking remain smooth across device sizes.",
    ],
    features: [
      "Property listing exploration",
      "Search and browsing flows",
      "User authentication and booking management",
      "Responsive front-end tailored to hospitality use cases",
    ],
    challenge:
      "Booking products depend heavily on trust and clarity. The project centers on making listing information, user actions, and reservation flows easy to follow without extra friction.",
  },
  {
    id: 7,
    slug: "vetcare",
    title: "VetCare",
    tagline: "Clinic operations platform for appointments, records, and treatment workflows",
    description:
      "A veterinary clinic management system for handling appointments, patient data, treatment tracking, and everyday operational workflows.",
    image: "/projects/VetCare/VetCare.JPG",
    tech: [
      "Java",
      "Bootstrap",
      "Spring Boot",
      "Maven",
      "MySQL",
      "Flyway",
      "Docker",
      "JDBC",
      "JUnit",
    ],
    github: "https://github.com/02siri/VetCare",
    accent: {
      from: "#0f172a",
      to: "#0f766e",
      glow: "rgba(45, 212, 191, 0.22)",
    },
    overview:
      "VetCare is oriented around operational reliability. The system models the real-world needs of clinics where appointments, treatment records, and patient context need to stay organized across ongoing care workflows.",
    highlights: [
      "Developed a clinic management system covering appointments, records, treatment tracking, and billing-related operational flows.",
      "Used Spring Boot, MySQL, and Flyway for a more structured backend and database evolution workflow.",
      "Included Docker in the setup to support a cleaner development and deployment story.",
    ],
    features: [
      "Appointment scheduling and patient record management",
      "Treatment tracking for ongoing care workflows",
      "Spring Boot service architecture with MySQL persistence",
      "Database migrations and containerized setup support",
    ],
    challenge:
      "Healthcare-adjacent tools need structure and trustworthiness. This build emphasizes predictable data handling and workflow clarity so day-to-day clinic operations remain manageable.",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
