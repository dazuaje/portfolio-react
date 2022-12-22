import React from "react";
import "./AboutMe.scss";
import personalPhoto from "../../Assets/personalPhoto.jpg";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="AboutMe">
      <div className="aboutMe__image__container">
        <img
          className="aboutMe__image"
          src={personalPhoto}
          alt="personalPhoto"
        />
      </div>

      <div className="aboutMe__content__container">
        <h2 className="aboutMe__content--whoIam">Who I am?</h2>
        <p className="aboutMe__content--description">
          I am a very web programmer dedicated and motivated to provide
          solutions, applying logically and looking for consistent resolution
          methods. I like challenges, since they involve constant learning, be
          it with a paradigm shift or a new technology.
        </p>
        <button class="aboutMe__content--downloadCV">Download CV</button>
      </div>
    </section>
  );
};

export default AboutMe;