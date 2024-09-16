import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header.js";
import "../Css/normalize.css";
import "../Css/About.css";
import ImagenYo from "../assets/img/ImagenYo.png";
import { IntlProvider, FormattedMessage, FormattedDate } from "react-intl"; //importamos los formateadores

function Resume() {
  const navigate = useNavigate();

  const redirectToCv = () => {
    navigate("/Cvonline");
  };

  const redirectToReadmap = () => {
    navigate("/Roadmap");
  };

  return (
    <div>
      <Header />
      <div className="espacio-resume"></div>
      <main>
        <div className="container-resume">
          <div className="div-resume">
            <img src={ImagenYo} alt="" className="img-resume" />
          </div>
          <div className="txt-resume">
            <h1 className="title-resume">Julian Molineris</h1>
            <h1 className="text-resume">
              <FormattedMessage
                id="resume.txt"
                defaultMessage={"Specialist in"}
              />
              <strong className="color"> Web developement <FormattedMessage  id="resume.y" defaultMessage={ "and"}/> testing QA </strong>
              ,
              <FormattedMessage
                id="resume.txt1"
                defaultMessage={
                  "with experience in diagnosing and repairing of"
                }
              />
              <strong className="color"> Hardware  <FormattedMessage
                id="resume.y"
                defaultMessage={
                  "and"
                }
              /> software </strong>
              <FormattedMessage
                id="resume.txt2"
                defaultMessage={
                  " in computer systems and networks. Additionally, I have strong skills as "
                }
              />
              <strong className="color"> Cibersecurity consultor </strong>
              <FormattedMessage
                id="resume.txt3"
                defaultMessage={
                  " My focus is on ensuring the security and efficiency of systems while creating functional and optimized websites. If you are looking for a reliable and proactive professional, I am here to assist you with your projects."
                }
              />
            </h1>
            <button
              className="btn-redireccion btn-Resume"
              onClick={redirectToCv}
            >
               <FormattedMessage
                id="resume.button"
                defaultMessage={
                  "View CV." }/>
            </button>
            <button
              className="btn-redireccion btn-Resume"
              onClick={redirectToReadmap}
            >
              <FormattedMessage
                id="resume.button1"
                defaultMessage={
                  "View roadmap." }/>
            </button>
          </div>
        </div>
        <div className="espacio-resume--footer"></div>
      </main>
    </div>
  );
}

export default Resume;
