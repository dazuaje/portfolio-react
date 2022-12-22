import React from "react";
import "../../sassStyles/_variables.scss";
import homeImage from "../../Assets/homeImage.svg";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__content__wrapper">
          <span className="home__content--greeting">Hi there! I'm</span>
          <h1 className="home__content--name">David José Azuaje Torres</h1>
          <h2 className="home__content--jobPosition">FrontEnd Developer</h2>
          <button className="home__content--cta">Contact Me</button>
        </div>
      </div>

      <div className="home__homeImage">
        <img
          className="home__homeImage--image"
          src={homeImage}
          alt="homeImage"
          srcset=""
        />
      </div>
    </section>
  );
};

export default Home;