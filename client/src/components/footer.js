import Imagenes from "../css/img/imagenes"
import s from "../css/footer.css"
import ModalMatthew from "../helper/modals/modalMatthew"
import ModalTobias from "../helper/modals/modalTobias"
import ModalYasmin from "../helper/modals/modalYas"

const Footer = () =>{


    const showModal = (event)=>{
        event.preventDefault()
        const idModal = event.target.value
        const elemento = document.getElementById(idModal)
        elemento.style.animationName = "fadeIn"
        elemento.style.display = "grid"

    }

    return(
        <div className="fourthBlock">
            <div className="titleFooter">
                <h3 >EQUIPO</h3>
            </div>
            
            
            <ModalMatthew></ModalMatthew>
            <ModalTobias></ModalTobias>
            <ModalYasmin></ModalYasmin>
            
            
               
                <div className="cartasFooter">
                    <div className="cartaPresentacionFooter">
                        
                            <img src={Imagenes.tarjetaDesarrolloWeb} alt="imgprueba" className="imgCPF"></img>
                        
                        <div className="títuloCPF">
                            <h3>Desarrollo Web</h3>
                        </div>
                        <div className="subtituloCPF">
                            <h4>Matthew Gallar</h4>
                        </div>
                        <div className="informacionCPF">

                        <button onClick={showModal} value="modalMatthew" className="botonFooterAbrirModal">Más información</button>

                        </div>
                    </div>

                    <div className="cartaPresentacionFooter">

                        <img src={Imagenes.tarjetaMarketing} alt="imgprueba" className="imgCPF"></img>
                        
                        <div className="títuloCPF">
                            <h3>Marketing y Publicidad</h3>
                        </div>
                        
                        <div className="subtituloCPF">
                            <h4>Tobías Porcel</h4>
                        </div>

                        <div className="informacionCPF">

                        <button onClick={showModal} value="modalTobias" className="botonFooterAbrirModal">Más información</button>
                           
                        </div>
                    </div>

                    <div className="cartaPresentacionFooter">

                        <img src={Imagenes.tarjetaFotografia} alt="imgprueba" className="imgCPF"></img>
                        
                        <div className="títuloCPF">
                            <h3>Fotografía</h3>
                        </div>
                        
                        <div className="subtituloCPF">
                            <h4>Yasmin Zavaroni</h4>
                        </div>

                        <div className="informacionCPF">

                        <button onClick={showModal} value="modalYasmin" className="botonFooterAbrirModal">Más información</button>
                            
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Footer