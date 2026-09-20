export interface ProjectItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  description: string;
  category: 'automation' | 'data-science' | 'ai-nlp' | 'web-dev';
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  status: string;
  details: string;
}

export const PERSONAL_INFO = {
  name: "Muhammad Radifan Asyauri",
  nickName: "Radifan (Asya)",
  handle: "radifan.dev",
  title: "Data Science Student & Automation Engineer",
  tagline: "7th-semester Data Science undergraduate focusing on Data Analytics, Web Automation/Scraping, and Interactive Web Platforms.",
  location: "Surabaya, East Java, Indonesia",
  status: "OPEN FOR INTERNSHIPS & OPPORTUNITIES",
  availability: "Freelance / Internship / Entry-Level Roles",
  github: "https://github.com/LuckyBoy721",
  linkedin: "https://www.linkedin.com/in/muhammad-radifan-asyauri-394807190",
  email: "dhifan123@gmail.com",
  phone: "+62 857-2555-5368",
  website: "radifanasyauri.my.id",
  bio: "Active 7th-semester Data Science undergraduate with hands-on professional experience as an Automation Engineer at food-tech startup SuperFood (automating data extraction and merchant management across GrabFood and food delivery platforms), as well as a Data Science Intern at the Communication and Informatics Department of Surabaya (Diskominfo), contributing to the official city portal, PPID public complaint system, and interactive demographic map."
};

export const EDUCATION_INFO: EducationItem = {
  degree: "Bachelor of Data Science (S.Si)",
  institution: "State University of Surabaya",
  period: "August 2023 - 2027 (Expected)",
  gpa: "3.50 / 4.00",
  status: "Active 7th Semester",
  details: "Core coursework in Machine Learning, Natural Language Processing, Exploratory Data Analysis, Data Mining, and Information Systems."
};

export const SKILL_GROUPS = [
  {
    title: "Data Science & Machine Learning",
    category: "data-science",
    accentColor: "bg-neo-yellow",
    description: "Data analysis, predictive modeling, statistical metrics, and NLP.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "NLP & Semantic Similarity", "Exploratory Data Analysis (EDA)", "Jupyter"]
  },
  {
    title: "Automation & Web Scraping",
    category: "automation",
    accentColor: "bg-neo-cyan",
    description: "Automated data harvesting, browser automation, and session lifecycle.",
    skills: ["Playwright", "Requests", "Session & Cookie Handling", "API Reverse Engineering", "Openpyxl & Excel Automation", "ETL Pipelines"]
  },
  {
    title: "Web Development & Visualization",
    category: "web-dev",
    accentColor: "bg-neo-green",
    description: "User interfaces, geospatial interactive mapping, and dashboards.",
    skills: ["HTML5 / CSS3", "JavaScript & TypeScript", "React", "Tailwind CSS", "Interactive Maps (GeoJSON / Leaflet)", "Streamlit"]
  },
  {
    title: "Tools, Databases & Collaboration",
    category: "tools",
    accentColor: "bg-neo-orange",
    description: "Data persistence, version control, and development environments.",
    skills: ["Git & GitHub", "PostgreSQL", "MySQL", "Linux / Bash", "REST APIs", "Docker Basics"]
  }
];

export const REAL_PROJECTS: ProjectItem[] = [
  {
    id: "superfood-scraper",
    title: "SuperFood Multi-City Merchant & Review Scraper",
    organization: "PT Mega SuperFood Nusantara",
    role: "Automation Engineer",
    period: "May 2026 - Present",
    category: "automation",
    summary: "Automated extraction pipeline for merchant catalogs, customer reviews, and operational statuses across multiple cities for hundreds of outlets on GrabFood and food delivery portals.",
    description: "Designed and engineered an automated pipeline using Python and Playwright to harvest data from hundreds of F&B merchants across multiple cities (Surabaya, Jakarta, Malang, Medan, and more). Built with automated cookie refresh mechanisms upon session expiration, rate-limit resilience, and structured export to Excel for operational intelligence and internal team analytics.",
    highlights: [
      "Automated extraction of thousands of merchant reviews and ratings using dynamic pagination.",
      "Engineered an automated cookie refresher that detects 401 Unauthorized errors and refreshes authentication tokens without manual intervention.",
      "Exported unified merchant catalogs grouped by city into structured analytical spreadsheets for operations."
    ],
    techStack: ["Python", "Playwright", "Requests", "Pandas", "Openpyxl", "JSON API"],
    githubUrl: "https://github.com/SuperfoodTech/grabscraper"
  },
  {
    id: "diskominfo-surabaya",
    title: "Surabaya City Portal, PPID & Interactive Demographic Map",
    organization: "Department of Communication and Informatics, Surabaya",
    role: "Data Science Intern",
    period: "Sep 2025 - Feb 2026",
    category: "data-science",
    summary: "Development of Surabaya's official Media Center portal, public complaint logging for the PPID portal, and interactive geospatial demographic statistics visualization.",
    description: "As part of the Data Science team at Diskominfo Surabaya, contributed to designing and implementing city statistical visualizations, building an interactive demographic map module to visualize population indicators geospatially, and enhancing user portals and public complaint tracking for PPID Surabaya.",
    highlights: [
      "Developed an interactive demographic map powered by geospatial data for intuitive population statistical exploration.",
      "Contributed to building the official Media Center portal for the City of Surabaya with responsive, accessible layouts.",
      "Helped integrate public grievance reporting and tracking workflows on the Surabaya PPID website."
    ],
    techStack: ["JavaScript", "Python", "Data Visualization", "GIS / Map Data", "HTML/CSS", "Bootstrap / Tailwind"],
    demoUrl: "https://surabaya.go.id"
  },
  {
    id: "cvmatch-ai",
    title: "CVMatch AI - Semantic Resume Analyzer & Job Recommender",
    organization: "Independent Project & Portfolio",
    role: "Lead Developer",
    period: "2026",
    category: "ai-nlp",
    summary: "An NLP and Machine Learning application that parses PDF resumes and recommends relevant jobs using semantic similarity scoring.",
    description: "Built an intelligent tool that parses text from resume PDFs, performs text preprocessing and skill entity extraction, and evaluates semantic similarity against job description databases using vector similarity models.",
    highlights: [
      "Automated text extraction from diverse multi-layout PDF resumes.",
      "Candidate job matching based on semantic vector similarity rather than rigid keyword filtering.",
      "Interactive user interface to upload resumes, inspect matching scores, and identify skill gaps."
    ],
    techStack: ["Python", "NLP", "Scikit-Learn", "Sentence Transformers", "Streamlit / FastAPI", "PyPDF"],
    githubUrl: "https://github.com/LuckyBoy721/CV-Analyser"
  },
  {
    id: "chatbot-rag",
    title: "RAG Document Intelligence & Semantic Assistant",
    organization: "Data Science Exploration Project",
    role: "Developer",
    period: "2025 - 2026",
    category: "ai-nlp",
    summary: "Interactive document question-answering assistant using Retrieval-Augmented Generation (RAG) for high-accuracy contextual retrieval.",
    description: "Engineered an intelligent assistant that splits documents into embedding chunks, indexes them in a vector store, and provides context-grounded answers to minimize hallucination.",
    highlights: [
      "Implemented intelligent text chunking and vector indexing for fast semantic document retrieval.",
      "Context-injected prompting to produce verified, source-grounded answers directly from original documents."
    ],
    techStack: ["Python", "LangChain", "Vector Store", "FastAPI", "OpenAI / Open-Source LLMs"]
  }
];

export const REAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-superfood",
    period: "May 2026 - Present",
    role: "Automation Engineer",
    company: "PT Mega SuperFood Nusantara (SuperFood)",
    location: "Surabaya, East Java",
    type: "Contract / Practical Work",
    description: "SuperFood is a food-tech startup optimizing sales and streamlining operations for hundreds of F&B merchants across food delivery platforms (GoFood, GrabFood, ShopeeFood).",
    achievements: [
      "Merchant Operations Automation: Designed automated systems using Playwright and Python for monitoring and operational tasks across hundreds of delivery outlets.",
      "Menu & Price Synchronization: Developed verification workflows to synchronize catalog data, pricing, and outlet operational statuses centrally.",
      "Data Pipeline Integration: Built scheduled review and rating scraping pipelines for customer satisfaction analytics and internal team reporting."
    ],
    stack: ["Python", "Playwright", "Requests", "Pandas", "Excel Automation", "Git"]
  },
  {
    id: "exp-diskominfo",
    period: "Sep 2025 - Feb 2026",
    role: "Data Science Intern",
    company: "Department of Communication and Informatics, City of Surabaya",
    location: "Surabaya, East Java",
    type: "Internship",
    description: "Completed an internship at Diskominfo Surabaya focusing on regional statistical data analytics, civic data visualization, and public government portals.",
    achievements: [
      "Built and enhanced features on the official City of Surabaya Landing Page / Media Center.",
      "Developed the Interactive Demographic Map feature and population statistical dashboard for Surabaya.",
      "Engineered workflows for the public complaint system on the Surabaya Information and Documentation Management Officer (PPID) portal."
    ],
    stack: ["Data Science", "Python", "Web GIS", "JavaScript", "HTML/CSS", "Data Analytics"]
  }
];
