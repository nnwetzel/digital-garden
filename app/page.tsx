
"use client";
import Navbar from "../components/Navbar";
import PageLayout from "../components/page-layout";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageLayout headline="Hi there, I'm Nat">
        <p>
          I'm a Software Engineer passionate about <em>artificial intelligence</em>, <em>venture capital</em>, and <em>impact at scale</em>.<br />
        </p>
        <div style={{ height: "1.5rem" }} />
  {/* ...removed duplicate 'Recently, I' section... */}
        <h3 style={{ fontWeight: 700, fontSize: '1.05em', marginBottom: '0.5em' }}>Recently, I</h3>
        <ul className="dash" style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Worked at <a href="https://www.amazon.com/">Amazon</a> as an SDE Intern during Summer 2025</li>
          <li>Read <a href="https://www.goodreads.com/book/show/60811826-i-who-have-never-known-men">I Who Have Never Known Men</a></li>
        </ul>
        <div style={{ height: "1.5rem" }} />
        <h3 style={{ fontWeight: 700, fontSize: '1.05em', marginBottom: '0.5em' }}>Right now, I am</h3>
        <ul className="dash" style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Working on a x64 Compiler in <span style={{ color: '#e53935', fontWeight: 500, fontFamily: 'Georgia, serif', fontSize: '1em', lineHeight: '1' }}>C++</span></li>
          <li>Deepening my knowledge in Computer Vision, Computer Systems, and <span style={{ color: '#e53935', fontWeight: 500, fontFamily: 'Georgia, serif', fontSize: '1em', lineHeight: '1' }}>C++</span></li>
          <li>Reading <a href="https://www.goodreads.com/book/show/4406.East_of_Eden">East of Eden</a></li>
          <li>Exploring letters on <a href="https://we-b.site/">(we)bsite</a></li>
        </ul>
        <div style={{ height: "1.5rem" }} />
        <h3 style={{ fontWeight: 700, fontSize: '1.05em', marginBottom: '0.5em' }}>Soon, I will be</h3>
        <ul className="dash" style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>To be determined</li>
        </ul>
      </PageLayout>
    </>
  );
}