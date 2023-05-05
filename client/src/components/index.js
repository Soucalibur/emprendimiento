import Navbar from "./navbar"
import Slider from "../helper/carousel"
import SobreNosotros from "./sobreNosotros"
import Servicios from "./servicios"
import ContactUsForm from "../helper/contactUsForm"
import Footer from "./footer"

import s from "../css/index.css"
import LenisFunction from "../helper/lenis"
import WspLink from "../helper/wspLink"
import Imagenes from "../css/img/imagenes"
import { useEffect } from "react"

const Index = ()=>{

    LenisFunction()

    useEffect(()=>{
        setTimeout(() => {
            const primerDiv = document.getElementById("primerDiv")
            primerDiv.style.display = "none"
            const segundoDiv = document.getElementById("segundoDiv")
            segundoDiv.hidden = false
            segundoDiv.className = "containerIndex"
        }, 3000);
    },[])
    // window.onload = ()=>{
    //     window.alert("ENTROOOO")
    //     const primerDiv = document.getElementById("primerDiv")
    //     primerDiv.style.display = "none"
    //     window.alert("PASOOOO")
    //     const segundoDiv = document.getElementById("segundoDiv")
    //     segundoDiv.hidden = false
    //     segundoDiv.className = "containerIndex"
    //     window.alert("TERMINOOOO")
    // }
    return(
        <div>
            <div id="primerDiv">
                <img src={Imagenes.logoContactPoint} alt="logoContactPoint" className="imgLoading"></img>
            </div>
            <div id="segundoDiv" hidden={true}>
                <Navbar/>
                <Slider/>
                <SobreNosotros/>
                <Servicios/>
                <Footer/>
                <ContactUsForm/>
                <WspLink/>
            </div>
        </div>
    )
}

export default Index