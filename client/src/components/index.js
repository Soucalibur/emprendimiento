import s from "../css/index.css"
import Navbar from "./navbar"
import LenisFunction from "../helper/lenis"
import Slider from "../helper/carousel"

const Index = ()=>{

    LenisFunction()
    
    return(
        <div className="containerIndex" >
            <div className="positionNavbar">
                <Navbar></Navbar>
            </div>
            <div className="firstBlock" id="nosotros">
                <Slider></Slider>

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