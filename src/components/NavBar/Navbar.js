import React, { useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const refBurger = useRef(null);

  const onToggleMenu = () => {
    refBurger.current.classList.toggle("active");
  };
  return (
    <nav className="nav">
      <ul className="nav__list">
        <h1 className="nav__item--logo">David Azuaje</h1>

        <div className="nav__item__container" ref={refBurger}>
          <li className="nav__item">
            <Link className="nav__item--anchor inicioLang"> Home </Link>
          </li>
          <li className="nav__item">
            <Link
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav__item--anchor sobreLang"
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
              className="nav__item--anchor habilidadesLang"
            >
              {" "}
              Skills{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__item--anchor proyectosLang"> Project </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__item--anchor contactLang"> Contact </Link>
          </li>
        </div>
        <FaBars
          size={24}
          style={{ color: "#fff", cursor: "pointer" }}
          className="burgerIcon"
          onClick={onToggleMenu}
        />
      </ul>
    </nav>
  );
};

export default Navbar;