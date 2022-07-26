import { useDispatch, useSelector } from "react-redux";
import CourseInfo from "../Course/CourseInfo"
import { TotalPrice } from "./TotalPrice";
import './CartItem.scss'
import { removeCourse } from "../../Redux/action/action";

const CartItem = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.courseReducer)

  return (
    <>
      {state.map(i => {
        return <div className="cartItem">
          <div className="left">
            <img src={i.imageURL} alt="" className="cartItem__image" />
            <div className="cartItem__info">
              <div className="cartItem__course">
                {i.title}
              </div>
              <div>
                By {i.author}
              </div>
              <CourseInfo className="courseInfo" bestSeller={i.bestSeller} stars={i.stars} ratings={i.ratings} />
            </div>
            <p className="cartItem__remove" style={{ cursor: "pointer" }} onClick={() => dispatch(removeCourse(i.id))}>Remove</p>
            <p className="cartItem__price">
              CA${Math.floor(i.currPrice * 0.016) + 0.99}
            </p>
          </div>
          <div className="right">
            <TotalPrice></TotalPrice>
          </div>
        </div>
      })}
    </>

  );
};

export default CartItem;
