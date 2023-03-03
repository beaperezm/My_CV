import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link'
import "./Header.scss";


function Header({ myInfo }) {

  const [hamburguer, setHamburguer] = useState(false);

  const handleClick = () => {
    setHamburguer(!hamburguer)
  }

  return (

    <>
      <div className="Header">
        <h1 className="Header__logo">Beatriz</h1>
        <ul className={`list ${hamburguer ? "isActive" : null}`}>
          <li className="list__contact">
            <Link className="link" smooth to="#">Inicio</Link>
          </li>

          <li className="list__about">
            <Link className="link" smooth to="#aboutme"> Sobre Mi</Link>
          </li>

          <li className="list__education">
            <Link className="link" smooth to="#education"> Formación</Link>
          </li>

          <li className="list__experience">
            <Link className="link" smooth to="#experience"> Experiencia</Link>
          </li>

          <li className="list__skills">
            <Link className="link" smooth to="#skills"> Competencias</Link>
          </li>


          <li className="list__portfolio">
            <Link className="link" smooth to="#portfolio"> Portfolio</Link>
          </li>

          <li className="list__contacto">
            <Link className="link" smooth to="#contact"> Contacto</Link>
          </li>
        </ul>
        <FaBars className="hamburguer" onClick={handleClick} />
      </div>
    </>
  );
}

export default Header;
