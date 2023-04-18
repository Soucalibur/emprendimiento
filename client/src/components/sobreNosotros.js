import s from "../css/sobreNosotros.css"
import Imagenes from "../css/img/imagenes"

const SobreNosotros = ()=>{

    const show_hide = (event)=>{
        const value = event.target.value.split(" ")
        const elementmostrarPrimeroSN = document.getElementsByClassName(value[0])
        const elementnoMostrarPrimeroSN = document.getElementsByClassName(value[1])
        const elementbloqueSobreNosotros = document.getElementsByClassName(value[2])
        const elementoTituloSN = document.getElementsByClassName(value[3])
        const elementoBoton = document.getElementsByClassName(value[4])
        
        if(elementmostrarPrimeroSN[0].hidden === false){
            elementmostrarPrimeroSN[0].className = "dontShowIt"
            elementnoMostrarPrimeroSN[0].className = "mostrarSegundoSN"
            elementbloqueSobreNosotros[0].className = "segundoBlockSN"
            elementnoMostrarPrimeroSN[0].hidden = false
            elementoTituloSN[0].className = "nombreSegundoBotonSN"
            elementoBoton[0].remove()
        }
        
    }

    return(
        <div className="bloqueSobreNosotros" id="sobreNosotros">

            <div className="mostrarPrimeroSN">
                <button onClick={show_hide}  value="mostrarPrimeroSN noMostrarPrimeroSN bloqueSobreNosotros tituloSN buttonSecondBlock" className="buttonSecondBlock"></button>
                <img src={Imagenes.imagenServicios} alt="imgserv" className="imgServiciosSecondBlock"></img>
            </div>
            <h3 className="tituloSN">SOBRE NOSOTROS</h3>
            <div className="noMostrarPrimeroSN" hidden>

                <p className="informacion"> 
                    Somos una agencia creativa dedicada a las comunicaciones y audiovisuales, destacándonos 
                    esencialmente en el seguimiento que le dedicamos a cada cliente hasta que el trabajo se concrete.
                    <br/>
                    <br/>
                    Brindamos distintas soluciones enfocadas a tus necesidades, donde nuestro principal 
                    objetivo es ofrecerte la mejor atención y al mejor precio. 
                </p>
            </div>      
        </div>
    )
}

export default SobreNosotros