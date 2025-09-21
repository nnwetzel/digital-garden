"use client";
import React from "react";
import Footer from "./footer";

export default function PageLayout({ headline, children }: { headline: string, children: React.ReactNode }) {
  return (
    <div className="container min-h-screen flex flex-col items-start justify-center" style={{ maxWidth: '800px', width: '100%', margin: '0 auto', padding: '0 1.5em', boxSizing: 'border-box', paddingTop: '4em' }}>
      <h1 className="headline" style={{ fontSize: '2.1em', fontWeight: 700, marginBottom: '2rem', textAlign: 'left', width: '100%' }}>{headline}</h1>
      <main className="main" style={{ fontSize: '1em', fontWeight: 400, textAlign: 'left', maxWidth: '100%', width: '100%' }}>
        {children}
      </main>
      <div style={{ marginTop: '3.5em' }}>
        <Footer />
      </div>
    </div>
  );
}
