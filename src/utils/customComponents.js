import Ad from '../components/Ad';
import { ReactComponent as Time } from '../images/logo/time.svg';
import { ReactComponent as Teach } from '../images/logo/teach.svg';
import { ReactComponent as VideoGroup } from '../images/logo/video.svg';

const companies = (
  <div className="app__companies">
    <h3>Trusted by companies of all sizes</h3>
    <div className="app__logos">
      <div className="logo-item">
        <img
          alt="booking"
          width="151"
          height="26"
          src="https://s.udemycdn.com/partner-logos/booking-logo.svg"
        />
      </div>
      <div className="logo-item">
        <img
          alt="volkswagen"
          width="32"
          height="32"
          src="https://s.udemycdn.com/partner-logos/volkswagen-logo.svg"
        />
      </div>
      <div className="logo-item">
        <img
          alt="mercedes"
          width="148"
          height="28"
          src="https://s.udemycdn.com/partner-logos/mercedes-logo-v2.svg"
        />
      </div>
      <div className="logo-item">
        <img
          alt="adidas"
          width="47"
          height="32"
          src="https://s.udemycdn.com/partner-logos/adidas-logo.svg"
        />
      </div>
      <div className="logo-item">
        <img
          alt="eventbrite"
          width="115"
          height="32"
          src="https://s.udemycdn.com/partner-logos/eventbrite-logo.svg"
        />
      </div>
    </div>
  </div>
);

const adBottom = (
  <>
    <Ad
      Icon={Time}
      title="Go at your own pace"
      description="Enjoy lifetime access to courses on Udemy’s website and app"
    />
    <Ad
      Icon={Teach}
      title="Learn from industry experts"
      description="Select from top instructors around the world"
    />
    <Ad
      Icon={VideoGroup}
      title="Find video courses on almost any topic"
      description="Build your library for your career and personal growth"
    />
  </>
);

export { adBottom, companies };
