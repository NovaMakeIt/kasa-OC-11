import Dropdown from '../components/Dropdown';
import bannerImg from '../assets/image/img-source-2.png';
import '../styles/About.scss';

function About() {
  return (
    <div className="about-page">
      <div className="about-banner-wrapper">
        <img
          src={bannerImg}
          alt="Montagnes"
          className="about-banner-img"
        />
      </div>
      <div className="about-dropdowns">
        <Dropdown title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
        </Dropdown>
        <Dropdown title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Dropdown>
        <Dropdown title="Service">
          La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
        </Dropdown>
        <Dropdown title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </Dropdown>
      </div>
    </div>
  );
}

export default About;
