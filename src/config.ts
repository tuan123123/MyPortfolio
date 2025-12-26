export const siteConfig = {
  name: "Tuan Nguyen",
  title: "Sophomore CS Student | Aspiring Software Engineer",
  description: "Portfolio website of Tuan Nguyen",
  accentColor: "#1d4ed8",
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
      name: "Crypto Pilot - Trading",
      description:
        "A real-time cryptocurrency trading platform that allows users to buy, sell, and monitor various cryptocurrencies with live market data and portfolio tracking.",
      link: "https://github.com/po-tech-community/crypto-pilot-fe",
      skills: ["MongoDB", "React.js", "Node.js", "Express.js", "AWS", "Redis", "Binance API"],
    },
    {
      name: "tAI - AI Research Assistant",
      description:
        "An AI-powered research assistant that helps researchers find relevant papers, summarize findings, and generate citations quickly and accurately.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Python", "Next.js", "LangChain", "Hugging Face", "Google Cloud Platform"],
    },
    
  ],
  experience: [
    {
      company: "SWAPP Lab (Supervisor: Dr. Ali Jannesari) ",
      title: "Undergraduate Research Assistant",
      dateRange: "Dec 2024 - Present",
      bullets: [
        "Built an automated agent to validate and improve LLM-generated HPC code across 50+ benchmarks.",
        "Debugged and optimized PyTorch→JAX/CUDA translations through 100+ test runs for scalable performance.",
        "Increased execution success by 35% and cut debugging time by 40% with reproducible error-fix pipelines.",
      ],
    },
    {
      company: "Information Technology Services",
      title: "Audiovisual Technician",
      dateRange: "Jan 2025 – Present",
      bullets: [
        "Managed AV systems with 300+ hours of hands-on setup and real-time problem-solving.",
        "Delivered live tech support for 25+ major campus events (500+ attendees).",
        "Resolved 100+ technical issues, reducing downtime by 30%+.",
      ],
    },
  ],
  education: [
    {
      school: "Iowa State University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Aug 2024 - May 2027 (Expected)",
      achievements: [
        "Dean's Award for International Student Excellence",
        "Relevant Coursework: Data Structures and Algorithms, Web Development, Databases, Operating System, Object-Oriented Programming (OOP), Artificial Intelligence, Cloud Computing, Computer Networks",
      ],
    },
  ],
};
