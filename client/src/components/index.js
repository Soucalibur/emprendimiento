import s from "../css/index.css"
import Navbar from "./navbar"
import LenisFunction from "../helper/lenis"
import Slider from "../helper/carousel"
import ContactUsForm from "../helper/contactUsForm"
import Servicios from "./secondBlock"
import Footer from "./fourthBlock"
import WspLink from "../helper/wspLink"
import Imagenes from "../css/img/imagenes"

const Index = ()=>{

    LenisFunction()

    window.onload = ()=>{
        const primerDiv = document.getElementById("primerDiv")
        primerDiv.style.display = "none"
        const segundoDiv = document.getElementById("segundoDiv")
        segundoDiv.hidden = false
        segundoDiv.className = "containerIndex"
    }

    return(
        <div>
            <div id="primerDiv">
                <img src={Imagenes.logoContactPoint} alt="logoContactPoint" className="imgLoading"></img>
            </div>
            <div id="segundoDiv" hidden={true}>
                <Navbar/>
                <Slider/>
                <Servicios/>
                <ContactUsForm/>
                <Footer/>
                <WspLink/>
            </div>
        </div>
    )
}

export default Index