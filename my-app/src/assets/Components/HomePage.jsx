import React from "react";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2>My Website</h2>
        <ul style={styles.navLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to My Website</h1>
        <p>This is a React + Vite Home Page</p>
        <button style={styles.button}>Get Started</button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#222",
    color: "white",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  hero: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  button: {
    padding: "10px 20px",
    marginTop: "15px",
    fontSize: "16px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#222",
    color: "white",
  },
};

export default App;
