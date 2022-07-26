import './Banner.scss';
import { useState } from 'react';
import img from "../../images/certificate.jpg"

const Banner = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="banner">
      {show && <img src={img} alt='certificate' className='banner__img'></img>}
      <div onMouseEnter={() => setShow(true)} onMouseLeave={()=>setShow(false)} className="banner__modal">
        <h1>My Certificate</h1>
        <p>Hover to see my Udedmy WEB DEVELOPMENT BOOTCAMP Certificate.</p>
      </div>
    </div>
  );
};

export default Banner;
