import s from "../../css/modal.css"
import Imagenes from "../../css/img/imagenes"
import ImagenesModals from "../../helper/img/imgModals/imagenesModals"
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
                
                {/* Div izquiero */}
                <div className="divIzquierdoModal">
                    <div className="tituloModal">
                        <h3>TOBÍAS PORCEL</h3>
                    </div>
                    
                    <div className="containerImgModal">
                        <img src={ImagenesModals.imagenTobias} alt="imgMatt" className="imgModal"></img>
                    </div>
                </div>

                {/* ----------------- */}

                {/* Div derecho */}
                <div className="divDerechoModal">
                    <div className="informacionModal infAdicionalTobias">
                        <p> 
                        Soy un joven estudiante, trabajador y soñador en la constante búsqueda de la excelencia.
                        <br/>
                        Me encanta la comunicación, el como ver y escuchar algo nos puede generar distintas emociones y sensaciones. 
                        <br/>
                        Me enfoco principalmente en las relaciones sociales. 
                        <br/>
                        Creo firmemente que el éxito de una marca se relaciona con la interacción que esta tiene con su público, sobre todo en el accionar e influencia que aplica en su comunidad.
                        <br/>
                        <br/>
                        "Aprender es como remar contra corriente; en cuanto se deja de avanzar, se retrocede".
                        </p>
                        <br/>
                    </div>
                    <div className="introduccionModal">
                        <h3>Tecnologías</h3>
                        <p>Línea de programas de Adobe - Redes sociales</p>
                        <h3>Habilidades</h3>
                        <p>Habilidades sociales - Pensamiento creativo - Organizado </p>

                    </div>
                </div>

                {/* --------------------- */}
                
            </div>
        </div>
    )
}

export default ModalTobias