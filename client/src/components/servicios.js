import Imagenes from "../css/img/imagenes"
import s from "../css/servicios.css"

const Servicios = ()=>{

    const show_hide = (event)=>{
        const value = event.target.value.split(" ")
        const elementShowedFirst = document.getElementsByClassName(value[0])
        const elementDontShowItFirst = document.getElementsByClassName(value[1])
        const elementSecondBlockFirst = document.getElementsByClassName(value[2])
        const elementoNombreBotonServicios = document.getElementsByClassName(value[3])

        if(elementShowedFirst[0].hidden === false){
            elementShowedFirst[0].className = "dontShowIt"
            elementDontShowItFirst[0].hidden = false
            elementDontShowItFirst[0].className = "showedSecond"
            elementSecondBlockFirst[0].className = "secondBlockSecond"
            elementoNombreBotonServicios[0].className = "nombreSegundoBotonServicios"
        }
        
    }

    return(
        <div className="secondBlockFirst" id="servicios">

            <div className="showedFirst">
                <button onClick={show_hide}  value="showedFirst dontShowItFirst secondBlockFirst nombreBotonServicios" className="buttonSecondBlock"></button>
                <img src={Imagenes.imagenServicios} alt="imgserv" className="imgServiciosSecondBlock"></img>
            </div>

            <h3 className="nombreBotonServicios">Servicios</h3>

            <div className="dontShowItFirst" hidden>

                <div className="MarketingServicios">
                    <div className="títuloServicios">
                        <h3>Marketing</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Promoción de campañas</h4>
                        <h4>Posicionamiento de marcas</h4>
                        <h4>Estrategias de comercialización</h4>
                    </div>
                    <img src={Imagenes.imagenServiciosPrueba} alt="imgprueba" className="imgServicios"></img>
                </div>

                <div className="PublicidadServicios">
                    <div className="títuloServicios">
                        <h3>Publicidad</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Creación de contenido</h4>
                        <h4>Gestión de redes sociales</h4>
                        <h4>Publicidad en redes sociales</h4>
                    </div>
                    <img src={Imagenes.imagenServiciosPrueba} alt="imgprueba" className="imgServicios"></img>
                </div>

                <div className="DiseñoGráficoServicios">
                    <div className="títuloServicios">
                        <h3>Diseño Gráfico</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Diseño de logotipos</h4>
                        <h4>Diseños publicitarios</h4>
                        <h4>Diseños de cartelería, flyers</h4>
                    </div>
                    <img src={Imagenes.imagenServiciosPrueba} alt="imgprueba" className="imgServicios"></img>
                </div>

                <div className="FotografíaVideoServicios">
                    <div className="títuloServicios">
                        <h3>Fotografía</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Sesiones de fotos</h4>
                        <h4>Fotografía de eventos</h4>
                        <h4>Fotografía publicitaria</h4>
                    </div>
                    <img src={Imagenes.imagenServiciosPrueba} alt="imgprueba" className="imgServicios"></img>
                </div>

                <div className="DesarrolloWebServicios">
                    <div className="títuloServicios">
                        <h3>Desarrollo Web</h3>
                    </div>
                    <div className="informacionServicios">
                        <h4>Diseño de páginas web estáticas y autoadministrables</h4>
                        <h4>Diseño de páginas web con catálogo de productos</h4>
                        <h4>Páginas E-Commerce</h4>
                        <h4>Mantenimiento y service</h4>
                    </div>
                    <img src={Imagenes.imagenServiciosPrueba} alt="imgprueba" className="imgServicios"></img>
                </div>
            </div>
        </div>
    )
}

export default Servicios