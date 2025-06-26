import '../styles/RatingStars.scss';
import starsNormal from '../assets/icon/stars.svg';
import starsFill from '../assets/icon/stars-fill.svg';

function RatingStars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span>
        <img src={i <= rating ? starsFill : starsNormal} alt="star" />
      </span>
    );
  }
  return <div className="rating-stars">{stars}</div>;
}

export default RatingStars;
