export type SocialPlatform =
  | "GitHub"
  | "LinkedIn"
  | "Medium"
  | "Instagram"
  | "Facebook"
  | "Email";

export type ProjectCategory =
  | "AI/ML"
  | "NLP"
  | "Computer Vision"
  | "Web"
  | "Research"
  | "Other";

export type EmploymentType =
  | "Full-time"
  | "Contract"
  | "Freelance"
  | "Internship";

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  bio: string;
  longBio: string;
  email: string;
  location: string;
  profileImage: string;
  resume: string;
  availableForWork: boolean;
  roles: string[];
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  handle: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  type: EmploymentType;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  image: string;
  featured: boolean;
  year: number;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  label: string;
  description: string;
  items: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  grade: string;
  description: string;
  coursework: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
  platform: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Prabesh Sharma",
  firstName: "Prabesh",
  lastName: "Sharma",
  title: "AI Engineer & ML Researcher",
  tagline:
    "Designing intelligent systems that think, learn, and ship to production.",
  bio: "Computer Engineer specializing in AI & ML solutions — building agentic systems, LLM workflows, and computer-vision pipelines that scale from research to real users.",
  longBio:
    "I'm a Computer Engineer focused on shipping AI that earns its keep in production. I architect multi-agent systems for planning, research, and retrieval, build LLM workflows that cut cost without sacrificing quality, and craft computer-vision models that catch what humans miss. Currently designing agents at Inspiring Lab, previously engineered an end-to-end SDLC automation platform at Skillrank.",
  email: "sharmaprabesh2027@gmail.com",
  location: "Nepal",
  profileImage: "/prabesh-duotone-amber.png",
  resume:
    "https://drive.google.com/file/d/1gUj-H_fM0uiVcC9vkhBVi7KOwyQ64r4K/view?usp=sharing",
  availableForWork: true,
  roles: [
    "AI Engineer",
    "ML Researcher",
    "LLM Architect",
    "Agent Systems Builder",
    "Problem Solver",
  ],
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Prabesh1sharma",
    handle: "Prabesh1sharma",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/prabesh-sharma06/",
    handle: "prabesh-sharma06",
  },
  {
    platform: "Medium",
    url: "https://medium.com/@sharmaprabesh027",
    handle: "@sharmaprabesh027",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/prabesh___sharma/",
    handle: "prabesh___sharma",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/prabesh.sharma27/",
    handle: "prabesh.sharma27",
  },
  {
    platform: "Email",
    url: "mailto:sharmaprabesh2027@gmail.com",
    handle: "sharmaprabesh2027@gmail.com",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Inspiring Lab",
    role: "AI Engineer",
    type: "Full-time",
    startDate: "Aug 2025",
    endDate: "Present",
    location: "Remote",
    description:
      "Designing multi-agent systems and scalable backend infrastructure for document intelligence and content generation.",
    achievements: [
      "Built multiple agents for planning, research, database querying, and presentation generation.",
      "Architected scalable backend APIs for document ingestion, RabbitMQ-based queueing, deletion, and slide content management.",
      "Created multimodal agents capable of searching and retrieving specific content across diverse document types.",
      "Optimized agent performance to reduce processing time without compromising accuracy.",
      "Mentoring AI interns building reinforcement-learning-based agents that learn from human feedback.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "RabbitMQ",
      "FastAPI",
      "PostgreSQL",
      "Vector DBs",
      "LLMs",
    ],
  },
  {
    id: 2,
    company: "Skillrank",
    role: "Software Engineer — AI",
    type: "Full-time",
    startDate: "Feb 2025",
    endDate: "July 2025",
    location: "Remote",
    description:
      "Contributed to an AI-powered SDLC automation platform that generates production codebases from a single prompt.",
    achievements: [
      "Engineered a system that produces a full end-to-end codebase with automated GitHub integration, Supabase setup, and one-click deployment from a single instruction.",
      "Built LLM workflows that generate architecture, design, and context in one streaming call — cutting cost by 25%.",
      "Developed agents for Figma-to-code conversion, streamlining the design-to-development pipeline.",
      "Automated backend deployment to a one-click flow.",
    ],
    technologies: [
      "Python",
      "LLMs",
      "LangChain",
      "Streaming APIs",
      "Supabase",
      "GitHub APIs",
      "Figma API",
      "Docker",
    ],
  },
  {
    id: 3,
    company: "Scala Technologies",
    role: "AI/ML Engineer Intern",
    type: "Internship",
    startDate: "Oct 2024",
    endDate: "Feb 2025",
    location: "On-site",
    description:
      "Built production ML models spanning medical imaging, route optimization, conversational AI, and demand forecasting.",
    achievements: [
      "Developed 2D and 3D models for brain tumor segmentation.",
      "Designed and implemented route optimization solutions.",
      "Built AI-powered chatbots for several customer use cases.",
      "Worked with domain-specific large language models.",
      "Created customizable bots for automation and user interaction.",
      "Contributed to demand-forecasting models for better business decisions.",
      "Designed and implemented a hate-speech detection model.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Django",
      "CNN",
      "Transformers",
      "U-Net",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Unusual Activity Detection",
    description:
      "Real-time anomaly detection across 13 categories — fighting, accidents, robbery, vandalism, explosions — built on fine-tuned Vision Transformers.",
    longDescription:
      "Designed a real-time anomaly detection system using fine-tuned Vision Transformers. Integrated WebRTC for live streaming, WebSockets for real-time communication, and the Telegram API to push alerts to operators the moment incidents are detected.",
    tags: [
      "Python",
      "Django",
      "Vision Transformers",
      "WebRTC",
      "WebSockets",
      "Flutter",
      "Telegram API",
    ],
    category: "Computer Vision",
    githubUrl:
      "https://github.com/Prabesh1sharma/Surveillance-System-with-Unusual-Activity-Detection-and-Alert-System",
    articleUrl: "https://www.nepjol.info/index.php/joeis/article/view/81597",
    image: "/Alert.png",
    featured: true,
    year: 2025,
    highlights: [
      "13 anomaly classes detected in real time",
      "WebRTC + WebSocket low-latency pipeline",
      "Published research article",
    ],
  },
  {
    id: 2,
    title: "Image Captioning",
    description:
      "Transformer-based image captioning combining BERT, GPT, and T5 with VGG16 + LSTM for coherent, accurate captions.",
    longDescription:
      "Developed an image captioning system using Python, Django, and deep learning. Integrated Transformer architectures (BERT, GPT, T5) alongside VGG16 and LSTM. Enhanced feature extraction, caption generation, and NLP refinement for seamless interaction and high-quality output.",
    tags: ["Python", "Transformer", "VGG16 CNN", "NLP", "LSTM", "Django"],
    category: "AI/ML",
    githubUrl: "https://github.com/Prabesh1sharma/ImageCaptioning",
    image: "/Imagecaptions.webp",
    featured: true,
    year: 2024,
    highlights: [
      "Multi-architecture transformer stack",
      "End-to-end Django integration",
      "Coherent caption generation",
    ],
  },
  {
    id: 3,
    title: "PDF Question-Answering System",
    description:
      "RAG-based Q&A over uploaded PDFs using Weaviate vector search and LangChain orchestration.",
    longDescription:
      "Streamlit app that lets users upload PDFs and ask anything about them. Built on Weaviate for vectorized retrieval and LangChain for orchestration, surfacing precise, grounded answers.",
    tags: ["Python", "Streamlit", "Weaviate", "RAG", "LangChain"],
    category: "NLP",
    githubUrl: "https://github.com/Prabesh1sharma/PDF-Question-Answering",
    image: "/pdf.jpg",
    featured: true,
    year: 2024,
    highlights: [
      "Weaviate vector search",
      "LangChain RAG pipeline",
      "Document-grounded answers",
    ],
  },
  {
    id: 4,
    title: "Online Course Recommendation System",
    description:
      "NLP-powered course recommendations using TF-IDF and cosine similarity on a curated dataset.",
    longDescription:
      "Online course recommendation system built with Python, Django, and NLP techniques like TF-IDF and cosine similarity. Curated data delivers accurate, tailored recommendations — built with my minor project team.",
    tags: ["Python", "NLP", "Django", "TF-IDF"],
    category: "NLP",
    githubUrl:
      "https://github.com/Prabesh1sharma/OnlineCourseRecommendationSystem",
    image: "/onlinecourse.jpg",
    featured: false,
    year: 2024,
    highlights: ["TF-IDF + cosine similarity", "Curated dataset", "Django UI"],
  },
  {
    id: 5,
    title: "Cold Email Generator (LLM)",
    description:
      "Automated cold email generator using LangChain, Llama 3.1, and ChromaDB for precise job-matched outreach.",
    longDescription:
      "Tailored cold email generation for job posts. Llama 3.1 drives the generation, ChromaDB powers similarity search across user portfolios, and LangChain stitches it all together.",
    tags: ["Python", "Llama 3.1", "ChromaDB", "LangChain"],
    category: "AI/ML",
    githubUrl:
      "https://github.com/Prabesh1sharma/Email-Generator-for-job-application-using-Llama",
    image: "/EmailGenerator.png",
    featured: false,
    year: 2024,
    highlights: [
      "Llama 3.1 generation",
      "ChromaDB vector matching",
      "Job-specific personalization",
    ],
  },
  {
    id: 6,
    title: "Cotton Plant Disease Classification",
    description:
      "CNN-based disease detection for cotton plants — image-driven early diagnosis and crop management.",
    longDescription:
      "Cotton plant disease classification system using CNN and Django. Enables precise image analysis for early detection and improved crop management decisions.",
    tags: ["Python", "CNN", "Django", "Computer Vision"],
    category: "Computer Vision",
    githubUrl:
      "https://github.com/Prabesh1sharma/Cotton-Plant-disease-classificationn",
    image: "/cottonPlant.png",
    featured: false,
    year: 2023,
    highlights: ["CNN classifier", "Django delivery", "Early disease detection"],
  },
  {
    id: 7,
    title: "StudyBuddy",
    description:
      "Community study platform where users create rooms, chat, and share knowledge across topics.",
    longDescription:
      "Studybuddy is a full-stack website (HTML, CSS, JavaScript, Django) that lets users create or join rooms, connect with peers, chat in real time, and share knowledge across their fields of interest.",
    tags: ["Python", "Django", "JavaScript", "HTML/CSS"],
    category: "Web",
    githubUrl: "https://github.com/Prabesh1sharma/Studybuddy",
    image: "/Study.png",
    featured: false,
    year: 2023,
    highlights: [
      "Real-time chat rooms",
      "Topic-based communities",
      "Full Django stack",
    ],
  },
];

export const skills: Record<string, SkillCategory> = {
  aiml: {
    label: "AI & Machine Learning",
    description: "Where I spend most of my time.",
    items: [
      { name: "LLMs & Agentic Systems", level: 92 },
      { name: "RAG & Vector Search", level: 90 },
      { name: "Transformers", level: 88 },
      { name: "Computer Vision", level: 85 },
      { name: "LSTM & Sequence Models", level: 82 },
      { name: "Reinforcement Learning", level: 70 },
    ],
  },
  languages: {
    label: "Programming Languages",
    description: "Daily drivers.",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "JavaScript / TypeScript", level: 75 },
    ],
  },
  frameworks: {
    label: "Frameworks & Libraries",
    description: "Tools I reach for first.",
    items: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 82 },
      { name: "LangChain / LangGraph", level: 90 },
      { name: "Scikit-learn", level: 88 },
      { name: "Django / DRF", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "Pandas / NumPy", level: 92 },
      { name: "Matplotlib / Seaborn", level: 80 },
    ],
  },
  tools: {
    label: "Tools & Platforms",
    description: "Shipping and infrastructure.",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "RabbitMQ", level: 78 },
      { name: "Weaviate / ChromaDB", level: 85 },
      { name: "Supabase", level: 78 },
      { name: "Streamlit", level: 85 },
    ],
  },
};

export const currentlyLearning = [
  "Distributed agent orchestration",
  "MLOps for LLM pipelines",
  "Multimodal retrieval architectures",
  "Reinforcement learning from human feedback",
];

export const education: EducationItem[] = [
  {
    institution: "Tribhuvan University, Institute of Engineering (TU, IOE)",
    degree: "Bachelor's Degree",
    field: "Computer Engineering",
    startYear: 2021,
    endYear: 2025,
    grade: "",
    description:
      "Focused on software development, artificial intelligence, and machine learning.",
    coursework: [
      "Data Mining",
      "Artificial Intelligence",
      "Microprocessor",
      "Object Oriented Programming",
      "Theory of Computation",
    ],
  },
];

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Image Captioning Using Transformer",
    excerpt:
      "After numerous attempts with RNNs, GRUs, and LSTMs to generate captions for images, here's how transformers changed the game.",
    date: "May 30, 2024",
    readTime: "12 min read",
    tags: ["Transformers", "Computer Vision", "NLP"],
    url: "https://medium.com/@sharmaprabesh027/image-captioning-using-transformer-b6004eefb935",
    platform: "Medium",
  },
  {
    id: 2,
    title: "Machine Learning Algorithms",
    excerpt:
      "Machine Learning is a subset of artificial intelligence mainly concerned with the development of algorithms that learn from data.",
    date: "Dec 9, 2023",
    readTime: "18 min read",
    tags: ["Machine Learning", "Fundamentals"],
    url: "https://medium.com/@sharmaprabesh027/machine-learning-algorithms-0883dd6a92d1",
    platform: "Medium",
  },
  {
    id: 3,
    title: "Database and SQL for Data Science with Python",
    excerpt:
      "SQL — the language used for relational databases — meets Python: querying data, joining tables, and feeding pipelines.",
    date: "Nov 2, 2023",
    readTime: "12 min read",
    tags: ["SQL", "Python", "Data Science"],
    url: "https://medium.com/@sharmaprabesh027/database-and-sql-for-data-science-with-python-e63ccfe35910",
    platform: "Medium",
  },
];

export const stats: Stat[] = [
  { label: "Projects Shipped", value: "20", suffix: "+" },
  { label: "Years of Engineering", value: "3", suffix: "+" },
  { label: "Models in Production", value: "15", suffix: "+" },
  { label: "Blog Posts Published", value: "10", suffix: "+" },
];

export const whatIBring = [
  {
    title: "Production-grade AI",
    description:
      "I treat models as products — measured, monitored, and built to outlive the demo.",
  },
  {
    title: "End-to-end ownership",
    description:
      "From data and architecture to APIs and deploys — I ship the whole stack.",
  },
  {
    title: "Agentic thinking",
    description:
      "Multi-agent design, tool use, and retrieval pipelines that actually work under load.",
  },
  {
    title: "Research × engineering",
    description:
      "Comfortable reading papers and translating them into systems users touch.",
  },
];

export const philosophy =
  "Models that ship beat models that win benchmarks. I optimize for systems that earn trust in production.";
