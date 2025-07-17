import React from "react";
import Navbar from "./components/Nav";
import CircularGallery from "./components/CircularGallery";
import Lanyard from "./components/Lanyard";
import Hyperspeed from './components/Hyperspeed';
import { hyperspeedPresets } from './components/hyperspeedPresets';
import Aurora from './components/AuroraBackground';
import Profile from './components/Profile';
import avatar from './assets/download.png';
import EncryptedText from './components/EncryptedText';
import ChromaGrid from './components/ChromaGrid';
import Spotlight from './components/Spotlight';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';

function App() {
    const items = [
    {
      image: "/images/cpms.png",
      title: "Curfew E-Pass MS",
      subtitle: "Digital Curfew Passes",
      handle: "@JeffGermino",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: ""
    },
    {
      image: "/images/moviety.png",
      title: "Moviety",
      subtitle: "Movie App Web Base",
      handle: "@JeffGermino",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: ""
    },
        {
      image: "/images/Qr.png",
      title: "Wifi QR Generator",
      subtitle: "Genrate Wifi Qr ",
      handle: "@JeffGermino",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(180deg,rgb(246, 59, 59), #000)",
      url: ""
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
  { image: "/images/azure.png", text: "Azure" },
  { image: "/images/bb.jpg", text: "Bit Bucket" },
  { image: "/images/mysql.png", text: "MySQL" },
  { image: "/images/mssql.png", text: "MsSQL" },
  { image: "/images/ps.png", text: "Photoshop" },
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
             handle="germinochon"
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

<p
  style={{
    maxWidth: "800px",
    lineHeight: "1.8",
    fontSize: "1.1rem",
    padding: "0 1rem",
    marginBottom: "2rem",
    marginRight: "5rem",
    zIndex: 1,
  }}
>
  <EncryptedText text="I'm a web developer skilled in C# .NET, MS SQL, Azure, and AWS, building secure, scalable cloud solutions. I specialize in deployment, WAF security, load balancing, and disaster recovery. With a passion for user-centered design using Figma and Photoshop, I combine technical expertise with creative vision to deliver seamless digital experiences." />
</p>

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
    <div><strong>Email:</strong> jeffersongermino0325@gmail.com</div>
    <div><strong>Location:</strong> Mandaluyong, Philippines</div>
    <div><strong>Age:</strong> 24</div>
    <div><strong>Nationality:</strong> Filipino</div>
    <div><strong>Education:</strong> Holy Cross College</div>
    <div><strong>Degree:</strong> BS in Computer Science</div>
    <div><strong>Experience:</strong> 2+ Years</div>
    <div><strong>Projects:</strong> 5+ Completed</div>
    <div><strong>Seminars:</strong> 10+ Attended</div>
  </div>
</section>


{/* Gallery Section */}
<section
  id="gallery"
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
    Gallery
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
<section
  id="project"
  style={{
    minHeight: '100vh',
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 1rem',
    position: 'relative',
  }}
>
  <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '1.5rem' }}>
    Projects
  </h2>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</section>

{/* Experience Section (formerly About) */}
<section
  id="about"
  style={{
    padding: "4rem 2rem",
    backgroundColor: "#222",
    color: "white",
    fontFamily: "monospace",
    textAlign: "center",
  }}
>
<h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
  Experience
</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      maxWidth: "1000px",
      margin: "0 auto",
    }}
  >
    <Spotlight>
      <h3 style={{ color: "#ff3860", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        MIS Intern
      </h3>
      <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
        Holy Cross College / 2022
      </p>
      <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
        Assisted in system installation, troubleshooting, database management,
        and software development. Provided IT support, diagnosed technical
        issues, maintained infrastructure, generated reports, and documented
        system configurations to ensure smooth operations.
      </p>
    </Spotlight>

    <Spotlight>
      <h3 style={{ color: "#ff3860", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        Web Developer
      </h3>
      <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
        Jyosna Inc / 2022
      </p>
      <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
        Developed and maintained web applications using C#, ASP.NET, and MSSQL
        while designing scalable cloud solutions on Azure. Managed cloud
        infrastructure, including governance, load balancing, disaster recovery,
        and security (WAF). Integrated third-party APIs, optimized database
        performance, and implemented UI/UX improvements.
      </p>
    </Spotlight>
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
    text="jeffersongermino0325@gmail.com"
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
    <a href="https://github.com/Jeff0325" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/jefferson-germino-a3999b246/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
      <FaLinkedin />
    </a>
    <a href="https://instagram.com/germinochon" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
      <FaInstagram />
    </a>
    <a href="https://discord.com/users/yourID" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
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
