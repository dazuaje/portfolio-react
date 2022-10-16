import React from 'react'
import './Skills.scss';
// Technologies images
import htmlLogo from '../../Assets/html.png';
import cssLogo from '../../Assets/css.png';
import jsLogo from '../../Assets/js.png';
import gitLogo from '../../Assets/git.png';
import sassLogo from '../../Assets/sass.png';
import reactLogo from '../../Assets/react.png';
// Soft skills images
import problemSolvingImage from '../../Assets/problemSolving.png';
import methodicalImage from '../../Assets/methodical.png';
import teamWorkImage from '../../Assets/teamwork.png';
import resilienceImage from '../../Assets/resilience.png';
import creativityImage from '../../Assets/creativity.png';
import communicationImage from '../../Assets/communication.png';



const Skills = () => {
    return (
        <section id="skills" className="skills">

            <h3 className="skills--title">Technologies Skills</h3>

            <div className="skills__logo__container">
                <div className="skills__logo__card">
                    <img className="skills__logo" src={htmlLogo} alt="htmlLogo" />
                    <h8 className="skills--description">HTML5</h8>
                </div>

                <div className="skills__logo__card">
                    <img className="skills__logo" src={cssLogo} alt="cssLogo" />
                    <h8 className="skills--description">CSS3</h8>
                </div>

                <div className="skills__logo__card">
                    <img className="skills__logo" src={jsLogo} alt="jsLogo" />
                    <h8 className="skills--description">JavaScript</h8>
                </div>

                <div className="skills__logo__card">
                    <img className="skills__logo" src={sassLogo} alt="sassLogo" />
                    <h8 className="skills--description">SASS</h8>
                </div>

                <div className="skills__logo__card">
                    <img className="skills__logo" src={gitLogo} alt="gitLogo" />
                    <h8 className="skills--description">Git</h8>
                </div>

                <div className="skills__logo__card">
                    <img className="skills__logo" src={reactLogo} alt="reactLogo" />
                    <h8 className="skills--description">React</h8>
                </div>
            </div>



            <h3 className="skills--title">Soft skills</h3>
            <div className="skills__logo__container">
                <div class="skills__logo__card">
                    <img src={problemSolvingImage} className="skills__logo" alt="problemSolvingImage" />
                    <h8 className="skills--description">Problem-Solving</h8>
                </div>
                <div className="skills__logo__card">
                    <img src={methodicalImage} className="skills__logo" alt="methodicalImage" />
                    <h8 className="skills--description">Methodical</h8>
                </div>
                <div className="skills__logo__card">
                    <img src={creativityImage} className="skills__logo" alt="creativityImage" />
                    <h8 className="skills--description">Creativity</h8>
                </div>
                <div className="skills__logo__card">
                    <img src={communicationImage} className="skills__logo" alt="communicationImage" />
                    <h8 className="skills--description">Communication</h8>
                </div>
                <div className="skills__logo__card">
                    <img src={teamWorkImage} className="skills__logo" alt="teamWorkImage" />
                    <h8 className="skills--description">Teamwork</h8>
                </div>
                <div className="skills__logo__card">
                    <img src={resilienceImage} className="skills__logo" alt="resilienceImage" />
                    <h8 className="skills--description">Resilience</h8>
                </div>
            </div>


        </section>

    )
}

export default Skills