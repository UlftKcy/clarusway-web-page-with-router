import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar"
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Html from "../pages/Html";
import Css from "../pages/Css";
import Javascript from "../pages/Javascript";

const AppRouter = () => {
  return (
    <Router basename="clarusway">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/html" component={Html} />
        <Route path="/css" component={Css} />
        <Route path="/javascript" component={Javascript} />
      </Switch>
      <Subscribe />
      <Footer />
    </Router>
  );
};
export default AppRouter;
