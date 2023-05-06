import s from "../../css/modal.css"
import Imagenes from "../../css/img/imagenes"
import ImagenesModals from "../../helper/img/imgModals/imagenesModals"

const ModalMatthew = ()=>{

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
        <div className="firstContainerModal" id="modalMatthew">
            <div className="backgroundModalClose" >
                <button onClick={closeModal} value="modalMatthew" className="buttonBackgroundModal"></button>
            </div>
            <div className="containerModal">

                <div className="tituloModal">
                    <h3>MATTHEW GALLAR</h3>
                </div>
                <div className="closeAnyWay">

                </div>
                <div className="containerImgModal">
                    <img src={ImagenesModals.imagenMatthew} alt="imgMatt" className="imgModal"></img>
                </div>
                <div className="informacionModal infAdicionalMatthew tamañoTextoMatthew">
                Apasionado desarrollador web Fullstack con enfoque especializado en tecnologías clave como Javascript, React y PostgreSQL.
                <br/>
                Mi objetivo es ayudar a las personas a destacar en línea, creando soluciones web personalizadas, innovadoras, atractivas, interactivas y funcionales que brinden una experiencia de usuario excepcional y resalten su presencia en la web.
                <br/>
                <br/>
                Si buscas un desarrollador web Fullstack comprometido, entusiasta y orientado a resultados, estoy aquí para ayudarte a lograr tus objetivos en línea.
                <br/>
                Juntos, podemos crear una presencia web efectiva y exitosa.

                    
                    
                </div>
                <div className="introduccionModal posicionPersonalIntroduccionMatthew">
                    <h3>Tecnologías</h3>
                    <p>HTML, CSS, Javascript, React, Redux, Node.js, Express, Postgres, Sequelize, Python</p>
                    <h3>Habilidades</h3>
                    <p> Trabajo en equipo - análisis - resolución de problemas - empatía - mente abierta - perseverancia - responsabilidad</p>
                    <h3>Links de contactos</h3>
                    <div className="containerLogosFooter">
                                    <div>
                                        <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer">
                                            <img className="imgLogoModal" src={Imagenes.logoLinkedIn} alt="linkedinimg"></img>
                                        </a>
                                    </div>
                                    
                                    <div>
                                        <a href="https://github.com/Soucalibur" target="_blank" rel="noopener noreferrer" >
                                            <img className="imgLogoModal" src={Imagenes.logoGithub} alt="githubimg"></img>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="https://portfoliomattgallar.vercel.app/" target="_blank" rel="noopener noreferrer">
                                            <img className="imgLogoModal" src={Imagenes.logoPortfolio} alt="portfolioimg"></img>
                                        </a>
                                    </div>

        
                                </div>
                </div>
                <div>
                    <button onClick={closeModal} value="modalMatthew" className="botonCerrarModal">X</button>
                </div>
            </div>
        </div>
    )
}

export default ModalMatthew