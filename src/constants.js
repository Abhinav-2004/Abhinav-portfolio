// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import shadcn from "./assets/tech_logo/shadcn.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import inctureLogo from "./assets/company_logo/incture.png";
import affworldLogo from "./assets/company_logo/affworld.jpeg";
import preplabsLogo from "./assets/company_logo/preplabs.png";

// Education Section Logo's
import siliconTechLogo from "./assets/education_logo/silicontech.png";
import bdmiLogo from "./assets/education_logo/bdmi.png";

// Project Section Logo's
import grabwayLogo from "./assets/work_logo/grabway.png";
import bookingappLogo from "./assets/work_logo/bookingapp.png";
import employeeLogo from "./assets/work_logo/employeeM.png";
import chatpdfgptLogo from "./assets/work_logo/chatpdfgpt.png";
import homeifyLogo from "./assets/work_logo/homeify.png";
import resocLogo from "./assets/work_logo/resoc.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Shadncn UI", logo: shadcn },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "React Native", logo: reactjsLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: inctureLogo,
    role: "Associate Software Engineer Trainee",
    company: "Incture Technologies",
    date: "January 2025 - Present",
    desc: "Developed robust and secure backend APIs using Spring Boot, implementing controller-service architecture and integrating Spring Security for authentication and authorization. Gained hands-on experience in building scalable RESTful services, managing data flow, and structuring complete backend systems in an agile development environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java 8",
      "Java Spring Boot",
      "Spring Security",
      "Spring JPA",
      "MySQL",
      "REST API",
    ],
  },
  {
    id: 1,
    img: affworldLogo,
    role: "Front-End Developer",
    company: "Affworld Technologies",
    date: "August 2023 - September 2024",
    desc: "Developed business solution pages for small-scale enterprises using React.js, HTML, CSS, and Bootstrap, with a FastAPI backend in Python. Built and deployed internal company projects leveraging React and Tailwind CSS to power an employee dashboard and task assistance system, enhancing operational efficiency and user experience.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    id: 2,
    img: preplabsLogo,
    role: "Summer Intern",
    company: "Prep Labs",
    date: "June 2021 - July 2022",
    desc: "Built a Pepperfry website clone using React.js, with user authentication handled by an Express.js server integrated with MongoDB. Enhanced UI/UX using modern libraries such as Next UI, Material UI, and Chakra UI. Additionally, developed a responsive Blood Donation website using HTML, CSS, and JavaScript to promote awareness and donor engagement.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React Js",
      "Figma",
      "Material UI",
      "Next UI",
      "Express Js",
      "MongoDB",
      "Chakra UI",
      "Node Js",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: siliconTechLogo,
    school: "Silicon University, Bhubaneswar",
    date: "December 2021 - May 2025",
    grade: "8.56 CGPA",
    desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering from Silicon Institute of Technology, Bhubaneswar, with a current CGPA of 8.56. Throughout my academic journey, I have built a solid foundation in core computer science subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I have also actively participated in technical workshops, coding competitions, and project-based learning, which have significantly contributed to my practical knowledge and skill development. My time at Silicon Institute of Technology has played a crucial role in shaping my technical competencies and preparing me for real-world challenges in the field of software development.",
    degree: "Bachelor's of Technology - BTECH (CSE)",
  },

  {
    id: 1,
    img: bdmiLogo,
    school: "BDM International School, Kolkata",
    date: "Apr 2019 - March 2021",
    grade: "92%",
    desc: "I completed my class 12 education from BDM International School, Kolkata, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: bdmiLogo,
    school: "BDM International School, Kolkata",
    date: "Apr 2017 - March 2019",
    grade: "94%",
    desc: "I completed my class 10 education from BDM International School, Kolkata, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Science Pyhton",
  },
];

export const projects = [
  {
    id: 0,
    title: "Grabway",
    description:
      "Grabway is a smart React.js app that lets drivers post routes and users book matching rides in real-time. Built with React, TailwindCSS, and ChakraUI, it offers a smooth, modern UI. Powered by Google Maps APIs for accurate route matching and Firebase Auth for secure logins. Express.js handles API requests, while MongoDB stores all user and route data. A fast, intuitive solution for hassle-free ride-sharing.",
    image: grabwayLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "MERN",
      "Express Js",
      "MongoDB",
    ],
    github: "https://github.com/Abhinav-2004/GrabWay",
    webapp: "https://grabway.vercel.app/",
  },
  {
    id: 1,
    title: "ChatPDF-GPT",
    description:
      "PDF Chat AI lets users upload any PDF and chat with AI to get answers from it instantly.After Clerk authentication, PDFs are uploaded to AWS S3. Text is converted to embeddings via Gemini API and stored in Pinecone for fast vector search.User queries are processed using cosine similarity, and responses are generated with the GPT API. All message data is managed in NeonDB (PostgreSQL) for persistence.A smart, AI-powered way to interact with your documents.",
    image: chatpdfgptLogo,
    tags: [
      "Next JS",
      "PostgreSQL",
      "PineConeDB",
      "JavaScript",
      "OpenAI API",
      "Google Gemini",
    ],
    github: "https://github.com/Abhinav-2004/chat-pdf-gpt",
    webapp: "https://chatpdfgpt.vercel.app/",
  },
  {
    id: 2,
    title: "Homeify - Furniture ECommerce Clone",
    description:
      " Pepperfry Clone is a sleek React.js e-commerce app replicating core features of the original platform.User authentication is handled via an Express.js server with MongoDB, ensuring secure access. The UI is enhanced using modern libraries like Next UI, Material UI, and Chakra UI, delivering a polished and intuitive shopping experience.A full-stack clone built for performance and aesthetics.",
    image: homeifyLogo,
    tags: ["React JS", "Express Js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abhinav-2004/Homeify",
    webapp: "https://homeify-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "CRUD Employee Management - ONLY API",
    description:
      "Employee Management System is a Spring Boot-based application that allows admins to manage employees, users, and roles with secure role-based access. It supports adding, updating, deleting, and viewing records, with security enforced via Spring Security. Designed for enterprise-level employee administration with RESTful APIs and integration-ready backend support. It is a robust solution for managing employee data efficiently.",
    image: employeeLogo,
    tags: ["Spring Boot", "Spring JPA", "Spring Security", "Java"],
    github:
      "https://github.com/Abhinav-2004/Employee-Management-JavaSpringBoot",
    webapp:
      "https://github.com/Abhinav-2004/Employee-Management-JavaSpringBoot",
  },
  {
    id: 4,
    title: "Booking.com Clone React Native",
    description:
      "A React Native-based clone of Booking.com featuring user login, room listing, and filtering functionalities. This mobile app allows users to browse and filter various rooms based on preferences. Built with intuitive UI and seamless navigation, it serves as a foundational project for hotel booking apps with authentication and filter features.",
    image: bookingappLogo,
    tags: ["Expo", "JavaScript", "React Native", "HTML", "CSS"],
    github: "https://github.com/Abhinav-2004/Booking.com-Clone-React-Native",
    webapp: "https://github.com/Abhinav-2004/Booking.com-Clone-React-Native",
  },
  {
    id: 5,
    title: "Resoc - Academic Notes Sharing Platform",
    description:
      "RESOC is the coolest academic notes-sharing platform around, built by a bunch of tech-savvy students at Silicon Institute, and it's totally free ❤️. You don't have to sell your soul to afford good quality notes anymore.",
    image: resocLogo,
    tags: ["HTML", "CSS", "JavaScript", "React Js", "Firebase"],
    github: "https://github.com/Abhinav-2004/resoc",
    webapp: "https://resoc.in/",
  },
];
