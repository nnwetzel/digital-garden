"use client";
import React, { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add("scrolled");
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <nav className="nav-bar" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2.2em' }}>
        <a href="/" className="nav-item" style={{ fontWeight: 700, fontSize: '1.08em' }}>home</a>
        <a href="/about" className="nav-item" style={{ fontWeight: 700, fontSize: '1.08em' }}>about</a>
        <a href="/experience" className="nav-item" style={{ fontWeight: 700, fontSize: '1.08em' }}>experience</a>
        <a href="/projects" className="nav-item" style={{ fontWeight: 700, fontSize: '1.08em' }}>projects</a>
      </nav>
    </header>
  );
}