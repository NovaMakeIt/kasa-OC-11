import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="not-found__link">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;
