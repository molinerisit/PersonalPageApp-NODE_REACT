Personal Page - Aplicación web personal


Instrucciones para ejecutar la aplicación:
1. **Instalación de Dependencias**:
 Para ejecutar esta aplicación, es necesario tener Node.js instalado. Luego de clonar o descargar
el repositorio, abre una terminal en la carpeta raíz del proyecto y ejecuta el siguiente comando para
instalar todas las dependencias:
 ```
 npm install
 ```
2. **Ejecución del Proyecto**:
 Para iniciar el servidor de desarrollo y ver la aplicación en el navegador, ejecuta el siguiente
comando:
 ```
 npm start
 ```
 El proyecto se ejecutará en el puerto predeterminado, generalmente en `http://localhost:3000`.

3. **Navegación**:
 Las principales rutas de la aplicación incluyen:
 - `/`: Página de inicio
 - `/portfolio`: Portafolio
 - `/resume`: Currículum Vitae
 - `/contact`: Contacto
 - `/cvonline`: Currículum Online
 - `/roadmap`: Hoja de Ruta

 La aplicación también cuenta con navegación a través de un componente `Header` que permite
moverse entre las páginas de forma intuitiva.

4. **Contexto de Idioma**:
 La aplicación está preparada para manejar múltiples idiomas utilizando `react-intl`. Aunque
actualmente los archivos de mensajes de traducción no están incluidos en el código, puedes añadir
archivos de traducción y utilizar el `IntlProvider` para manejar diferentes idiomas.

5. **Dependencias Principales**:
 La aplicación hace uso de varias bibliotecas de terceros, entre ellas:
 - `react-router-dom`: Para la gestión de rutas.
 - `react-intl`: Para la internacionalización.
 - `chart.js` y `react-chartjs-2`: Para la generación de gráficos.
 - `materialize-css`: Para el diseño de interfaz de usuario.
 - `styled-components`: Para estilizar componentes de forma dinámica.

6. **Estructura del Proyecto**:
 El proyecto está organizado de la siguiente manera:
 - **`/pages`**: Contiene los componentes de las diferentes páginas como Home, Portfolio, Contact, Resume, etc.
 - **`/componentes`**: Contiene componentes reutilizables como el Header.
 - **`/context`**: Contiene el contexto de idioma (LangContext) que se utiliza para cambiar entre
idiomas en la aplicación.

 Además, el archivo `App.js` define las rutas y la estructura principal de la aplicación.

7. **Scripts Disponibles**:
 - `npm start`: Inicia la aplicación en modo desarrollo.
 - `npm run build`: Genera una versión optimizada para producción.
 - `npm test`: Ejecuta las pruebas definidas en el proyecto.

 Versión: 1.0.0

Créditos
Autor: Julian Molineris

