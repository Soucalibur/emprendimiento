import s from "../css/navbar.css"
import Imagenes from "../css/img/imagenes";

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ()=>{

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    }
    
    const showLinks = () =>{
        const modalMenuPhone =  document.getElementsByClassName("modalMenuPhone")
        modalMenuPhone[0].style.opacity = 1
        modalMenuPhone[0].style.transition = "1s"
        modalMenuPhone[0].style.animationName = "fadeIn"
        modalMenuPhone[0].style.display = "flex"
    }

    const disappearLinks = ()=>{
        const modalMenuPhone =  document.getElementsByClassName("modalMenuPhone")
        console.log(modalMenuPhone[0].style)
        modalMenuPhone[0].style.opacity = 0
        modalMenuPhone[0].style.transition = "1s"
        setTimeout(() => {
            modalMenuPhone[0].style.display = "none"
        }, 1000);
    }

    return(
        <div className="positionNavbar">
            <div className="containerNavbar" >
                <div  onClick={scrollToTop}>
                    <img src={Imagenes.logoContactPoint} alt="imglogo" className="imgNavbar"></img>
                </div>
                <div className="navegators">
                    <Link 
                        to="sobreNosotros"
                        smooth="easeInOutQuart"
                        duration="1200"
                        spy={true}
                        activeClass="active"
                        offset={-64}
                        >
                        <p>Quienes somos</p>
                    </Link>
                </div>
                <div className="navegators">
                    <Link 
                        to="servicios"
                        smooth="easeInOutQuart"
                        duration="1200"
                        spy={true}
                        activeClass= "active"
                        offset={-64}
                        >
                        <p>Servicios</p>
                    </Link>
                    
                </div>
                <div className="navegators">
                    <Link 
                        to="contacto"
                        smooth="easeInOutQuart"
                        duration="1200"
                        spy={true}
                        activeClass="active"
                        offset={-64}
                        >
                        <p>Contacto</p>
                    </Link>
                </div>
                {/* ---------------------------------------------- */}
                <div className="navegatorPhone">
                    <p onClick={showLinks}>☰</p>
                </div>

                {/* --------------------------------------------- */}
                <div className="modalMenuPhone">
                    <div className="navegators" >
                        <Link 
                            to="sobreNosotros"
                            smooth="easeInOutQuart"
                            duration="1200"
                            spy={true}
                            activeClass="active"
                            offset={-64}
                            onClick={disappearLinks}
                            >
                            <p>Quienes somos</p>
                        </Link>
                    </div>
                    <div className="navegators">
                        <Link 
                            to="servicios"
                            smooth="easeInOutQuart"
                            duration="1200"
                            spy={true}
                            activeClass= "active"
                            offset={-64}
                            onClick={disappearLinks}
                            >
                            <p>Servicios</p>
                        </Link>
                        
                    </div>
                    <div className="navegators">
                        <Link 
                            to="contacto"
                            smooth="easeInOutQuart"
                            duration="1200"
                            spy={true}
                            activeClass="active"
                            offset={-64}
                            onClick={disappearLinks}
                            >
                            <p>Contacto</p>
                        </Link>
                    </div>
                </div>
                {/* --------------------------------------------- */}
            </div>
        </div>
    )
}

export default Navbar