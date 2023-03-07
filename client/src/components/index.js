import s from "../css/index.css"
import Navbar from "./navbar"
import LenisFunction from "../helper/lenis"
import Slider from "../helper/carousel"
import Imagenes from "../css/img/imagenes"
import { Link } from "react-scroll"

const Index = ()=>{

    LenisFunction()

    const show_hide = (event)=>{
        const value = event.target.value.split(" ")
        console.log(value)
        const element = document.getElementById(value[0])
        console.log(element)
        const elemento2 = document.getElementsByClassName(value[1])
        console.log(elemento2)
        if(element.hidden === true){
            element.hidden = false
            elemento2[0].className = "prueba"
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
                <button onClick={show_hide}  value="showOrHide secondBlock">Mas informacion para agregar acaaaaa</button>
                <p id="showOrHide" hidden> informacion extra que deberia mostrarte u ocultarse a medida que se ven los demas</p>
            </div>

            <div className="thirdBlock"  id="contacto" >
                <h3>Contacto</h3>
                <button onClick={show_hide}  value="showOrHide2 thirdBlock">Mas informacion para agregar</button>
                <p id="showOrHide2" hidden>Quizas esto no sea necesario ocultarlo en una primera intancia pero ya se verá</p>
            </div>
            
            <div className="fourthBlock">
                <h3>Informacion de los que pertenecen a la página</h3>
                <div className="footerDW">
                    <div>
                        <p style={{"padding":"10px"}}>Desarrollo web </p>
                    </div>
                    <div>
                        <p>Matthew Gallar</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer">
                            <div className="imgLogoLinkedIn1"></div>
                        </a>
                    </div>
                </div>
                <div className="footerMP">

                    <p style={{"padding":"10px"}}>Marketing y publicidad </p>
                    <p>Tobias Porcel</p>
                    

                </div>
            </div>

            <div>
                <a href="https://wa.me/542613006290" target="_blank" rel="noopener noreferrer" >
                    <div className="imgLogoWsp"></div>
                </a>  
            </div>
                
        </div>
    )
}

export default Index