import logements from '../data/logements.json';
import HousingCard from './HousingCard';
import '../styles/HousingGrid.scss';

function HousingGrid() {
  return (
    <div className="housing-grid">
      {logements.map(({ id, title, cover }) => (
        <HousingCard key={id} title={title} cover={cover} />
      ))}
    </div>
  );
}

export default HousingGrid;
