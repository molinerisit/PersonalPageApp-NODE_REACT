import React, { useState } from 'react';
// Importa useNavigate en lugar de useHistory
import { useNavigate } from 'react-router-dom';
import '../Css/normalize.css';
import '../Css/Home.css';
import Header from '../componentes/Header';
import { IntlProvider, FormattedMessage } from 'react-intl'; //importamos los formateadores


function Home() {
  // Reemplaza useHistory por useNavigate
  const navigate = useNavigate();

  const redirectToContact = () => {
    // Usa navigate en lugar de history.push
    navigate('/contact');
  };

  return (
    <div className="Home">
      <Header />
      <div className="container-all" id="move-content">
        <div className="espacio"></div>
        <main className="text-home">
          <section className="txt-main">
            <div className="texto-inicio">
            <h1 className="main-title">
            <FormattedMessage id="home.title" defaultMessage={"Hi, I am "}/><strong className="main-title-jm">Julian Molineris</strong>.</h1>
              <p className="subtitulo"><FormattedMessage id="home.subtitle" defaultMessage={"I'm a web developer."}/></p>
              <div className="btn">
                <button className="btn-redireccion" onClick={redirectToContact}> 
                <FormattedMessage id="home.button" defaultMessage={"WORK WITH ME!"}/></button>
              </div>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default Home;
