import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";

const Project = ({
    mainImage,
    title,
    description,
    demo,
    github,
    technologies,
}) => {
    return (
        <div className="projects__container__card">
            <div className="projects__card__image__wrapper">
                <img className="projects__card--image" src={mainImage} alt={title} />
            </div>
            <h3 className="projects__card--title">{title}</h3>
            <p className="projects__card--p">{description}</p>

            <div className="projects__container__buttons">
                <div className="projects__buttons__wrapper gitContainer">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="projects__button--icon gitIcon"  />
                        <button className="projects--button gitBtn">Github</button>
                    </a>
                </div>

                <div className="projects__buttons__wrapper demo">
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        <MdVisibility className="projects__button--icon" />
                        <button className="projects--button">Demo</button>
                    </a>
                </div>
            </div>

            <div className="projects__container__technologies">
                {technologies.map((tech) => (
                    <img
                        key={tech}
                        className="projects__technologies--images"
                        src={tech}
                        alt={tech.toString()}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;
