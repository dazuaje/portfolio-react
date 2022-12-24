import React from 'react'
const Skill = ({word, logo}) => {
    return (
        <div className="skills__logo__card__wrapper">
            <div className="skills__logo__card">
                <img className="skills__logo" src={logo} alt={logo.toString()} />
                <h5 className="skills--description">{word}</h5>
            </div>
        </div>
    )
}

export default Skill