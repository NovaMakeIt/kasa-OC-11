import '../styles/Footer.scss';
import logoFooter from '../assets/logo/logo-footer.svg';

function Footer() {
  return (
    <footer className="kasa-footer">
      <div className="footer-content">
        <img src={logoFooter} alt="Kasa Footer" className="footer-logo" />
        <p className="footer-text">© 2025 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
