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
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
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
      dateRange: "Aug 2024 - May 2028 (Expected)",
      achievements: [
        "Dean's Award for International Student Excellence",
        "Relevant Coursework: Data Structures & Algorithms, Computer Systems, Software Engineering, Database Systems",
      ],
    },
  ],
};
