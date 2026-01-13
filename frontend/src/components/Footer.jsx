function Footer() {
  return (
    <footer className="bb-footer" id="contact">
      <div className="bb-footer__newsletter">
        <p><b>Stop Managing Tools. Start Managing Growth.</b></p>
        <span>Join the smart retailers and service providers who have reclaimed their time and revenue with ByteBazaar.</span>
        <form className="bb-footer__form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Enter your work email" required />
          <button type="submit">Get Instant Access</button>
        </form>
      </div>
      <div className="bb-footer__bottom">
        <div className="bb-footer__brand">ByteBazaar</div>
        <div className="bb-footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="bb-footer__copy">© 2026 ByteBazaar CRM. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

