import s from "../css/index.css"
import Navbar from "./navbar"
import LenisFunction from "../helper/lenis"
import Slider from "../helper/carousel"
import Imagenes from "../css/img/imagenes"
import ContactUsForm from "../helper/contactUsForm"
import { Link } from "react-scroll"

const Index = ()=>{

    LenisFunction()

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
        <div className="containerIndex" >
            <div className="positionNavbar">
                <Navbar></Navbar>
            </div>

            <div className="firstBlock" id="nosotros">
                <Slider></Slider>

            </div>

            <div className="secondBlockFirst" >
                <div className="showedFirst">
                    <button onClick={show_hide}  value="showedFirst dontShowItFirst secondBlockFirst" className="buttonSecondBlock">Servicios</button>
                    <img src={Imagenes.imagenServicios} alt="imgserv" className="imgServiciosSecondBlock"></img>
                </div>
                <div className="dontShowItFirst" hidden>
                    <p id="showInfo"> informacion extra que deberia mostrarte u ocultarse a medida que se ven los demas</p>
                </div>
            </div>

            <div className="thirdBlock"  id="contacto" >
                <div>
                    <ContactUsForm></ContactUsForm>
                </div>
            </div>
            
            <div className="fourthBlock">
                <h3 className="titleFooter">Contact Point</h3>
                <div className="footerDW">
                    
                    <p style={{"padding":"10px"}}>Desarrollo web </p>
                    <p>Matthew Gallar</p>
                    
                    <div className="containerLogosFooter">
                        <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer">
                            <img className="imgLogo" src={Imagenes.logoLinkedIn} alt="linkedinimg"></img>
                        </a>
                        <a href="https://github.com/Soucalibur" target="_blank" rel="noopener noreferrer" >
                            <img className="imgLogo" src={Imagenes.logoGithub} alt="githubimg"></img>
                        </a>
                        <a href="https://portfolio-pbhoz3dhf-soucalibur.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className="imgLogo" src={Imagenes.logoPortfolio} alt="githubimg"></img>
                        </a>
                    </div>
                </div>
                <div className="footerMP">


                    <p style={{"padding":"10px"}}>Marketing y publicidad </p>
                    <p>Tobias Porcel</p>


                    <div className="containerLogosFooter">
                        <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer">
                            <img className="imgLogo" src={Imagenes.logoLinkedIn} alt="linkedinimg"></img>
                        </a>
                        <a href="https://portfolio-pbhoz3dhf-soucalibur.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className="imgLogo" src={Imagenes.logoInstagram} alt="githubimg"></img>
                        </a>
                    </div>
                    

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