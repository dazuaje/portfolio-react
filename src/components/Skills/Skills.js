import React from "react";
import "./Skills.scss";
import imagesHelper from "../../helpers/images";
import Skill from "../Skill/Skill";

const {
  htmlLogo,
  cssLogo,
  jsLogo,
  gitLogo,
  sassLogo,
  reactLogo,
  problemSolvingImage,
  methodicalImage,
  teamWorkImage,
  resilienceImage,
  creativityImage,
  communicationImage,
 } = imagesHelper;

const Skills = () => {
  const dataSkills = [
    { images: htmlLogo, word: "HTML5" },
    { images: cssLogo, word: "CSS3" },
    { images: jsLogo, word: "JavaScript" },
    { images: gitLogo, word: "Git/GitHub" },
    { images: sassLogo, word: "SASS" },
    { images: reactLogo, word: "React" },

    { images: problemSolvingImage, word: "Problem-Solving" },
    { images: methodicalImage, word: "Methodical" },
    { images: teamWorkImage, word: "Teamwork" },
    { images: resilienceImage, word: "Resilience" },
    { images: creativityImage, word: "Creativity" },
    { images: communicationImage, word: "Communication" },
  ];
  
  return (
    <section id="skills" className="skills">
      <h3 className="skills--title">Tech Skills</h3>

      <div className="skills__logo__container">
        {dataSkills.slice(0,6).map(({ word, images }) => (
          <Skill key={word} word={word} logo={images} />
        ))}
      </div>

      <h3 className="skills--title">Soft skills</h3>
      <div className="skills__logo__container">
        
        {dataSkills.slice(6,13).map(({ word, images }) => (
          <Skill key={word} word={word} logo={images} />
        ))}
      </div>
    </section>
  );
};

export default Skills;