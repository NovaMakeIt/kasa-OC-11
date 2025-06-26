import '../styles/HousingCard.scss';

import { Link } from 'react-router-dom';

function HousingCard({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="housing-card" style={{ backgroundImage: `url(${cover})` }}>
      <div className="housing-card__gradient" />
      <div className="housing-card__title">{title}</div>
    </Link>
  );
}

export default HousingCard;
