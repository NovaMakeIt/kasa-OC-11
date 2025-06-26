import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import RatingStars from '../components/RatingStars';
import Dropdown from '../components/Dropdown';
import '../styles/LogementDetail.scss';

function LogementDetail() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="page-content logement-detail">
      <Carousel pictures={logement.pictures} title={logement.title} />
      <div className="logement-detail__infos">
        <div className="logement-detail__main">
          <h1 className="logement-detail__title">{logement.title}</h1>
          <div className="logement-detail__location">{logement.location}</div>
          <div className="logement-detail__tags">
            {logement.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>
        <div className="logement-detail__side">
          <div className="logement-detail__host">
            <span className="logement-detail__host-name">
              {logement.host.name.split(' ')[0]}<br />{logement.host.name.split(' ').slice(1).join(' ')}
            </span>
            <img src={logement.host.picture} alt={logement.host.name} className="host-img" />
          </div>
          <RatingStars rating={parseInt(logement.rating, 10)} />
        </div>
      </div>
      <div className="logement-detail__dropdowns">
        <Dropdown title="Description">
          <p>{logement.description}</p>
        </Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {logement.equipments.map((eq, i) => <li key={i}>{eq}</li>)}
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}

export default LogementDetail;
