import s from "../css/index.css"
import Navbar from "./navbar"
import LenisFunction from "../helper/lenis"

const Index = ()=>{

    LenisFunction()
    
    return(
        <div className="containerIndex" >
            <div className="positionNavbar">
                <Navbar></Navbar>
            </div>
            <div className="firstBlock" id="nosotros">
                <h3>Nosotros</h3>
                <p>Acá puede ir información de la que sea necesaria</p>
            </div>
            <div className="secondBlock" id="servicios">
                <h3>Servicios</h3>
                <p>Mas informacion para agregar</p>
            </div>
            <div className="thirdBlock"  id="contacto">
                <h3>Contactenos</h3>
                <p>Mas informacion para agregar</p>
            </div>
            <div className="fourthBlock">
                <h3>Informacion de los que pertenecen a la página</h3>
            </div>
        </div>
    )
}

export default Index