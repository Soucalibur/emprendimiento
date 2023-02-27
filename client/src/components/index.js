import s from "../css/index.css"
import Navbar from "./navbar"

const Index = ()=>{

    return(
        <div className="containerIndex">
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
        </div>
    )
}

export default Index