import { Experience, SkillCategory, ContentItem, ContactInfo } from './types';

// NOTE: Using absolute path from root. Ensure 'afshin.jpg' is in the project root folder.
export const PROFILE_IMAGE_URL = "/afshin.jpg"; 

export const PERSONAL_INFO = {
  name: "Afshin Afsharpour",
  role: "QAOps & DevOps Engineer",
  summary: "Results-driven QA and DevOps Engineer with strong expertise in QAOps practices. I seamlessly integrate quality assurance into CI/CD pipelines to ensure rapid and reliable software delivery. Leveraging AI-powered solutions, I have introduced self-healing test mechanisms and developed intelligent test generators, significantly reducing maintenance overhead and increasing testing efficiency.",
  education: {
    degree: "Bachelor of Civil Engineering",
    university: "Amirkabir University of Technology",
    location: "Tehran, Iran",
    period: "2020 - Present",
    gpa: "16.95"
  }
};

export const CONTACT_INFO: ContactInfo = {
  email: "afshinafsharpour@gmail.com",
  phone: "(+98)9100583480",
  address: "Tehran, Iran",
  linkedin: "https://www.linkedin.com/in/afshin-afsharpour-314725354",
  telegram: "https://t.me/AfshinAP1381"
};

export const EXPERIENCE: Experience[] = [
  {
    role: "QAOps Lead",
    company: "Taxpayers System Project",
    location: "Tehran, Iran",
    period: "May 2025 - Present",
    achievements: [
      "Established an automated testing infrastructure.",
      "Implemented end-to-end (E2E) and API testing.",
      "Introduced shift-left testing practices.",
      "Developed a test generator and self-healing mechanism using an AI agent.",
      "Integrated automated testing processes into the CI/CD pipeline."
    ]
  },
  {
    role: "DevOps Engineer",
    company: "National Tax Data Warehouse Project",
    location: "Tehran, Iran",
    period: "July 2024 - May 2025",
    achievements: [
      "Created CI/CD pipelines using Git for efficient deployment processes.",
      "Wrote Dockerfiles and Docker Compose configurations for microservices.",
      "Managed Docker services to ensure smooth container operations.",
      "Implemented microservices architecture and API Management (APIM).",
      "Conducted testing and monitoring of microservices using ELK, Prometheus, and Alert Manager.",
      "Engaged in R&D for services and implemented new solutions."
    ]
  },
  {
    role: "System Engineer",
    company: "National Tax Data Warehouse Project",
    location: "Tehran, Iran",
    period: "February 2024 - July 2024",
    achievements: [
      "Maintained services and monitored their performance.",
      "Identified and resolved product bugs to improve reliability."
    ]
  },
  {
    role: "QA Engineer",
    company: "Mohaymen",
    location: "Tehran, Iran",
    period: "July 2023 - February 2024",
    achievements: [
      "Developed automated tests using Cypress and later Selenium.",
      "Conducted API testing and wrote comprehensive test cases and scenarios.",
      "Performed manual testing to ensure software quality."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "QA Automation & AI",
    skills: ["Playwright", "Cypress", "Selenium", "K6", "JMeter", "API Testing", "Postman", "Self-healing Tests", "AI Test Agents"]
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "GitLab CI", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Linux (LPIC1)"]
  },
  {
    title: "Development",
    skills: ["Python", "TypeScript", "JavaScript", "Bash Scripting", "Git"]
  },
  {
    title: "Methodologies",
    skills: ["QAOps", "Shift-Left Testing", "Microservices", "Agile/Scrum", "Problem Solving"]
  }
];

export const FEATURED_CONTENT: ContentItem[] = [
  {
    type: "Article",
    platform: "Medium",
    title: "Self-healing Playwright Tests in CI/CD",
    description: "A deep dive into implementing AI-driven self-healing mechanisms for automated tests to reduce flakiness in pipelines.",
    link: "https://medium.com/@afshinafsharpour/self-healing-playwright-tests-in-ci-cd-69f6d1e5ef4b?postPublishedType=repub"
  },
  {
    type: "Post",
    platform: "LinkedIn",
    title: "AI Test Generator Demo",
    description: "Demonstrating a custom AI agent that automatically generates and maintains test scenarios.",
    link: "https://www.linkedin.com/posts/afshin-afsharpour-314725354_%DA%86%D9%86%D8%AF-%D9%88%D9%82%D8%AA-%D9%BE%DB%8C%D8%B4-%DB%8C%D9%87-%D9%BE%D8%B3%D8%AA-%DA%AF%D8%B0%D8%A7%D8%B4%D8%AA%D9%85-%D9%88-%DB%8C%D9%87-%D8%AF%D9%85%D9%88%DB%8C-%DA%A9%D9%88%D8%AA%D8%A7%D9%87%DB%8C-activity-7372705076252971008-FBPy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhiWYABXo2wI5nxD2MrOgc7Cj3B4MFzKuQ"
  }
];