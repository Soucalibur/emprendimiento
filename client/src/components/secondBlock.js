import Imagenes from "../css/img/imagenes"
import s from "../css/index.css"

const Servicios = ()=>{

    const show_hide = (event)=>{
        const value = event.target.value.split(" ")
        const elementShowedFirst = document.getElementsByClassName(value[0])
        const elementDontShowItFirst = document.getElementsByClassName(value[1])
        const elementSecondBlockFirst = document.getElementsByClassName(value[2])
        console.log("elemento 2: ", value)
        if(elementShowedFirst[0].hidden === false){
            elementShowedFirst[0].className = "dontShowIt"
            elementDontShowItFirst[0].hidden = false
            elementDontShowItFirst[0].className = "showedSecond"
            elementSecondBlockFirst[0].className = "secondBlockSecond"
        }
        
    }

    return(
        <div className="secondBlockFirst" id="servicios">
            <div className="showedFirst">
                    <button onClick={show_hide}  value="showedFirst dontShowItFirst secondBlockFirst" className="buttonSecondBlock">
                    </button>
                    <h3 className="nombreBotonServicios">Servicios</h3>
                    <img src={Imagenes.imagenServicios} alt="imgserv" className="imgServiciosSecondBlock"></img>
                </div>
                <div className="dontShowItFirst" hidden>
                    <p id="showInfo"> informacion extra que deberia mostrarte u ocultarse a medida que se ven los demas</p>
                </div>
        </div>
    )
}

export default Servicios