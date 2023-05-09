import s from "../../css/modal.css"
import Imagenes from "../../css/img/imagenes"
import ImagenesModals from "../img/imgModals/imagenesModals"

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
                
                {/* Div izquierd */}

                <div className="divIzquierdoModal">
                    <div className="tituloModal">
                        <h3>YASMIN ZAVARONI</h3>
                    </div>
                    <div className="closeAnyWay">

                    </div>
                    <div className="containerImgModal">
                        <img src={ImagenesModals.imagenYasmin} alt="imgMatt" className="imgModal"></img>
                    </div>
                </div>
                {/* --------------- */}

                {/* Div derecho */}
                <div className="divDerechoModal">
                    <div className="informacionModal">
                        <p> 
                        Mi nombre es Yas, soy fotógrafa. 
                        Me apasiona la fotografía y me mantengo en constante aprendizaje y crecimiento. 
                        <br/>
                        <br/>
                        A través de mi trabajo busco destacar productos y el funcionamiento de ellos, registrar momentos para que sean rememorados y dejen una huella. 
                        <br/>
                        <br/>
                        Considero que lo más importante de un producto o servicio, es la relación que se tiene con el cliente, la parte humana y eso es lo que transmito en mis fotografías. 
                        
                        </p>
                        <br/>
                        
                    </div>
                    <div className="introduccionModal infAdicionalYasmin">
                        <h3>Tecnologías</h3>
                        <p>Tecnología fotográfica, sonora, programas de Adobe y redes sociales.</p>
                        <h3>Habilidades</h3>
                        <p>Puntual - Perceptiva -  Trabajo en equipo </p>
                        
                    </div>
                </div>

                {/* ------------------ */}
                
            </div>
        </div>
    )
}

export default ModalYasmin