import s from "../../css/modal.css"
import Imagenes from "../../css/img/imagenes"

const ModalMatthew = ()=>{

    const closeModal = (event)=>{
        event.preventDefault()
        const idModal = event.target.value
        const elementoCerrar = document.getElementById(idModal)
        elementoCerrar.style.display = "none"
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
                    <img src={Imagenes.tarjetaDesarrolloWeb} alt="imgMatt" className="imgModal"></img>
                </div>
                <div className="informacionModal">
                    <p> 
                        Desarrollador Fullstack con experiencia trabajando en Javascript, React, Redux, entre otras
                        tecnologías, entusiasmado por fortalecer mi pasión por la programación y emocionado por
                        encontrar nuevos desafíos donde pueda aportar valor desde mi experiencia y conocimientos
                        adquiridos. 
                    </p>
                    <p>
                        Fui colíder de creación de un E-commerce para la compra y venta de productos en la región
                        Latam, permitiéndome mejorar mis habilidades tecnológicas y socioemocionales tales como
                        trabajo en equipo, análisis, resolución de problemas, empatía, mente abierta, perseverancia,
                        responsabilidad, entre otras.
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
                <div>
                    <button onClick={closeModal} value="modalMatthew" className="botonCerrarModal">X</button>
                </div>
            </div>
        </div>
    )
}

export default ModalMatthew