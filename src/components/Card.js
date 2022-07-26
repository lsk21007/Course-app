import { useHistory } from 'react-router-dom';
import './Card.scss';
import '../containers/sharedClasses.scss';

const Card = ({ data }) => {
  const {
    id,
    imageURL,
    title,
    author,
    stars,
    noOfStudents,
    currPrice,
    orgPrice,
    bestSeller,
  } = data;

  const history = useHistory();

  return (
    <div className="card" onClick={() => history.push(`/course/${id}`)}>
      <div className="card__image">
        <div className="card__imageWrapper"></div>
        <img src={imageURL} alt={title} />
      </div>
      <div className="card__info">
        <h3>{title}</h3>
        <small>{author}</small>
        <p className="card__starContainer">
          <strong>
            <span className="card__rating">{stars}</span>
          </strong>
          <span className="card__star">⭐</span>
          <span className="card__noBuys">({noOfStudents})</span>
        </p>
        <p className="card__price">
          <span className="card__currentPrice">
            <strong>${Math.floor(currPrice*0.016)+0.99}</strong>
          </span>
          <span className="card__originalPrice">${Math.floor(orgPrice*0.016)+0.99}</span>
        </p>
        {bestSeller ? <div className="bestSeller">Bestseller</div> : null}
      </div>
    </div>
  );
};

export default Card;
