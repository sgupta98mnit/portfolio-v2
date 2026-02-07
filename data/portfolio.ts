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
        "Led a 12-member team delivering 10+ cloud-based Shopify apps (Inventory Sync, Salesforce Sync) built using Java and the Spring Framework, owning planning, code reviews, and releases.",
        "Architected enterprise IAM solutions using SAML, OAuth 2.0, and JWT within Java/Spring Boot ecosystems.",
        "Resolved recurring production incidents (DB timeouts, Memcached crashes, GraphQL memory leaks), reducing on-call escalations.",
        "Automated CI/CD and Docker deployments on AWS behind a load balancer, reducing release effort and enabling faster rollbacks.",
        "Implemented SCIM 2.0 provisioning and PKCE to enhance security for mobile and single-page applications."
      ],
      tech: ["Java", "Spring Boot", "React", "GraphQL", "Redis", "AWS", "Docker"]
    },
    {
      company: "ServiceNow",
      role: "Software Development Intern",
      period: "July 2020 – Nov 2020",
      highlights: [
        "Integrated ML-driven enhancements into ServiceNow Universal Request using JavaScript (Client) and Java (Server).",
        "Delivered mobile UI improvements using HTML5/CSS3 and built automated regression tests with Selenium/JUnit.",
        "Collaborated in an Agile Scrum team to ship iterative product improvements."
      ],
      tech: ["Java", "JavaScript", "ServiceNow APIs", "Selenium", "HTML5/CSS3"]
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
