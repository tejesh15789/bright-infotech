import "./App.css";
import Header from './components/common/heading/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import ServiceHome from "./components/services/serviceHome.jsx";
import Placedstudents from "./components/Placed Students/Placedmain.jsx";
import IntershipMain from "./components/Intership/IntershipMain.jsx";
import HiringMain from "./components/HiringPartners/HiringMain.jsx"
import Reviews from "./components/common/Adds/googlereviews.jsx";
import Contact from "./components/contact/Contact.jsx"
import Whatapp from "./components/common/Adds/whatapp.jsx";
import Workshophome from "./components/workshop/workshophome.jsx"


function App() {
  return (
    <Router>
      <Header />
      <Reviews/>
      <Whatapp/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Services" exact component={ServiceHome} />
        <Route path="/Placed Students" exact component={Placedstudents} />
        <Route path="/Intership" exact component={IntershipMain} />
        <Route path="/Hiring Partners" exact component={HiringMain} />
        <Route path="/WorkShops" exact component={Workshophome} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;

