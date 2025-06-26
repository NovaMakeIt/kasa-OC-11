import { useState } from 'react';
import '../styles/Carousel.scss';
import leftArrow from '../assets/icon/arrow-left.svg';
import rightArrow from '../assets/icon/arrow-right.svg';

function Carousel({ pictures, title }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + pictures.length) % pictures.length);
  const next = () => setIndex((i) => (i + 1) % pictures.length);

  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="carousel">
      <img src={pictures[index]} alt={title} className="carousel-img" />
      {pictures.length > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prev}>
            <img src={leftArrow} alt="left arrow" />
          </button>
          <button className="carousel-arrow right" onClick={next}>
            <img src={rightArrow} alt="right arrow" />
          </button>
          <span className="carousel-count">{index + 1}/{pictures.length}</span>
        </>
      )}
    </div>
  );
}

export default Carousel;
