import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/logo/logo.svg';

function Header() {
  return (
    <header className="kasa-header">
      <div className="header-content">
        <img src={logo} alt="Kasa" className="header-logo" />
        <nav className="header-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
            Accueil
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
