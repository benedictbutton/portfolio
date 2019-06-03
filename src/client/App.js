import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer, faTools } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import IntroPage from "./IntroPage";
import "./styling/App.scss";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

library.add(faLinkedin, faGithub, faFileAlt, faHammer, faTools);

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
