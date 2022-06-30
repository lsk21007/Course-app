import './App.scss';
import Navbar from '../components/Navbar';
import Row from '../components/Home/Row';
import Banner from '../components/Home/Banner';
import Facility from '../components/Home/Facility';
import Cart from '../components/Cart/Cart';
import Course from '../components/Course/Course';
import { adBottom, companies } from '../utils/customComponents';
import { HashRouter, Route, Switch } from 'react-router-dom';

const mainApp = (
  <div className="app__body">
    <Banner />
    <Row
      button
      title="The world's largest selection of courses"
      description="Choose from 130,000 online video courses with new additions published every month"
    />
    <div className="app__ads">{adBottom}</div>
    <Row title="Students are also viewing" data />
    <Facility instructor />
    {companies}
    <Facility buisness />
  </div>
);
function App() {
  return (
    <div className="app">
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/Course-app">{mainApp}</Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/course/:courseId"><Course /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
