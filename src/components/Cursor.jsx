import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".hero_title_wrap, .hero_slide_right, .here_title_arrow"
    );

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  return (
    <div
      className={`cursor ${hovered ? "cursor-hovered" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-txt">{hovered ? "View" : ""}</div>
    </div>
  );
};

export default Cursor;
