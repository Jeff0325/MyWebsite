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

function App() {
    const items = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Moviety",
      subtitle: "Movie App Web Base",
      handle: "@JeffGermino",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: ""
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Curfew E-Pass Management System",
      subtitle: "Digital curfew passes",
      handle: "@JeffGermino",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: ""
    }
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

      {/* Gallery Section */}
        <section
          id="gallery"
          style={{
            height: "80vh",
            paddingTop: "60px",
            backgroundColor: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </section>

      {/* Project Section */}
      <section id="project" style={{ height: '600px', position: 'relative' }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</section>

            {/* About Section */}
      <section
        id="about"
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#222",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
          This gallery is built using WebGL via OGL, integrated into a smooth,
          infinite scrolling React experience. It’s designed to showcase images in
          a dynamic and engaging way across all devices.
        </p>
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

  {/* Decrypted Instagram */}
  <div style={{ marginTop: '1rem' }}>
    <EncryptedText
      text="@jefferson.codes"
      animateOn="view"
      revealDirection="center"
    />
  </div>

  <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#bbb" }}>
    © {new Date().getFullYear()} Jefferson Germino. All rights reserved.
  </p>
</section>
    </div>
  );
}

export default App;
