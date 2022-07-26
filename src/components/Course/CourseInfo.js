import './CourseInfo.scss';
import '../../containers/sharedClasses.scss';
const courseInfo = ({ bestSeller, stars, ratings }) => {
  return (
    <div className="courseInfo">
      {bestSeller && <div className="courseInfo__badge bestSeller">Bestseller</div>}
      <p className="courseInfo__starContainer">
        <strong>
          <span className="courseInfo__rating">{stars}</span>
          <span className="courseInfo__star">⭐</span>
        </strong>
        <span className="courseInfo__noBuys">({ratings} ratings)</span>
      </p>
    </div>
  );
};

export default courseInfo;
