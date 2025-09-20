import React from "react";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1.5em 0 1em 0", fontSize: "1em", color: "#222", fontFamily: "Georgia, serif" }}>
      <div style={{ marginBottom: "0.5em" }}>
        <a
          href="https://www.linkedin.com/in/nnwetzel/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 700, textDecoration: "underline", fontSize: "1.05em", color: "#222", marginRight: "1.2em" }}
        >
          LinkedIn
        </a>
        <span style={{ fontSize: "1.05em", color: "#888", fontWeight: 400 }}>|</span>
        <a
          href="https://github.com/nnwetzel"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 700, textDecoration: "underline", fontSize: "1.05em", color: "#222", marginLeft: "1.2em" }}
        >
          GitHub
        </a>
      </div>
      <div style={{ fontSize: "0.95em", color: "#666", marginTop: "0.5em" }}>
        Copyright &copy; Nathaniel Wetzel
      </div>
    </footer>
  );
}
