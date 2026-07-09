import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Nav";
import CircularGallery from "./components/CircularGallery";
//import Lanyard from "./components/Lanyard";
//import Hyperspeed from './components/Hyperspeed';
//import { hyperspeedPresets } from './components/hyperspeedPresets';
import Aurora from './components/AuroraBackground';
import Profile from './components/Profile';
import avatar from './assets/download.png';
import EncryptedText from './components/EncryptedText';
//import ChromaGrid from './components/ChromaGrid';
//import Spotlight from './components/Spotlight';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaCode, FaCheckCircle, FaArrowRight, FaCalendarAlt, FaMapPin, FaBriefcase } from 'react-icons/fa';

const ProjectCard = ({ item, index }) => (
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
  >
<div
  className="project-image"
  style={{
    backgroundImage: `url(${item.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
    <div className="project-content">
      <div className="project-top">
        <div>
          <p className="project-kicker">{item.type}</p>
          <h3 className="project-title">{item.title}</h3>
          <p className="project-subtitle">{item.subtitle}</p>
        </div>
        <a className="project-link" href={item.url} target="_blank" rel="noreferrer">
          <FaArrowRight />
        </a>
      </div>
      <p className="project-description">{item.description}</p>
      <div className="project-tech">
        {item.tech.map((tag) => (
          <span key={tag} className="project-badge">{tag}</span>
        ))}
      </div>
    </div>
  </motion.article>
);

const ExperienceCard = ({ item, index }) => (
  <motion.article
    className="timeline-card"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
  >
    <div className="timeline-dot" aria-hidden="true" />
    <div className="timeline-content">
      <div className="card-header">
        <div>
          <p className="card-eyebrow">{item.employmentType}</p>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-company">{item.company}</p>
        </div>
        <div className="card-meta">
          <span><FaCalendarAlt /> {item.duration}</span>
          <span><FaMapPin /> {item.location}</span>
        </div>
      </div>

      <p className="card-summary">{item.summary}</p>

      <div className="technology-row">
        {item.technologies.map((tech) => (
          <span key={tech} className="technology-badge">{tech}</span>
        ))}
      </div>

      <div className="detail-block">
        <h4>Responsibilities</h4>
        <ul className="card-list">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div className="detail-block">
        <h4>Key Achievements</h4>
        <div className="achievement-row">
          {item.achievements.map((achievement) => (
            <span key={achievement} className="achievement-chip">
              <FaCheckCircle /> {achievement}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.article>
);

function App() {
  const experienceStyles = `
    .experience-section {
      padding: 4rem 1.25rem;
      background: linear-gradient(135deg, #18181b, #27272a);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .experience-section::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 34%);
      pointer-events: none;
    }

    .experience-shell {
      position: relative;
      z-index: 1;
      max-width: 980px;
      margin: 0 auto;
    }

    .experience-intro {
      text-align: center;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
    }

    .experience-kicker {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.38rem 0.8rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      color: #ffd4de;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .experience-heading {
      font-size: clamp(1.7rem, 3vw, 2.35rem);
      margin: 0;
      letter-spacing: -0.02em;
    }

    .experience-lead {
      max-width: 740px;
      margin: 0;
      color: #d4d4d8;
      line-height: 1.7;
      font-size: 0.98rem;
    }

    .timeline {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-left: 0.2rem;
    }

    .timeline::before {
      content: "";
      position: absolute;
      left: 0.95rem;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, rgba(255,107,138,0.45), rgba(255,255,255,0.08));
    }

    .timeline-card {
      position: relative;
      margin-left: 2rem;
      padding: 1.1rem 1.1rem 1.15rem;
      border-radius: 20px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 14px 34px rgba(0,0,0,0.2);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .timeline-dot {
      position: absolute;
      left: -1.47rem;
      top: 1.2rem;
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 999px;
      background: linear-gradient(135deg, #ff6b8a, #ff8fab);
      box-shadow: 0 0 0 5px rgba(255,107,138,0.16);
    }

    .timeline-card:hover {
      border-color: rgba(255,107,138,0.28);
      box-shadow: 0 18px 42px rgba(0,0,0,0.28);
    }

    .timeline-content {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: flex-start;
    }

    .card-eyebrow {
      margin: 0 0 0.25rem;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #ffd4de;
    }

    .card-title {
      margin: 0 0 0.2rem;
      color: #ff6b8a;
      font-size: 1.08rem;
    }

    .card-company {
      margin: 0;
      color: #f8fafc;
      font-weight: 700;
      font-size: 0.96rem;
    }

    .card-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.25rem;
      color: #cbd5e1;
      font-size: 0.82rem;
      text-align: right;
      min-width: 150px;
    }

    .card-meta span {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }

    .card-summary {
      margin: 0;
      color: #f5f5f5;
      line-height: 1.7;
      font-size: 0.95rem;
    }

    .technology-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .technology-badge {
      padding: 0.35rem 0.65rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.1);
      color: #e2e8f0;
      font-size: 0.78rem;
    }

    .detail-block {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .detail-block h4 {
      margin: 0;
      font-size: 0.82rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #f8fafc;
    }

    .card-list {
      padding-left: 1rem;
      margin: 0;
      color: #f3f4f6;
      line-height: 1.6;
      font-size: 0.93rem;
    }

    .card-list li {
      margin-bottom: 0.35rem;
    }

    .achievement-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .achievement-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.4rem 0.6rem;
      border-radius: 999px;
      background: rgba(255,107,138,0.12);
      color: #ffd4de;
      border: 1px solid rgba(255,107,138,0.18);
      font-size: 0.8rem;
    }

    @media (max-width: 760px) {
      .experience-section {
        padding: 3.2rem 1rem;
      }

      .timeline::before {
        left: 0.7rem;
      }

      .timeline-card {
        margin-left: 1.5rem;
        padding: 1rem 0.95rem;
      }

      .timeline-dot {
        left: -1.2rem;
        top: 1.05rem;
      }

      .card-header {
        flex-direction: column;
      }

      .card-meta {
        align-items: flex-start;
        text-align: left;
        min-width: 0;
      }
    }
  `;

  const experienceItems = [
    {
      id: "jyosna",
      title: "Web Developer & Cloud Engineer",
      company: "Jyosna Inc.",
      employmentType: "Full-time",
      duration: "2022 — Present",
      location: "Pasig, Philippines",
      summary:
        "Built and maintained business web applications while supporting cloud infrastructure, API integrations, and UX-focused feature delivery.",
      technologies: ["C#", ".NET", "ASP.NET", "MS SQL", "Azure", "REST APIs", "Figma"],
      bullets: [
        "Developed and maintained web applications with C# and ASP.NET Web Forms.",
        "Designed and optimized MS SQL databases, stored procedures, and query performance.",
        "Integrated REST APIs and third-party services into business systems.",
        "Managed Azure infrastructure, networking, storage, and deployment workflows.",
        "Improved reliability through monitoring, debugging, and feature delivery.",
      ],
      achievements: ["Cloud systems deployed", "APIs integrated", "Databases optimized", "Features shipped"],
    },
    {
      id: "holy-cross",
      title: "IT Support Intern",
      company: "Holy Cross College",
      employmentType: "Internship",
      duration: "2022",
      location: "Nueva Ecija, Philippines",
      summary:
        "Delivered hands-on technical support and helped maintain reliable systems for academic operations.",
      technologies: ["Hardware Support", "Software Support", "Databases", "Troubleshooting"],
      bullets: [
        "Provided technical support for software and hardware issues.",
        "Resolved system issues to keep daily operations running smoothly.",
        "Maintained databases with a strong focus on integrity and performance.",
        "Performed routine maintenance to improve reliability and reduce downtime.",
      ],
      achievements: ["System uptime improved", "Issues resolved quickly", "Maintenance routines strengthened", "Support quality improved"],
    },
  ];

  const projectStyles = `
    .projects-section {
      padding: 4rem 1.25rem;
      background: linear-gradient(135deg, #111111, #1a1a1d);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .projects-shell {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
    }

    .projects-intro {
      text-align: center;
      max-width: 760px;
      margin: 0 auto 1.6rem;
    }

    .projects-kicker {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.38rem 0.8rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      color: #ffd4de;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 0.7rem;
    }

    .projects-heading {
      margin: 0 0 0.6rem;
      font-size: clamp(1.7rem, 3vw, 2.35rem);
      letter-spacing: -0.02em;
    }

    .projects-copy {
      margin: 0;
      color: #d4d4d8;
      line-height: 1.7;
      font-size: 0.98rem;
    }

    .project-group {
      padding: 1.2rem;
      border-radius: 24px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 14px 40px rgba(0,0,0,0.25);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    .project-group h3 {
      margin: 0 0 0.35rem;
      color: #f8fafc;
      font-size: 1.2rem;
    }

    .project-group p {
      margin: 0 0 1rem;
      color: #cbd5e1;
      font-size: 0.95rem;
    }

    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .project-card {
      border-radius: 18px;
      overflow: hidden;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.09);
      box-shadow: 0 10px 24px rgba(0,0,0,0.2);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .project-image {
      height: 140px;
      width: 100%;
      background-size: cover;
      background-position: center;
    }

    .project-content {
      padding: 0.95rem;
    }

    .project-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 0.55rem;
    }

    .project-kicker {
      margin: 0 0 0.25rem;
      font-size: 0.72rem;
      color: #ffd4de;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .project-title {
      margin: 0;
      color: #ff6b8a;
      font-size: 1rem;
    }

    .project-subtitle {
      margin: 0.25rem 0 0;
      color: #cbd5e1;
      font-size: 0.9rem;
    }

    .project-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      color: #f8fafc;
      transition: transform 0.2s ease;
    }

    .project-link:hover {
      transform: translateX(3px);
    }

    .project-description {
      margin: 0 0 0.75rem;
      color: #f5f5f5;
      line-height: 1.6;
      font-size: 0.92rem;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .project-badge {
      padding: 0.32rem 0.6rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.1);
      color: #e2e8f0;
      font-size: 0.77rem;
    }

    @media (max-width: 640px) {
      .projects-section {
        padding: 3.2rem 1rem;
      }

      .project-group {
        padding: 1rem;
      }
    }
  `;

  const items = [
    {
      image: "/images/Cpms.png",
      title: "Curfew E-Pass MS",
      subtitle: "Digital Curfew Passes",
      handle: "@JeffGermino",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://cpms.infy.uk",
      type: "Web Development",
      description: "A secure digital curfew pass platform designed for fast, reliable access management.",
      tech: ["PHP", "MySQL", "CSS", "JavaScript"]
    },
    {
      image: "/images/moviety.png",
      title: "Moviety",
      subtitle: "Movie App Web Base",
      handle: "@JeffGermino",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://jeff0325.github.io/Moviety/",
      type: "Web Development",
      description: "A modern movie discovery experience with a sleek, responsive interface.",
      tech: ["JavaScript", "API", "CSS", "React"]
    },
    {
      image: "/images/Qr.png",
      title: "Wifi QR Generator",
      subtitle: "Generate Wifi Qr",
      handle: "@JeffGermino",
      borderColor: "#f63b3bff",
      gradient: "linear-gradient(180deg,rgb(246, 59, 59), #000)",
      url: "https://jeff0325.github.io/WifiQrGenerator/",
      type: "Web Development",
      description: "A simple utility for generating and sharing Wi-Fi credentials in seconds.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      image: "/images/Ai.png",
      title: "Alex AI",
      subtitle: "AI Assistant",
      handle: "@JeffGermino",
      borderColor: "#f6f03bff",
      gradient: "linear-gradient(180deg,rgba(224, 246, 59, 1), #000)",
      url: "https://github.com/Jeff0325/MyWebsite.git",
      type: "Web Development",
      description: "An experimental AI assistant concept that blends conversational UX with smart automation ideas.",
      tech: ["React", "AI", "API", "ASP.NET Core"]
    }
  ];

  const automationItems = [
    {
      image: "/images/smartremail.png",
      title: "AI Lead Qualification & CRM Automation",
      subtitle: "Sales Automation / CRM Automation / AI Automation",
      handle: "@JeffGermino",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
      url: "#",
      type: "Automation",
      description: "Automatically monitors incoming inquiries, filters spam, classifies legitimate leads, extracts customer information, saves qualified leads to the CRM, and sends personalized replies based on AI-driven intent analysis..",
      tech: ["n8n", "OpenAI", "Gmail API"]
    },
    {
      image: "/images/ShipmentTracker.png",
      title: "Shipment Tracker Automation",
      subtitle: "Process Automation / Operations Automation",
      handle: "@JeffGermino",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(145deg, #06B6D4, #000)",
      url: "#",
      type: "Automation",
      description: "Automatically tracks shipment status, updates delivery progress in real time, sends customer notifications, and alerts teams to delays or delivery exceptions, reducing manual follow-ups and improving visibility.",
      tech: ["Make.com", "Webhooks", "APIs"]
    },
    {
      image: "/images/RealEstate.png",
      title: "Support Ops Automation",
      subtitle: "Customer Service Automation / CRM Automation / AI Automation",
      handle: "@JeffGermino",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(145deg, #F59E0B, #000)",
      url: "#",
      type: "Automation",
      description: "Automatically retrieves property details from a CRM or Google Sheets and sends instant, personalized responses to client inquiries.",
      tech: ["n8n", "Ollama", "Automation"]
    }
  ];

const galleryItems = [
  { image: "/images/html.png", text: "HTML" },
  { image: "/images/php.svg", text: "PHP" },
  { image: "/images/js.png", text: "JavaScript" },
  { image: "/images/asp.png", text: "ASP .Net" },
  { image: "/images/c.png", text: "C#" },
  { image: "/images/react.png", text: "React" },
  { image: "/images/aw.jpg", text: "AWS" },
  { image: "/images/azlogo.png", text: "Azure" },
  { image: "/images/bb.jpg", text: "Bit Bucket" },
  { image: "/images/mysql.png", text: "MySQL" },
  { image: "/images/mssql.png", text: "MsSQL" },
  { image: "/images/n8n.png", text: "N8N" },
  { image: "/images/docker.png", text: "Docker" },
  { image: "/images/psp.png", text: "Photoshop" },
  { image: "/images/figma.png", text: "Figma" },
  

 ];
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Home Section */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        {/* Background */}
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: 0, width: "100%", height: "100%" }}>
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
        />
        </div>

        {/* Foreground */}
         <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
           <Profile
             name="Jefferson Germino"
             title="Web Developer"
             handle="jsongermino"
             status="Online"
             contactText="Contact Me"
             avatarUrl={avatar}
             showUserInfo={true}
             enableTilt={true}
             onContactClick={() => console.log('Contact clicked')}
           />
         </div>
            </section>
      {/* About Me Section */}
      <section
        id="about-me"
        style={{
          padding: "4rem 1rem",
          background: "linear-gradient(135deg, #0d0d0d, #1a1a1a)",
          color: "#fff",
          fontFamily: "monospace",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Code Symbols */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            fontSize: "6rem",
            color: "rgba(255,255,255,0.02)",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          &lt;/&gt;
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            fontSize: "6rem",
            color: "rgba(255,255,255,0.02)",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          &lt;/&gt;
        </div>
      
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          lineHeight: "1.8",
          fontSize: "1rem",
          padding: "0 1rem",
          marginBottom: "2rem",
          zIndex: 1,
        }}
      >
        <EncryptedText text="I’m a web developer and solution-focused engineer with experience building modern web applications, backend services, and cloud-based systems. I work across frontend, backend, automation, and deployment, with strong skills in HTML, CSS, JavaScript, ASP.NET, C#, React, AngularJS, PHP, MS SQL, MySQL, and API integration. I also enjoy bringing ideas to life through UI/UX design with Figma and Canva, and I’m comfortable working with Azure infrastructure, Docker, CI/CD concepts, and automation tools to improve efficiency and reliability." />
        <div style={{ marginTop: "1.2rem", display: "grid", gap: "0.75rem" }}>
          <div><strong>Frontend:</strong> HTML & CSS, JavaScript, ASP.NET, React JS (basic), Angular JS</div>
          <div><strong>Backend & Development:</strong> C#, ASP.NET, Web API Development, MS SQL Server, MySQL, PHP, .NET MAUI Mobile, Git & Bitbucket, CLI & PowerShell</div>
          <div><strong>UI/Design:</strong> Figma, Canva</div>
          <div><strong>DevOps & Cloud Infrastructure:</strong> Azure Virtual Machines & App Services, Storage & Networking, Identity/Security/Governance, Monitoring & Log Analytics, Azure Load Balancer, Disaster Recovery, Web Application Firewall, Docker, CI/CD Concepts, Release & Deployment Management</div>
          <div><strong>Automation & AI Integration:</strong> Workflow Automation, API Integration & Webhooks, AI Agent Integration (OpenAI, Ollama, Claude), Automated Notifications & Messaging</div>
        </div>
      </div>
      
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            maxWidth: "900px",
            width: "100%",
            textAlign: "left",
            padding: "0 1rem",
            zIndex: 1,
          }}
        >
          <div><strong>Email:</strong> jsongermino@gmail.com</div>
          <div><strong>Location:</strong> Mandaluyong, Philippines</div>
          <div><strong>Age:</strong> 25</div>
          <div><strong>Nationality:</strong> Filipino</div>
          <div><strong>Education:</strong> Holy Cross College</div>
          <div><strong>Degree:</strong> BS in Computer Science</div>
          <div><strong>Experience:</strong> 4+ Years</div>
          <div><strong>Projects:</strong> 10+ Completed</div>
          <div><strong>Seminars:</strong> 10+ Attended</div>
        </div>
      </section>
      
      
      {/* Gallery Section */}
      <section
        id="skills"
        style={{
          height: "80vh",
          paddingTop: "60px",
          backgroundColor: "#111",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff"
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
          Skills and Expertise
        </h2>
      
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </section>
      
      
      {/* Project Section */}
      <section id="project" className="projects-section">
        <style>{projectStyles}</style>
        <div className="projects-shell">
          <motion.div
            className="projects-intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="projects-kicker">
              <FaCode /> Projects
            </span>
            <h2 className="projects-heading">Modern Web Applications & Intelligent Automation Solutions</h2>
            <p className="projects-copy">
              Explore a collection of projects that showcase responsive web development, AI-powered automation, and business process optimization designed to solve real-world challenges.
            </p>
          </motion.div>

          <div className="project-group">
            <h3>Web Development</h3>
            <p>Responsive interfaces, client-facing applications, and polished digital products.</p>
            <div className="project-grid">
              {items.map((item, index) => (
                <ProjectCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>

          <div className="project-group">
            <h3>Automation Projects</h3>
            <p>Workflow automations, AI-assisted processes, and productivity-focused systems.</p>
            <div className="project-grid">
              {automationItems.map((item, index) => (
                <ProjectCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="experience-section">
        <style>{experienceStyles}</style>
        <div className="experience-shell">
          <motion.div
            className="experience-intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="experience-kicker">
              <FaBriefcase /> Experience
            </span>
            <h2 className="experience-heading">A focused record of product delivery, automation, and technical growth.</h2>
            <p className="experience-lead">
              I build reliable web applications and practical automation systems that improve usability, efficiency, and long-term maintainability.
            </p>
          </motion.div>

          <div className="timeline" role="list">
            {experienceItems.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      
            {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#222",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact</h2>
      
        <p style={{ maxWidth: "600px", margin: "0 auto 2rem", lineHeight: "1.6" }}>
          I am actively exploring career opportunities. If you have a job opening, project collaboration, or require further information, please feel free to reach out.
        </p>
      
        {/* Decrypted Email */}
        <EncryptedText
          text="jsongermino@gmail.com"
          animateOn="view"
          speed={60}
          maxIterations={30}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#"
          className="email-decrypted"
          parentClassName="contact-text"
          encryptedClassName="scrambled"
        />
      
        {/* Social Icons */}
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "1.8rem" }}>
          <a className="social-link" href="https://github.com/Jeff0325" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            <FaGithub />
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/jefferson-germino-a3999b246/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            <FaLinkedin />
          </a>
          <a className="social-link" href="https://instagram.com/germinochon" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            <FaInstagram />
          </a>
          <a className="social-link" href="https://discord.com/users/yourID" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            <FaDiscord />
          </a>
        </div>
      
        <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#bbb" }}>
          © {new Date().getFullYear()} Jefferson Germino. All rights reserved.
        </p>
      </section>
          </div>
        );
      }
      
export default App;
      
