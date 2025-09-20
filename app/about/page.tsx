
"use client";
import Navbar from "../../components/Navbar";
import React, { useRef, useEffect } from "react";

export default function About() {
  return (
    <>
  <Navbar />
      {/* ...existing about page content... */}
    </>
  );
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
    <div className="container min-h-screen flex flex-col items-start justify-center" style={{ margin: 0, width: '100%', maxWidth: '100%', padding: 0, boxSizing: 'border-box', paddingTop: '5.5em' }}>
      <header ref={headerRef} className="header">
        <nav className="nav-bar">
          <a href="/" className="nav-item">home</a>
          <a href="/about" className="nav-item">about</a>
          <a href="/experience" className="nav-item">experience</a>
          <a href="/projects" className="nav-item">projects</a>
        </nav>
      </header>
    </div>
  );
}
