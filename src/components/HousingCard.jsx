import '../styles/HousingCard.scss';

function HousingCard({ title, cover }) {
  return (
    <div className="housing-card" style={{ backgroundImage: `url(${cover})` }}>
      <div className="housing-card__gradient" />
      <div className="housing-card__title">{title}</div>
    </div>
  );
}

export default HousingCard;
