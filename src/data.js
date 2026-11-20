// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Vinaykumar Hatwar",
  firstName: "Vinaykumar",
  role: "Full Stack Web Developer",
  roles: [
    "Full Stack Web Developer",
    "Next.js & Node.js Engineer",
    "AI / RAG Builder",
    "REST API Architect",
  ],
  location: "Bhandara, Maharashtra",
  email: "vinayhatwar16@gmail.com",
  phone: "+91 9011752350",
  avatar: "https://avatars.githubusercontent.com/u/107460290?v=4",
  resume: `${process.env.PUBLIC_URL}/Vinaykumar_Hatwar_Resume.pdf`,
  github: "https://github.com/vinaykumar7580",
  githubUser: "vinaykumar7580",
  linkedin: "https://www.linkedin.com/in/vinaykumar-hatwar-a508831a1/",
  summary:
    "Full Stack Web Developer with nearly 3 years of experience building healthcare and enterprise web applications using React.js, Next.js, Node.js, Express.js and MySQL. I design REST APIs, integrate third-party services like Zoho Books and Firebase, automate backend workflows, and build AI-powered features with Python, LangChain and RAG.",
};

export const stats = [
  { value: 3, suffix: "", label: "Years building for the web", prefix: "~" },
  { value: 5, suffix: "+", label: "Healthcare modules shipped" },
  { value: 25, suffix: "+", label: "Public repositories" },
  { value: 1, suffix: "", label: "Full-stack AI platform" },
];

export const experience = [
  {
    company: "One Health Assist",
    role: "Full Stack Web Developer",
    period: "Jul 2024 — Present",
    location: "Mumbai, Maharashtra",
    current: true,
    stack: ["Next.js", "Redux", "Node.js", "Express", "MySQL", "Firebase", "Zoho Books"],
    points: [
      "Integrated Zoho Books with Node.js, Express.js and MySQL to sync invoices, purchase orders, journal entries, inventory and expenses — and automated bank transaction settlement with cron jobs.",
      "Designed and built a Pill Reminder service with medication scheduling, grouped medications and Firebase push notifications, including the database schema and REST APIs.",
      "Implemented the Corporate GPC module for wellness packages (sessions, lab tests, doctor consultations) with bulk employee onboarding via Excel, wellness challenges and an organisation Happiness Index.",
      "Developed the User Dashboard in Next.js + Redux: health score, Healthlocker (vitals, diagnostics, lifestyle, nutrition), calorie & step trackers, appointment booking and expert Q&A.",
      "Built the Wellness Expert Admin portal to create one-on-one and classroom sessions, manage calendar slots, Health Circles and diet plans, and track expert earnings.",
    ],
  },
  {
    company: "Dream Viewer Infotech",
    role: "Full Stack Web Developer",
    period: "Feb 2024 — Jun 2024",
    location: "Bounsi, Bihar",
    stack: ["React.js", "Redux", "REST APIs"],
    points: [
      "Developed frontend features in React.js with Redux for a billing platform used by subscription-based businesses.",
      "Integrated frontend screens with backend REST APIs and collaborated with the team to deliver features end to end.",
    ],
  },
];

export const projects = [
  {
    title: "AgriMind AI",
    subtitle: "Smart Crop Intelligence Platform",
    featured: true,
    description:
      "Diagnoses crop diseases and analyses soil (NPK, pH) from uploaded photos through a three-step pipeline: vision-model analysis, RAG retrieval and structured LLM synthesis. Includes a context-aware RAG chat assistant over a custom agricultural knowledge base, weather advisory, mandi price forecasts and a farmer community feed.",
    highlights: ["Vision → RAG → LLM pipeline", "FAISS vector search", "Multi-LLM provider support", "JWT-secured FastAPI"],
    stack: ["Python", "FastAPI", "Next.js", "LangChain", "RAG", "FAISS"],
    live: "https://agrimind-ai-frontend.vercel.app",
    code: "https://github.com/vinaykumar7580/agrimind-ai-frontend",
    codeBackend: "https://github.com/vinaykumar7580/agrimind-ai-backend",
    gradient: ["#16a34a", "#22d3ee"],
    emoji: "🌾",
  },





];

export const skillGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "FastAPI"] },
  { title: "AI / LLM", items: ["LangChain", "LangGraph", "RAG", "FAISS"] },
  { title: "Data", items: ["MySQL", "MongoDB", "Redis"] },
  { title: "Tools", items: ["Git", "Docker", "Kafka", "Postman", "Jira", "Firebase", "Zoho Books API", "AWS"] },
];

export const certifications = [
  { title: "Full Stack Web Developer", issuer: "Masai School" },
  { title: "Prompt Engineering", issuer: "Masai School" },
];

export const education = {
  school: "S. N. Mor College, Tumsar",
  degree: "Bachelor of Science (PCM)",
  period: "2016 — 2019",
};

// EmailJS keys are public by design (they only allow sending via your template).
export const emailjs = {
  service: "service_ssztkgm",
  template: "template_8bnsttd",
  publicKey: "lpGIUSyYbXJhYzab6",
};
