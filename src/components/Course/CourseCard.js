import { useEffect, useState } from 'react';
import './CourseCard.scss';

const CourseCard = ({ data }) => {
  const { imageURL, currPrice, title, orgPrice, courseIncludes } = data;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => (window.scrollY > 250 ? setShow(true) : setShow(false));
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className={`courseCard ${show ? 'show' : ''}`}>
      <img src={imageURL} alt={title} className="courseCard__image" />
      <div className="courseCard__priceInfo">
        <div className="courseCard__price">
          <span className="courseCard__currPrice">&#8377;{currPrice}</span>
          <span className="courseCard__orgPrice">&#8377;{orgPrice}</span>
        </div>
        <button className="courseCard__cart">
          Add to cart
        </button>
        <button className="courseCard__buy">Buy now</button>
        <small>30-Day Money-Back Guarantee</small>
      </div>

      <div className="courseCard__includes">
        <h4>This course includes: </h4>
        <ul>
          {courseIncludes?.map(({ Icon, title }) => (
            <li key={title}>
              <Icon /> <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
