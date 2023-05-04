import s from "../../css/modal.css"
import Imagenes from "../../css/img/imagenes"
const ModalYasmin = ()=>{

    const closeModal = (event)=>{
        event.preventDefault()
        const idModal = event.target.value
        const elementoCerrar = document.getElementById(idModal)
        elementoCerrar.style.animationName = "fadeOut"
        setTimeout(() => {
            elementoCerrar.style.display = "none"
        }, 250);
    }

    return(
        <div className="firstContainerModal" id="modalYasmin">
            <div className="backgroundModalClose" >
                <button onClick={closeModal} value="modalYasmin" className="buttonBackgroundModal"></button>
            </div>
            <div>
                <button onClick={closeModal} value="modalYasmin" className="botonCerrarModal">X</button>
            </div>
            <div className="containerModal">
                
                <div className="tituloModal">
                    <h3>YASMIN ZAVARONI</h3>
                </div>
                <div className="closeAnyWay">

                </div>
                <div className="containerImgModal">
                    <img src={Imagenes.tarjetaDesarrolloWeb} alt="imgMatt" className="imgModal"></img>
                </div>
                <div className="informacionModal">
                    <p> 
                    Mi nombre es Yas, soy fotógrafa. 
Me apasiona la fotografía y me mantengo en constante aprendizaje y crecimiento. 

A través de mi trabajo busco destacar productos y el funcionamiento de ellos, registrar momentos para que sean rememorados y dejen una huella. 

Considero que lo más importante de un producto o servicio, es la relación que se tiene con el cliente, la parte humana y eso es lo que transmito en mis fotografías. 

Habilidades 

Puntual - Perceptiva -  Trabajo en equipo  

Tecnología fotográfica, sonora, programas de Adobe y redes sociales.
                    </p>
                    <br/>
                    <p>
                       
                    </p>
                </div>
                <div className="introduccionModal">
                    <h3>Tecnologías</h3>
                    <p>HTML, CSS, Javascript, React, Redux, Node.js, Express, Postgres, Sequelize, Python</p>
                    <h3>Links de contactos</h3>
                    <div className="containerLogosFooter">
                        <div>
                            <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer">
                                <img className="imgLogo" src={Imagenes.logoLinkedIn} alt="linkedinimg"></img>
                            </a>
                        </div>
                        
                        <div>
                            <a href="https://github.com/Soucalibur" target="_blank" rel="noopener noreferrer" >
                                <img className="imgLogo" src={Imagenes.logoGithub} alt="githubimg"></img>
                            </a>
                        </div>

                        <div>
                            <a href="https://portfolio-pbhoz3dhf-soucalibur.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <img className="imgLogo" src={Imagenes.logoPortfolio} alt="portfolioimg"></img>
                            </a>
                        </div>


                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ModalYasmin