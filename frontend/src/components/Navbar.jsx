function Navbar() {
  return (
    <nav className="bb-navbar">
      <div className="bb-navbar__logo">ByteBazaar</div>
      <ul className="bb-navbar__links">
        <li><a href="#features">Features</a></li>
        <li><a href="#why">Why Us</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="bb-navbar__cta">Get Started</button>
    </nav>
  );
}

export default Navbar;

