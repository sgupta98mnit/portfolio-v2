export const portfolioData = {
  hero: {
    name: "Sumit Gupta",
    role: "Senior Software Engineer",
    subheading: "Building scalable Full Stack Systems and secure Identity & Access Management (IAM) solutions.",
    tagline: "Engineering Trust. Scaling Innovation.",
    cta: {
      primary: "View Work",
      secondary: "Contact Me"
    },
    resume: "/resume.pdf",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:sgupta98mnit@gmail.com"
    }
  },
  about: {
    title: "About Me",
    description: "I am a Senior Software Engineer with over 3 years of experience architecting high-performance cloud systems and enterprise-grade security solutions. Currently pursuing my MS in Computer Science at the University at Buffalo, I specialize in Full Stack Development (Java, Spring Boot, React, Next.js) and Identity Protocols (SAML, OAuth 2.0, OIDC). At miniOrange, I led a 12-member team to deliver critical SaaS products and Shopify apps used by millions.",
  },
  experience: [
    {
      company: "miniOrange",
      role: "Senior Software Engineer",
      period: "July 2021 – July 2024",
      highlights: [
        "Led a cross-functional team of 12 software engineers using Agile methodologies to develop and maintain over 10 cloud-based Shopify applications.",
        "Contributed to full-stack development, conducted code reviews, and resolved critical production bugs.",
        "Implemented and integrated Identity and Access Management (IAM) protocols including SAML, OAuth 2.0, and JWT for secure authentication and authorization.",
        "Diagnosed and resolved production issues like database connection timeouts, Memcache crashes, thread concurrency problems, and memory leaks during GraphQL client integration.",
        "Independently developed, tested, and deployed 'Inventory Sync' and 'Salesforce Sync' applications on the Shopify App Store using Spring Boot.",
        "Optimized CI/CD pipelines by profiling codebases and automating Docker-based deployments in an AWS load-balanced architecture.",
        "Improved system scalability and deployment efficiency by 40%."
      ],
      tech: ["Java", "Spring Boot", "Redis", "GraphQL", "Shopify Liquid", "PHP", "AWS", "Docker", "Kubernetes"]
    },
    {
      company: "ServiceNow",
      role: "Software Development Intern",
      period: "July 2020 – Nov 2020",
      highlights: [
        "Integrated machine learning solutions into the ServiceNow platform to enhance Universal Request functionality using Java and JavaScript APIs.",
        "Developed and customized dynamic user interfaces for the ServiceNow mobile app using HTML5, CSS3, and ServiceNow’s UI frameworks.",
        "Implemented automated testing suites using Selenium and JUnit to validate ML features and mobile app enhancements.",
        "Increased test coverage and ensured reliable workflows through robust testing strategies.",
        "Collaborated with cross-functional teams and followed Agile/Scrum methodologies for timely and high-quality software delivery."
      ],
      tech: ["Java", "JavaScript", "HTML5", "CSS3", "Selenium", "JUnit", "ML Algorithms"]
    }
  ],
  projects: [
    {
      title: "FinCore",
      description: "Event-Driven FinTech Microservices",
      longDescription: "A high-performance fintech platform built with NestJS and Next.js. Features API Gateway routing, Kafka-based event streaming, and a double-entry ledger. Implements robust fraud detection and idempotency keys (Redis) for secure transfers.",
      tech: ["NestJS", "Next.js", "Kafka", "PostgreSQL", "Redis", "Docker"],
      link: "#"
    },
    {
      title: "Multi-Tenant Support Platform",
      description: "SaaS Backend with Strict Isolation",
      longDescription: "A scalable multi-tenant backend using Spring Boot 3. Enforces strict tenant isolation, RBAC, and event-driven workflows via Kafka. Includes full-text search (Postgres FTS), attachment storage (MinIO), and observability (OpenTelemetry).",
      tech: ["Spring Boot 3", "PostgreSQL", "MinIO", "Kafka", "OpenTelemetry"],
      link: "#"
    },
    {
      title: "Radiant Clothing",
      description: "Full-Stack E-Commerce App",
      longDescription: "A modern e-commerce platform built with React, Redux, and GraphQL. Features secure authentication (Firebase), payments (Stripe), and scalable state management (Redux-Saga). Deployed on VPS.",
      tech: ["React", "Redux", "GraphQL", "Firebase", "Stripe"],
      link: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Node.js & Socket.io Chat Platform",
      longDescription: "A real-time communication app built with Node.js and Socket.io. Supports multi-room chat, location sharing, and instant notifications. Templating via Mustache.js and tested with Mocha/Chai.",
      tech: ["Node.js", "Express", "Socket.io", "Mocha", "Mustache.js"],
      link: "#"
    },
    {
      title: "JavaFX Media Player",
      description: "Cross-Platform Desktop App",
      longDescription: "A rich desktop media player utilizing JavaFX and Java 8. Features MVC architecture, playlist management, drag-and-drop support, and performance optimizations.",
      tech: ["Java", "JavaFX", "MVC"],
      link: "#"
    }
  ],
  skills: [
    {
      category: "Full Stack & Backend",
      items: ["Java", "Spring Boot", "NestJS", "Node.js", "React", "Next.js", "GraphQL", "Microservices"]
    },
    {
      category: "Identity & Security (IAM)",
      items: ["SAML 2.0", "OAuth 2.0", "OIDC", "JWT", "PKCE", "SCIM 2.0", "RBAC"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "Kafka", "Terraform", "GitHub Actions", "Nginx"]
    },
    {
      category: "Data & Storage",
      items: ["PostgreSQL", "Redis", "Memcached", "Firebase", "MinIO", "Elasticsearch"]
    }
  ]
};
