import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setOnToggle] = useState(false);
  const onToggle = () => {
    setOnToggle(!toggle);
  };
  const isToggle = toggle === true ? "active" : null;

  return (
    <nav className="nav">
      <ul className="nav__list">
        <h1 className="nav__item--logo">David Azuaje</h1>
        <div className={`nav__item__container ${isToggle}`}>
          <li className="nav__item">
            <div className="nav__item--anchor"> Home </div>
          </li>
          <li className="nav__item">
            <Link
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav__item--anchor"
            >
              {" "}
              About me{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="nav__item--anchor"
            >
              {" "}
              Skills{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav__item--anchor"
            >
              {" "}
              Project{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="contactMe"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav__item--anchor"
            >
              {" "}
              Contact{" "}
            </Link>
          </li>
        </div>
        <FaBars
          size={24}
          style={{ color: "#fff", cursor: "pointer" }}
          className="burgerIcon"
          onClick={onToggle}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
