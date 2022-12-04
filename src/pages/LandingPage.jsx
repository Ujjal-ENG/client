import React from "react";

import main from "../assets/images/main-alternative.svg";

import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            atque. Ipsum illo aspernatur ducimus provident voluptatibus quia
            voluptate, illum magnam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, velit!
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
