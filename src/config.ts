export const siteConfig = {
  name: "Tuan Nguyen",
  title: "Sophomore CS Student | Aspiring Software Engineer",
  description: "Portfolio website of Tuan Nguyen",
  accentColor: "#8ae28aff",
  social: {
    email: "tuan1010@iastate.edu",
    linkedin: "https://www.linkedin.com/in/tuan-nguyen-4511b0274/",
    github: "https://github.com/tuan123123",
  },
  aboutMe:
    "I’m a Computer Science student at Iowa State University focused on building scalable, reliable software. I work on automated validation pipelines for high-performance computing code, improving execution success and reducing debugging time through reproducible engineering practices. I’ve also shipped full-stack systems with real-time communication, optimized databases, and automated CI/CD to ensure performance under real load.",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "TLearn - AI Tutor",
      description:
        "Built and launched an agentic AI tutor used by 100+ students, generating $500+ in revenue and improving average grades by 30% through LangChain tool orchestration, personalized recommendations, and multi-step question answering.",
      link: "https://tlearn-web-bj5mphzx7q-uc.a.run.app/",
      skills: [
        "Python",
        "LangChain",
        "RAG",
        "Hugging Face",
        "Redis",
        "Google Cloud Platform",
      ],
    },
    {
      name: "Crypto Pilot - Trading",
      description:
        "A real-time cryptocurrency trading platform that allows users to buy, sell, and monitor various cryptocurrencies with live market data and portfolio tracking.",
      link: "https://github.com/po-tech-community/crypto-pilot-fe",
      skills: [
        "MongoDB",
        "React.js",
        "Node.js",
        "Express.js",
        "AWS",
        "Redis",
        "Binance API",
      ],
    },
    {
      name: "tAI - AI Research Assistant",
      description:
        "An AI-powered research assistant that helps researchers find relevant papers, summarize findings, and generate citations quickly and accurately.",
      link: "https://github.com/tuan123123/tAI",
      skills: [
        "Python",
        "Next.js",
        "LangChain",
        "Hugging Face",
        "Google Cloud Platform",
      ],
    },
  ],
  experience: [
    {
      company: "HSBC Holdings",
      title: "Software Engineer Intern (Bank Transaction Team)",
      dateRange: "May 2026 – Aug 2026",
      bullets: [
        "Developed backend API in Java Spring Boot for processing Premium Membership transactions, integrating Kafka for message queuing and Redis Streams for real-time ingestion of 20K+ events/min, reducing system lag by 40%",
        "Integrated Prometheus and Grafana with AWS CloudWatch to monitor global transaction service performance and optimize AWS EC2 usage, improved alerting accuracy and helped reduce idle resource cost by $5,000 per month",
        "Built automated CI/CD pipeline for Premium Transactions Service using GitHub Actions, Docker Compose, reducing deploy rollback risk by 50% with integrated security scan and unit test coverage of 95%",
      ],
    },
    {
      company: "Microsoft ",
      title: "AI and Machine Learning - Exploratory Program",
      dateRange: "Jan 2026 – March 2026",
      bullets: [
        "Built an LLM health assistant utilizing Azure OpenAI Services and LangChain to interpret patient records, generate diagnostic insights, and assist predictive models in assessing cardiovascular risk",
        "Fine-tuned TabNet model for heart disease prediction using the UCI Heart Disease dataset, leveraging Python, pandas, and Hugging Face with feature selection and hyperparameter tuning to reach 90% accuracy",
      ],
    },
    {
      company: "CloudyScale.ai",
      title: "Software Engineer Intern (Web Development Team)",
      dateRange: "May 2025 – Aug 2025",
      bullets: [
        "Delivered document search application used by 30 employees, by building UI components with Next.js, TypeScript, and TailwindCSS and integrating authenticated APIs using OAuth 2.0 and role-based access control",
        "Reduced chatbot response latency by 34%, measured by average API response time, by developing backend services in Golang, optimizing query paths in MySQL, and adding request-level caching for conversation history.",
        "Wrote 40+ unit and integration tests across backend and frontend using Pytest, pytest-mock, and Selenium, increasing test coverage to 85% and reducing manual QA time by 20% in weekly deployments",
      ],
    },
  ],
  education: [
    {
      school: "Iowa State University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Aug 2024 - May 2028 (Expected)",
      achievements: [
        "Dean's Award for International Student Excellence",
        "Relevant Coursework: Data Structures and Algorithms, Web Development, Databases, Operating System, Object-Oriented Programming (OOP), Artificial Intelligence, Cloud Computing, Computer Networks",
      ],
    },
  ],
};
