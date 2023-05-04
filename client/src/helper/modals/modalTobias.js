import s from "../../css/modal.css"
import Imagenes from "../../css/img/imagenes"
const ModalTobias = ()=>{

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
        <div className="firstContainerModal" id="modalTobias">
            <div className="backgroundModalClose" >
                <button onClick={closeModal} value="modalTobias" className="buttonBackgroundModal"></button>
            </div>
            <div>
                <button onClick={closeModal} value="modalTobias" className="botonCerrarModal">X</button>
            </div>
            <div className="containerModal">
                
                <div className="tituloModal">
                    <h3>TOBÍAS PORCEL</h3>
                </div>
                <div className="closeAnyWay">

                </div>
                <div className="containerImgModal">
                    <img src={Imagenes.tarjetaDesarrolloWeb} alt="imgMatt" className="imgModal"></img>
                </div>
                <div className="informacionModal">
                    <p> 
                    Soy un joven estudiante, trabajador y soñador. En la constante búsqueda de la excelencia. Me encanta la comunicación, el como ver y escuchar algo nos puede generar distintas emociones y sensaciones. 

"Aprender es como remar contra corriente; en cuanto se deja de avanzar, se retrocede".

Me enfoco principalmente en las relaciones sociales. Creo firmemente que el éxito de una marca se relaciona con la interacción que esta tiene con su público. En el accionar e influencia que aplica en su comunidad.


Habilidades

Habilidades sociales - Pensamiento creativo - Organizado 

Tecnologías

Línea de programas de Adobe - Redes sociales
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

export default ModalTobias