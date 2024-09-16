import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from '../componentes/Header';
import '../Css/normalize.css';
import '../Css/style-cvonline.css';
import postman from '../assets/img/postman-icon.png';
import jira from '../assets/img/jira-icon.png';
import selenium from '../assets/img/selenium-icon.png';
import jmeter from '../assets/img/jmeter-icon.png';
import vscode from '../assets/img/vscode-icon.jpg';
import azure from '../assets/img/azure-icon.png';
import mysql from '../assets/img/mysql-icon.png';
import mindhub from '../assets/img/mindhub-icon.png';
import argentinaprograma from '../assets/img/argentinaprograma-icon.png';
import mongo from '../assets/img/mongo-icon.png';
import react from '../assets/img/react-icon.png';
import node from '../assets/img/node-icon.png';
import java from '../assets/img/java-icon.png';
import eclipse from '../assets/img/eclipse-icon.png';
import javascript from '../assets/img/js-icon.png';
import junit from '../assets/img/junit-icon.png';
import sql from '../assets/img/sql-icon.png';
import educacionit from '../assets/img/educacionit-icon.png';
import coursera from '../assets/img/coursera-icon.png';
import google from '../assets/img/google-icon.png';
import udemy from '../assets/img/udemy-icon.png';
import platzi from '../assets/img/platzi-icon.png';
import egg from '../assets/img/egg-icon.png';
import oracle from '../assets/img/oracle-icon.png';
import cisco from '../assets/img/cisco-icon.png';
import me from '../assets/img/me-icon2.png';
import englandFlag from '../assets/img/england.webp';
import argentinaFlag from '../assets/img/argentina.webp';
import Chart from 'chart.js/auto';
import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl'; //importamos los formateadores



function CvOnline() {
  useEffect(() => {
    // Datos del gráfico
    const data = {
      labels: ['Creatividad', 'Objetividad', 'Efectividad', 'Organización', 'Liderazgo', 'Autonomía'],
      datasets: [
        {
          label: 'Habilidades',
          data: [20, 19, 18, 17, 20, 14],
          backgroundColor: 'green',
          borderColor: 'black',
        },
      ],
    };

    // Opciones del gráfico
    const options = {
      indexAxis: 'y',
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            display: true
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    };




    const ctx = document.getElementById('Chart-softhabilities').getContext('2d');
    const previousChart = Chart.getChart(ctx); // Obtener la instancia del gráfico anterior

    if (previousChart) {
      // Si hay un gráfico previo, destruirlo antes de crear uno nuevo
      previousChart.destroy();
    }

    // Crear el nuevo gráfico
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }, []);
  
  
  return (
    <>
        <Header />
      <div className='cv-contenedor'>    
      <div className="cv">

        {/* Portada */}
          <div className="container-content">
            <article>
              <img src={me} alt="herramientas programacion" className="img-principal" />
              <div className="content-square">
                <div className="content-circle"></div>
                <h2 id="content-title">
                <FormattedMessage id="cv.title" defaultMessage={" Developer | QA "}/>
                </h2>
              </div>
              <h1 className="principal-title">
              <FormattedMessage id="cv.subtitle" defaultMessage={" ¡Hi, I am Julian Molineris! "}/>
              </h1>
              <div className="contact">
                <h1 className="contact-title">
                <FormattedMessage id="cv.contact" defaultMessage={" Contact "}/>
                </h1>
                <ul className="contact-list">
                  <li>
                    <FontAwesomeIcon icon={faPhone} id="phone-ico" />
                    <a className="contact-url" href="#">
                      +54 (341) 2527-455
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} id="mail-ico" />
                    <a className="contact-url" href="#">
                      molinerisjulian@gmail.com
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAddressBook} id="link-ico" />
                    <a className="contact-url" href="#">
                      in/julianmolineris/
                    </a>
                  </li>
                </ul>
              </div>
              <div className="container-aside">
                <aside>
                  <h2 className='habilities-maintitle'>
                  <FormattedMessage id="cv.abilities" defaultMessage={" Abilities "}/>
                  </h2>
                  <div className="color-habilities">
                    <br />
                    <div className="habilities-container wrap">
                      <div className="box-habilities">
                        <h2 className="habilities-title">MERN Stack</h2>
                      </div>
                      <div className="box-habilities">
                        <h2 className="habilities-title">
                        <FormattedMessage id="cv.abilities.item" defaultMessage={" Project management "}/>
                         </h2>
                      </div>
                      <div className="box-habilities">
                        <h2 className="habilities-title">
                        <FormattedMessage id="cv.abilities.item1" defaultMessage={" Databases "}/>
                        </h2>
                      </div>
                      <div className="box-habilities">
                        <h2 className="habilities-title">
                          <FormattedMessage id="cv.abilities.item2" defaultMessage={" Manual/Automation testing "}/>
                         </h2>
                      </div>
                    </div>
                    <br />
                    <button onClick={() => {}} className='button-education'>
                    <FormattedMessage id="cv.button1" defaultMessage={" See more "}/>
                    </button>
                    <div className="espacio1"></div>
                  </div>
                </aside>
                <div className="graphycs">
                <canvas id="Chart-softhabilities"></canvas>
              </div>
                <h2 className="language-title">
                <FormattedMessage id="cv.languagues" defaultMessage={"Languages"}/>
                </h2>
                <div className="color-habilities">
                  <br />
                  <div className="habilities-container wrap">
                    <div className="box-language">
                      <img src={englandFlag} alt="imagen de bandera ing" className="language-image" />
                      <h2 className="language-subtitle">     
                    <FormattedMessage id="cv.languagues.eng" defaultMessage={"Intermediate"}/>
                    <br /> 
                    <FormattedMessage id="cv.languagues.eng1" defaultMessage={"English"}/>
                    (B2)</h2>
                    </div>
                    <div className="box-language">
                      <img src={argentinaFlag} alt="imagen de bandera arg" className="language-image" />
                      <h2 className="language-subtitle">   
                      <FormattedMessage id="cv.languagues.esp" defaultMessage={" Native "}/>
                      <br /> 
                      <FormattedMessage id="cv.languagues.esp1" defaultMessage={"Spanish"}/>
                      (AR)</h2>
                    </div>
                  </div>
                  <br />
                  <div className="espacio1"></div>
                </div>
              </div>
              <aside>
                <h2>
                  <FormattedMessage id="cv.tools" defaultMessage={"Tools"}/>
                </h2>
                <div className="herramientas-color">
                  <br />
                  <div className="flexbox-container wrap">
                    <div className="herramientas-box">
                      <img src={postman} alt="imagen herramientas" className="herramientas-img" />
                      <h2 className="herramientas-title">POSTMAN</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={jira} alt="imagen herramientas 2" className="herramientas-img" />
                      <h2 className="herramientas-title">JIRA</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={selenium} alt="imagen herramientas tres" className="herramientas-img" />
                      <h2 className="herramientas-title">SELENIUM</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={jmeter} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">JMETER</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={vscode} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">VS CODE</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={azure} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">AZURE</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={mysql} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">MySQL</h2>
                    </div> 
                    <div className="herramientas-box">
                      <img src={mongo} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">MONGODB</h2>
                    </div>
                     <div className="herramientas-box">
                      <img src={eclipse} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">ECLIPSE IDE</h2>
                    </div> 
                  </div>
                  <br />
                  <a href="#">
                    <button id='btn-leermas2'>
                    <FormattedMessage id="cv.button1" defaultMessage={"See more"}/>
                    </button>
                  </a>
                  <div className="espacio1"></div>
                </div>
              </aside>
              <aside>
                <h2>
                <FormattedMessage id="cv.frameworks" defaultMessage={"Languages and frameworks"}/>
                </h2>
                <div className="herramientas-color">
                  <br />
                  <div className="flexbox-container wrap">
                    <div className="herramientas-box">
                      <img src={node} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">NODE</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={react} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">REACT.JS</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={java} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">JAVA</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={javascript} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">JAVASCRIPT</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={junit} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">JUNIT</h2>
                    </div>
                    <div className="herramientas-box">
                      <img src={sql} alt="herramientas programacion" className="herramientas-img" />
                      <h2 className="herramientas-title">SQL</h2>
                    </div>
                  </div>
                  <br />
                  <a href="#">
                    <button id='btn-leermas2'>
                    <FormattedMessage id="cv.button1" defaultMessage={"See more"}/>
                    </button>
                  </a>
                  <div className="espacio1"></div>
                </div>
              </aside>
            </article>
            
            <div className="container-aside">
              <aside>
                <h2 id="perfil-uniq">
                <FormattedMessage id="cv.profile" defaultMessage={"Profile"}/>
                </h2>
                <div className="color-perfil">
                  <br />
                  <p>
                  <FormattedMessage id="cv.profile.txt" defaultMessage={"I am a young professional with a strong background in both soft and technical skills. My goal is to work in a company that provides me with the opportunity to share my knowledge while receiving training to enhance and optimize my abilities."}/>
                  </p>
                  <br />
                  <button onClick={() => {}} className='button-perfil'>
                  <FormattedMessage id="See more" defaultMessage={"See more"}/>
                  </button>
                  <div className="espacio1"></div>
                </div>
              </aside>
              <aside>
                <h2 className='educacion-maintitle'>
                <FormattedMessage id="cv.education" defaultMessage={"Education"}/>
                </h2>
                <div className="color-educacion">
                  <br />
                  <div className="flexbox-container wrap">
                    <div className="box">
                      <img src={educacionit} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                     
                      <FormattedMessage id="cv.education.item.title" defaultMessage={"EDUCACION IT"}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item.subtitle" defaultMessage={"Profile"}/>
                        </p>
                    </div>
                    <div className="box ">
                      <img src={coursera} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item1.title" defaultMessage={"COURSERA"}/>
                        </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item1.subtitle" defaultMessage={"Testing funcional de software."}/>
                      </p>
                    </div>
                    <div className="box ">
                      <img src={google} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item2.title" defaultMessage={"COURSERA"}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item2.subtitle" defaultMessage={"Soporte en tecnologías de información."}/>
                      </p>
                    </div>
                    <div className="box ">
                      <img src={udemy} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item3.title" defaultMessage={" UDEMY "}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item3.subtitle" defaultMessage={"   Bases de datos relacionales MYSQL. "}/>
                      </p>
                    </div>
                    <div className="box ">
                      <img src={platzi} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item4.title" defaultMessage={" PLATZI "}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item4.subtitle" defaultMessage={" Desarrollo de aplicaciones MERN. "}/>
                       </p>
                    </div>
                    <div className="box ">
                      <img src={egg} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item5.title" defaultMessage={" EGG COOP. "}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item5.subtitle" defaultMessage={" Testing QA , manual y Automation. "}/>
                        </p>
                    </div>
                    <div className="box ">
                      <img src={oracle} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item6.title" defaultMessage={" ONE - ORACLE "}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item6.subtitle" defaultMessage={" Desarrollo web (HTML, CSS y JS) "}/>
                      </p>
                    </div>
                    <div className="box ">
                      <img src={cisco} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item7.title" defaultMessage={" CISCO "}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item7.subtitle" defaultMessage={" Certificación en ciberseguridad. "}/>
                      </p>
                    </div>
                    <div className="box ">
                      <img src={mindhub} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item8.title" defaultMessage={" MINDHUB "}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item8.subtitle" defaultMessage={" Bootcamp de desarrollo web. "}/>
                      </p>
                    </div>
                    <div className="box ">
                      <img src={argentinaprograma} alt="herramientas programacion" className="img-education" />
                      <h2 className="education-title">
                      <FormattedMessage id="cv.education.item9.title" defaultMessage={" ARG. PROGRAMA "}/>
                      </h2>
                      <p className="education-text">
                      <FormattedMessage id="cv.education.item9.subtitle" defaultMessage={" Full Stack Developer. "}/>
                      </p>
                    </div>
                  </div>
                  <br />
                  <a href="#">
                  <button onClick={() => {}} className='button-education'>
                  <FormattedMessage id="cv.button1" defaultMessage={" See more "}/>
                  </button>
                  </a>
                  <div className="espacio1"></div>
                </div>
              </aside>
              
            </div>
          </div>
          <aside>
                <h2 className='experiencia'>
                <FormattedMessage id="cv.experience" defaultMessage={" Experience "}/>
                </h2>
                <div className="exp-color">
                  <br />
                  <div className="flexbox-container wrap">
                    <div className="exp-box">
                      <h2 className="exp-title">
                      <FormattedMessage id="cv.experience.title" defaultMessage={" uTest - Ciclos de prueba. "}/>
                      </h2>
                      <p className="exp-text1">
                      <FormattedMessage id="cv.experience.subtitle" defaultMessage={" Realizar diferentes ciclos de prueba para variadas tiendas e-commerce diseñando y ejecutando casos de prueba y elaborando reportes de bugs. "}/>
                      </p>
                    </div>
                    <div className="exp-box">
                      <h2 className="exp-title">
                      <FormattedMessage id="cv.experience.title1" defaultMessage={"  BrandMonkey (Emprendimiento) - Desarrollo web "}/>
                      </h2>
                      <p className="exp-text2">
                      <FormattedMessage id="cv.experience.subtitle1" defaultMessage={"Desarrollo de diferentes sitios web adaptados a medida según las necesidades de los clientes."}/>
                      <br/><br/> 
                     <FormattedMessage id="cv.experience.subtitle2" defaultMessage={"PORTAFOLIO: julianmolineris.com"}/>
                      </p>
                    </div>
                  </div>
                  <br />
                  <a href="#">
                    <button id='btn-leermas'>
                    <FormattedMessage id="cv.button1" defaultMessage={" See more "}/>
                    </button>
                  </a>
                  <div className="espacio1"></div>
                </div>
              </aside>
          <div className="container-footer">
            <footer>
              <div className="logo-footer">
              </div>
              <div className="redes-footer">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} className="icon-redes-footer" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faGooglePlusG} className="icon-redes-footer" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="icon-redes-footer" />
                </a>
              </div>
              <hr />
              <h4>
                © <FormattedMessage id="cv.right" defaultMessage={"2023 Julian Molineris - Todos los Derechos Reservados  "}/>
              </h4>
            </footer>
          </div>
        </div>
      </div>
</>
  );
}

export default CvOnline;
