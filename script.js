/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  background-color: var(--bg);
  color: var(--text);
  transition: background 0.3s ease, color 0.3s ease;
}
:root {
  --bg: #ffffff;
  --text: #111111;
  --card: #f5f5f5;
  --primary: #0071e3;
}
body.dark {
  --bg: #1c1c1e;
  --text: #f2f2f7;
  --card: #2c2c2e;
  --primary: #0a84ff;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: var(--card);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.nav-links a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
}

/* Hero & Sections */
section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: auto;
}

/* Cards */
.product-grid,
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.product-card,
.case-card {
  background: var(--card);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.product-card:hover,
.case-card:hover {
  transform: translateY(-5px);
}
.price {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

/* Buttons */
.btn-primary,
.btn-secondary {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
}
.btn-primary:hover,
.btn-secondary:hover {
  background: #005bb5;
}

/* Contact Form */
#contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
}
#contact-form input,
#contact-form textarea {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: var(--card);
  color: var(--text);
  font-size: 1rem;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem;
  background: var(--card);
  color: var(--text);
  margin-top: 3rem;
}

/* Responsive Typography */
h1, h2, h3 {
  color: var(--text);
  margin-bottom: 1rem;
}
p {
  margin-bottom: 1rem;
}
