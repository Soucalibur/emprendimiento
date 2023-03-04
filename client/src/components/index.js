import s from "../css/index.css"
import Navbar from "./navbar"
import LenisFunction from "../helper/lenis"
import Slider from "../helper/carousel"

const Index = ()=>{

    LenisFunction()

    const show_hide = (event)=>{
        const element = document.getElementById(event.target.value)
        console.log("ELEMENT: ",element.hidden)
        if(element.hidden === true){
            element.hidden = false
        }
        
    }
    
    return(
        <div className="containerIndex" >
            <div className="positionNavbar">
                <Navbar></Navbar>
            </div>
            <div className="firstBlock" id="nosotros">
                <Slider></Slider>

            </div>
            <div className="secondBlock" id="servicios" >
                <h3>Servicios</h3>
                <button onClick={show_hide}  value="showOrHide">Mas informacion para agregar acaaaaa</button>
                <p id="showOrHide" hidden> informacion extra que deberia mostrarte u ocultarse a medida que se ven los demas</p>
            </div>
            <div className="thirdBlock"  id="contacto" >
                <h3>Contactenos</h3>
                <button onClick={show_hide}  value="showOrHide2">Mas informacion para agregar</button>
                <p id="showOrHide2" hidden>Quizas esto no sea necesario ocultarlo en una primera intancia pero ya se verá</p>
            </div>
            <div className="fourthBlock">
                <h3>Informacion de los que pertenecen a la página</h3>
            </div>
        </div>
    )
}

export default Index