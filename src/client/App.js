import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faHammer,
  faPlusCircle,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleRight,
  faFileAlt
} from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styling/App.scss";
import IntroPage from "./components/IntroPage";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

library.add(
  faArrowAltCircleRight,
  faLinkedin,
  faGithub,
  faBriefcase,
  faFileAlt,
  faGraduationCap,
  faHammer,
  faPlusCircle,
  faTools
);

const App = () => {
  return (
    <>
      <Route
        render={({ location }) => (
          <ReactCSSTransitionReplace
            transitionName="cross-fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <div className="App" key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={IntroPage} />
                <Route path="/home" component={Home} />
                <Route path="/resume" component={Resume} />
              </Switch>
            </div>
          </ReactCSSTransitionReplace>
        )}
      />
    </>
  );
};

export default App;
