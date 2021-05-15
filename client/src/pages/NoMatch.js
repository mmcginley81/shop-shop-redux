import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
          <img src="../../public/images/404.png" alt="Darth Vader disapproves of your lack of navigation" />
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
