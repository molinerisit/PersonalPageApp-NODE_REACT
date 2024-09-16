import React, { useState } from "react";
import Modal from "../componentes/Modal";
import "../Css/Contact.css";
import icoUser from "../assets/Ico/ico-user.png";
import icoTel from "../assets/Ico/ico-tel.png";
import icoInstagram from "../assets/Ico/ico-instagram.png";
import icoLinkedin from "../assets/Ico/ico-linkedin.png";
import icoGmail from "../assets/Ico/ico-gmail.png";
import icoTwitter from "../assets/Ico/ico-twitter.png";
import icoYoutube from "../assets/Ico/ico-youtube.png";
import icoWhatsapp from "../assets/Ico/ico-whatsapp.png";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  return (
    <div>
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
        <div className="Contenido">
          <div className="modal_llamar-content">
            <img src={icoUser} alt="" className="ico-user" />
            <div className="modal_botones-content">
              <h3 className="modal-txt">
                <FormattedMessage
                  id="contact.modal.label"
                  defaultMessage={"Call"}
                />
              </h3>
              <h3 className="modal-txt1">
                <FormattedMessage
                  id="contact.modal.label1"
                  defaultMessage={"Message"}
                />
              </h3>

              <a href="tel:+543412527455">
                <img src={icoTel} alt="" className="modal-icons" />
              </a>
              <a href="https://wa.me/+54543412527455?text=%C2%A1Hola%20Julian!">
                <img src={icoWhatsapp} alt="" className="modal-icons" />
              </a>
            </div>
          </div>
          <button
            onClick={() => cambiarEstadoModal1(!estadoModal1)}
            className="Boton-Aceptar"
          >
            <FormattedMessage
              id="contact.modal.button"
              defaultMessage={"Accept"}
            />
          </button>
        </div>
      </Modal>

      <Modal
        estado={estadoModal2}
        cambiarEstado={cambiarEstadoModal2}
        titulo="Hola"
      >
        <div className="Contenido">
          <div className="email-modal-content">
            <form
              className="form"
              action="https://formspree.io/f/xeqdwlbq"
              method="POST"
            >
              <label>
                <FormattedMessage
                  id="contact.modal.label2"
                  defaultMessage={"Your Email"}
                />
                <input type="email" name="_replyto" />
              </label>
              <label>
                <FormattedMessage
                  id="contact.modal.label3"
                  defaultMessage={"Your message"}
                />
                <textarea name="message"></textarea>
              </label>
              <button type="submit">
                <FormattedMessage
                  id="contact.modal.button1"
                  defaultMessage={"Send"}
                />
              </button>
            </form>
          </div>
          <button
            onClick={() => cambiarEstadoModal2(!estadoModal2)}
            className="Boton-Aceptar"
          >
            <FormattedMessage
              id="contact.modal.button"
              defaultMessage={"Accept"}
            />
          </button>
        </div>
      </Modal>

      <main className="main-contact">
        <div className="espacio-contact"></div>
        <div className="texto-uno">
          <h2 className="titulo-cel">
            <FormattedMessage
              id="contact.title"
              defaultMessage={"Julian's phone"}
            />
          </h2>
        </div>
        <div className="contenedor-contact">
          <div className="imagen-cel">
            <div className="btn-container" id="img-cel">
              <div className="boton-item">
                <a onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                  <img className="btn-red" src={icoTel} alt="" />
                </a>
                <p className="nombre">
                  <FormattedMessage
                    id="contact.element.tel"
                    defaultMessage={"Telephone"}
                  />
                </p>
              </div>
              <div className="boton-item">
                <a
                  href="https://www.instagram.com/julianmolineris/"
                  target="_blank"
                >
                  <img className="btn-red" src={icoInstagram} alt="" />
                </a>
                <p className="nombre">Instagram</p>
              </div>
              <div className="boton-item">
                <a
                  href="https://www.linkedin.com/in/julianmolineris/"
                  target="_blank"
                >
                  <img className="btn-red" src={icoLinkedin} alt="" />
                </a>
                <p className="nombre">Linkedin</p>
              </div>
              <div className="boton-item">
                <a onClick={() => cambiarEstadoModal2(!estadoModal2)}>
                  <img className="btn-red" src={icoGmail} alt="" />
                </a>
                <p className="nombre">
                  <FormattedMessage
                    id="contact.element.email"
                    defaultMessage={"Email"}
                  />
                </p>
              </div>
              <div className="boton-item">
                <a href="https://www.twitter.com" target="_blank">
                  <img className="btn-red" src={icoTwitter} alt="" />
                </a>
                <p className="nombre">Twitter</p>
              </div>
              <div className="boton-item">
                <a href="https://www.youtube.com" target="_blank">
                  <img className="btn-red" src={icoYoutube} alt="" />
                </a>
                <p className="nombre">Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
