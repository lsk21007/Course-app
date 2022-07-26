import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from "../../Redux/action/action"
import { useHistory } from "react-router-dom";
import './CourseCard.scss';

const CourseCard = ({ data }) => {
  const { id, imageURL, currPrice, title, orgPrice, courseIncludes } = data;
  const [show, setShow] = useState(false);

  const state = useSelector(state => state.courseReducer);
  const clickId = state.find((i) => { return i.id === id });
  const dispatch = useDispatch();

  const navigate = useHistory()

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
          <span className="courseCard__currPrice">${Math.floor(currPrice*0.016)+0.99}</span>
          <span className="courseCard__orgPrice">${Math.floor(orgPrice*0.016)+0.99}</span>
        </div>
        {!clickId ? <button onClick={() => dispatch(addCourse(data))} className="courseCard__cart">
          Add to cart
        </button>:<button onClick={()=>navigate.push('/cart')} className="courseCard__cart">
          Go to cart
        </button>}
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
