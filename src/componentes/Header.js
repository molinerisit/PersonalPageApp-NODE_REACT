import React, { useContext, useState } from 'react';
import { langContext } from '../context/LangContext';
import '../Css/menu.css';
import '../Css/normalize.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faFileAlt, faHeadset, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Ico/logo.png';
import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl';
// Importa las imágenes para los botones
import imageButton1 from '../assets/Ico/english-icon.png';
import imageButton2 from '../assets/Ico/spanish-icon.png';

function Header() {
  const idioma = useContext(langContext); // Usa el hook useContext con langContext
  console.log(idioma.establecerLenguaje);
  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className={showMenu ? 'menu show-lateral' : 'menu'} id="show-menu">
          <nav className="navbar-right">
            <ul>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} className="faicon" /> 
                  <FormattedMessage id="menu.home" defaultMessage={"Home"}/>
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <FontAwesomeIcon icon={faBriefcase} className="faicon" />
                  <FormattedMessage id="menu.portfolio" defaultMessage={"Portfolio"}/>
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <FontAwesomeIcon icon={faFileAlt} className="faicon" />
                  <FormattedMessage id="menu.resume" defaultMessage={"Resume"}/>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FontAwesomeIcon icon={faHeadset} className="faicon" />
                  <FormattedMessage id="menu.contact" defaultMessage={"Contact"}/>
                </Link>
              </li>

              <li>
    {/* Mueve los botones aquí, dentro del mismo div que contiene el menú */}
          <div className='buttons-container'>
          <button className="custom-button" onClick={() => idioma.establecerLenguaje('en-US')}>
      <img src={imageButton1} alt="Button 1" />
    </button>
    <button className="custom-button" onClick={() => idioma.establecerLenguaje('es-AR')}>
      <img src={imageButton2} alt="Button 2" />
    </button>
            </div>
          {/* Fin de los botones */}
              </li>
            </ul>
          </nav>
          
        </div>
      </div>
      <div id="icon-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="linea"></div>
    </header>
  );
}

export default Header;
