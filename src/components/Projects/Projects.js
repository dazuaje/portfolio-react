import React from "react";
import "./Projects.scss";
import images from "../../helpers/images";
import Project from "../Project/Project";

import financeTracker from "../../Assets/financeTracker.png"
import aiudaaApp from "../../Assets/aiudaaApp.png";
import shoesShop from "../../Assets/shoesShop.png";
import passwordGenerator from "../../Assets/passwordGenerator.png";

const { htmlLogo, cssLogo, jsLogo, sassLogo, reactLogo, materialUI} = images;

const Projects = () => {
    return (
        <section className="projects">
                <h4 className="projects--title">Projects</h4>
            <div className="projects__container">
                {/*
           */}
                <Project
                    mainImage={shoesShop}
                    title="Shoes Shop"
                    description="Shoes shop Ecommerce final project Solvd Intership with team. "
                    demo="https://shoes-shop-main.vercel.app/"
                    github="https://github.com/emiacerbi/shoes-shop"
                    technologies={[materialUI, reactLogo]}
                />

                <Project
                    mainImage={aiudaaApp}
                    title="Aiudaa App"
                    description="Freelance project landing page for writing services"
                    demo="https://aiudaasite.netlify.app/"
                    github="https://github.com/dazuaje/Aiudaa-Landing-page"
                    technologies={[htmlLogo, cssLogo, jsLogo]}
                />

                <Project
                    mainImage={financeTracker}
                    title="Finance Tracker"
                    description="Website to help users with the management of their personal finances with a intuitive graph"
                    demo="https://financetrackerpescar.netlify.app"
                    github="https://github.com/ghmex/financeTracker"
                    technologies={[htmlLogo, sassLogo, jsLogo]}
                />

                <Project
                    mainImage={passwordGenerator}
                    title="Password Generator"
                    description="Is a tool that automatically generates a password based on guidelines that you set to create strong passwords. "
                    demo="https://generatorpasswordavidazuaje.netlify.app/"
                    github="https://github.com/dazuaje/generatorPassword"
                    technologies={[htmlLogo, cssLogo, jsLogo]}
                />
            </div>
        </section>
    );
};

export default Projects;