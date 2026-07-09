import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

export const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState(null);

  const demo = [
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
    },
  ];
  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        }
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c)}
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              cursor: "pointer",
            }
          }
        >
          <div className="chroma-card-top">
            <span className="chroma-card-badge">Featured Project</span>
          </div>
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />

      {selectedItem && (
        <div className="chroma-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="chroma-modal" onClick={(e) => e.stopPropagation()}>
            <button className="chroma-modal-close" onClick={() => setSelectedItem(null)} aria-label="Close project details">
              ×
            </button>
            <div className="chroma-modal-content">
              <div className="chroma-modal-media">
                <img src={selectedItem.image} alt={selectedItem.title} />
              </div>
              <div className="chroma-modal-info">
                <h3>{selectedItem.title}</h3>
                <p className="chroma-modal-subtitle">{selectedItem.subtitle}</p>
                <p className="chroma-modal-description">
                  {selectedItem.description || "This project highlights my work in building practical digital solutions with a strong focus on usability, performance, and modern design."}
                </p>
                <div className="chroma-modal-features">
                  {(selectedItem.features || ["Responsive interface", "Modern UI", "Functional workflow"]).map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
                {selectedItem.url && selectedItem.url !== "#" && (
                  <a href={selectedItem.url} target="_blank" rel="noreferrer" className="chroma-modal-link">
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChromaGrid;
