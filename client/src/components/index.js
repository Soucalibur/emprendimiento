import s from "../css/index.css"
import Navbar from "./navbar"
import LenisFunction from "../helper/lenis"
import Slider from "../helper/carousel"
import ContactUsForm from "../helper/contactUsForm"
import SecondBlock from "./secondBlock"
import FourthBlock from "./fourthBlock"
import WspLink from "../helper/wspLink"

const Index = ()=>{

    LenisFunction()

    
    return(
        <div className="containerIndex" >
            <Navbar/>
            <Slider/>
            <SecondBlock/>
            <ContactUsForm/>
            <FourthBlock/>
            <WspLink/>
        </div>
    )
}

export default Index