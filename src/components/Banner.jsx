import '../styles/Banner.scss';
import bannerImg from '../assets/image/img-source-1.png';

function Banner() {
  return (
    <div className="kasa-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="kasa-banner__overlay" />
      <h1 className="kasa-banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
