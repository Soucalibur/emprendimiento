import Imagenes from "../css/img/imagenes"
import s from "../css/servicios.css"

const Servicios = ()=>{

    const show_hide = (event)=>{
        const value = event.target.value.split(" ")
        const elementShowedFirst = document.getElementsByClassName(value[0])
        const elementDontShowItFirst = document.getElementsByClassName(value[1])
        const elementSecondBlockFirst = document.getElementsByClassName(value[2])
        const elementoNombreBotonServicios = document.getElementById(value[3])
        const anchoPantalla = window.screen.width
        if(elementShowedFirst[0].hidden === false){
            // elementShowedFirst[0].className = "dontShowIt"
            // elementDontShowItFirst[0].className = "showedSecond"
            // elementSecondBlockFirst[0].className = "secondBlockSecond"
            // document.getElementsByClassName("nombreSegundoBotonServicios")[0].hidden = false
            // elementoNombreBotonServicios.style.display = "none"
            elementShowedFirst[0].style.opacity = 0
            elementShowedFirst[0].style.transition = "0.8s"
            
            if(anchoPantalla > 1727){
                elementSecondBlockFirst[0].style.paddingBottom = "15.8em"
            }
            else{
                elementSecondBlockFirst[0].style.paddingBottom = "50em"
            }
            setTimeout(() => {
                elementSecondBlockFirst[0].style.paddingBottom = 0
                elementShowedFirst[0].style.display = "none"
                elementDontShowItFirst[0].style.display = "flex"

                elementSecondBlockFirst[0].classList.add("secondBlockSecond")
                elementSecondBlockFirst[0].classList.remove("secondBlockFirst")
                
                document.getElementsByClassName("nombreSegundoBotonServicios")[0].hidden = false
                elementoNombreBotonServicios.style.display = "none"
            }, 1000);
            
        }
        
    }

    return(
        <div className="secondBlockFirst" id="servicios">

            <div className="showedFirst">
                <h3 className="nombreBotonServicios">SERVICIOS</h3>
                <button onClick={show_hide}  value="showedFirst showedSecond secondBlockFirst botonServicios" className="buttonSecondBlock" id="botonServicios"></button>
                <img src={Imagenes.imagenServicios} alt="imgserv" className="imgServiciosSecondBlock"></img>
            </div>

            <div className="nombreSegundoBotonServicios" hidden>
                <h3>SERVICIOS</h3>
            </div>

            <div className="showedSecond" hidden>
            
                <div className="MarketingServicios">
                    <img src={Imagenes.tarjetaMarketing} alt="imgprueba" className="imgServicios"></img>
                    <div className="títuloServicios">
                        <h3>Marketing</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Promoción de campañas</h4>
                        <h4>Posicionamiento de marcas</h4>
                        <h4>Estrategias de comercialización</h4>
                    </div>
                </div>

                <div className="PublicidadServicios">
                    <img src={Imagenes.tarjetaPublicidad} alt="imgprueba" className="imgServicios"></img>
                    <div className="títuloServicios">
                        <h3>Publicidad</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Creación de contenido</h4>
                        <h4>Gestión de redes sociales</h4>
                        <h4>Publicidad en redes sociales</h4>
                    </div>
                </div>

                <div className="DiseñoGráficoServicios">
                    <img src={Imagenes.tarjetaDiseñoGrafico} alt="imgprueba" className="imgServicios"></img>
                    <div className="títuloServicios">
                        <h3>Diseño Gráfico</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Diseño de logotipos</h4>
                        <h4>Diseños publicitarios</h4>
                        <h4>Diseños de cartelería, flyers</h4>
                    </div>
                </div>

                <div className="FotografíaVideoServicios">
                    <img src={Imagenes.tarjetaFotografia} alt="imgprueba" className="imgServicios"></img>
                    <div className="títuloServicios">
                        <h3>Fotografía</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Sesiones de fotos</h4>
                        <h4>Fotografía de eventos</h4>
                        <h4>Fotografía publicitaria</h4>
                    </div>
                </div>

                <div className="DesarrolloWebServicios">
                    <img src={Imagenes.tarjetaDesarrolloWeb} alt="imgprueba" className="imgServicios"></img>
                    <div className="títuloServicios">
                        <h3>Desarrollo Web</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Desarrollo de páginas web:</h4>
                        <h4>Estáticas, Autoadministrables,</h4>
                        <h4>Con catálogo de productos, </h4>
                        <h4>E-Commerce</h4>
                        <h4>Mantenimiento y service</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios