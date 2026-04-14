export const portfolioData = {
  hero: {
    name: "Sumit Gupta",
    role: "Senior Software Engineer",
    subheading: "Building scalable Full Stack Systems, multi-tenant SaaS platforms, and secure Identity & Access Management (IAM) solutions.",
    tagline: "Engineering Trust. Scaling Innovation.",
    cta: {
      primary: "View Work",
      secondary: "Contact Me"
    },
    resume: "/resume.pdf",
    socials: {
      github: "https://github.com/sgupta98mnit",
      linkedin: "https://www.linkedin.com/in/sumit-gupta-2a6406160/",
      email: "mailto:sgupta98mnit@outlook.com"
    }
  },
  about: {
    title: "About Me",
    description: "Software Engineer with 4+ years of experience building high-performance cloud systems and enterprise-grade security solutions. Currently working at EduTrend (multi-tenant education platform) and Saz Tech (Zoho development), with an MS in Computer Science from the University at Buffalo. I specialize in Full Stack Development (TypeScript, Java, Spring Boot, React, Next.js), Identity Protocols (SAML, OAuth 2.0, OIDC), and multi-tenant SaaS architecture.",
  },
  experience: [
    {
      company: "Saz Tech",
      role: "Zoho Developer",
      period: "April 2026 – Present",
      highlights: [
        "Developing and customizing Zoho CRM and Zoho Creator applications to streamline business workflows.",
        "Building Deluge scripts and custom functions to automate processes across the Zoho ecosystem.",
        "Integrating Zoho apps with third-party services via REST APIs and webhooks."
      ],
      tech: ["Zoho CRM", "Zoho Creator", "Deluge", "REST APIs", "JavaScript"]
    },
    {
      company: "EduTrend",
      role: "Software Engineer",
      period: "Feb 2026 – Present",
      highlights: [
        "Built features for a multi-tenant education platform using TypeScript, GraphQL, MongoDB, Redis, and Clerk, with strict tenant-scoped data access and RBAC.",
        "Implemented dynamic form builder workflows across GraphQL resolvers, Mongoose services, and Expo React Native, enabling configurable data collection for education teams.",
        "Hardened tenant and organization lifecycle operations by improving DB connection handling, safe delete flows, and cleanup for isolated tenant databases in a multi-tenant architecture.",
        "Improved backend observability with structured CloudWatch-ready logging, request context propagation, and sensitive-field redaction for compliance-conscious production debugging.",
        "Expanded automated test coverage with Jest unit/integration tests and supported local development with a Docker-based full-stack setup."
      ],
      tech: ["TypeScript", "GraphQL", "MongoDB", "Redis", "Clerk", "React Native", "Jest", "Docker", "CloudWatch"]
    },
    {
      company: "miniOrange",
      role: "Senior Software Engineer",
      period: "July 2021 – July 2024",
      highlights: [
        "Led a 12-member team to deliver 10+ cloud-based Shopify apps; owned planning, code reviews, releases, and production support in an Agile/Scrum setup.",
        "Implemented enterprise IAM using SAML, OAuth 2.0, and JWT, reducing onboarding friction and improving security posture for customer deployments.",
        "Built and shipped Shopify App Store products (Inventory Sync, Salesforce Sync) using Java and Spring Boot, supporting high-volume scheduled syncs and external API integrations.",
        "Resolved recurring production incidents (DB connection timeouts, Memcached crashes, thread/concurrency issues, GraphQL memory leaks), cutting on-call escalations by improving stability.",
        "Automated CI/CD and Docker deployments on AWS behind a load balancer, reducing release effort and enabling faster rollbacks during incidents.",
        "Wrote Python scripts for data migrations, batch jobs, and third-party API integrations, automating recurring operational tasks and reducing manual intervention."
      ],
      tech: ["Java", "Spring Boot", "Python", "Redis", "GraphQL", "PHP", "AWS", "Docker", "Kubernetes"]
    },
    {
      company: "ServiceNow",
      role: "Software Development Intern",
      period: "July 2020 – Nov 2020",
      highlights: [
        "Integrated ML-driven enhancements into ServiceNow Universal Request using JavaScript (client) and Java (server) APIs, improving request routing and automation.",
        "Delivered mobile UI improvements using HTML5, CSS3, and ServiceNow UI frameworks, improving usability across common request flows.",
        "Built automated regression tests with Selenium and JUnit, increasing test coverage and reducing manual QA effort."
      ],
      tech: ["Java", "JavaScript", "HTML5", "CSS3", "Selenium", "JUnit"]
    }
  ],
  projects: [
    {
      title: "FinCore",
      description: "Event-Driven FinTech Microservices",
      longDescription: "A high-performance fintech platform built with NestJS and Next.js. Features API Gateway routing, Kafka-based event streaming, and a double-entry ledger. Implements robust fraud detection and idempotency keys (Redis) for secure transfers.",
      tech: ["NestJS", "Next.js", "Kafka", "PostgreSQL", "Redis", "Docker"],
      link: "https://www.sumit-gupta.cloud/projects/fincore/"
    },
    {
      title: "Multi-Tenant Support Platform",
      description: "SaaS Backend with Strict Isolation",
      longDescription: "A scalable multi-tenant backend using Spring Boot 3. Enforces strict tenant isolation, RBAC, and event-driven workflows via Kafka. Includes full-text search (Postgres FTS), attachment storage (MinIO), and observability (OpenTelemetry).",
      tech: ["Spring Boot 3", "PostgreSQL", "MinIO", "Kafka", "OpenTelemetry"],
      link: "https://www.sumit-gupta.cloud/projects/helpdesk"
    },
    {
      title: "Radiant Clothing",
      description: "Full-Stack E-Commerce App",
      longDescription: "A modern e-commerce platform built with React, Redux, and GraphQL. Features secure authentication (Firebase), payments (Stripe), and scalable state management (Redux-Saga). Deployed on VPS.",
      tech: ["React", "Redux", "GraphQL", "Firebase", "Stripe"],
      link: "https://sumit-gupta.cloud/projects/radiant-clothing/"
    },
    {
      title: "Monster Mania",
      description: "Interactive Browser Game",
      longDescription: "A browser-based interactive game built with modern web technologies.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      link: "https://www.sumit-gupta.cloud/projects/monster-mania"
    },
    {
      title: "Real-time Chat Application",
      description: "Node.js & Socket.io Chat Platform",
      longDescription: "A real-time communication app built with Node.js and Socket.io. Supports multi-room chat, location sharing, and instant notifications. Templating via Mustache.js and tested with Mocha/Chai.",
      tech: ["Node.js", "Express", "Socket.io", "Mocha", "Mustache.js"],
      link: "#"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Java", "TypeScript", "JavaScript", "Python", "PHP", "SQL", "C++", "Bash"]
    },
    {
      category: "Frontend & Mobile",
      items: ["React", "Next.js", "Expo React Native", "Redux", "Redux-Saga", "Tailwind CSS", "HTML5", "CSS3", "Mustache.js"]
    },
    {
      category: "Backend & Architecture",
      items: ["Spring Boot", "NestJS", "Node.js", "Express", "GraphQL", "REST APIs", "Microservices", "API Gateway", "Multi-tenancy", "Event-driven", "Webhooks", "RBAC"]
    },
    {
      category: "Identity & Security (IAM)",
      items: ["SAML 2.0", "OAuth 2.0", "OIDC", "JWT", "PKCE", "SCIM 2.0", "Clerk", "SSO", "MFA"]
    },
    {
      category: "Data & Messaging",
      items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Memcached", "Firebase", "MinIO", "Elasticsearch", "Full-Text Search", "Outbox Pattern", "Idempotency"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Nginx", "CI/CD", "Flyway"]
    },
    {
      category: "Testing & Observability",
      items: ["JUnit", "Jest", "Selenium", "Testcontainers", "Mocha", "OpenTelemetry", "Prometheus", "CloudWatch", "Pino", "Postman", "Swagger"]
    }
  ]
};
