import s from "../css/navbar.css"
import Imagenes from "../css/img/imagenes";

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ()=>{

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    }
    let showOrHide = 0
    const showLinks = () =>{
        
        if(showOrHide === 0){
            const modalMenuPhone =  document.getElementsByClassName("modalMenuPhone")
            modalMenuPhone[0].style.opacity = 1
            modalMenuPhone[0].style.transition = "0.5s"
            modalMenuPhone[0].style.animationName = "fadeIn"
            modalMenuPhone[0].style.display = "flex"
            showOrHide = 1
        }
        else if(showOrHide === 1){
            disappearLinks()
            showOrHide = 0
        }
    }

    const disappearLinks = ()=>{
        const modalMenuPhone =  document.getElementsByClassName("modalMenuPhone")
        modalMenuPhone[0].style.opacity = 0
        modalMenuPhone[0].style.transition = "0.5s"
        setTimeout(() => {
            modalMenuPhone[0].style.display = "none"
        }, 490);
    }

    return(
        <div className="positionNavbar">
            <div className="containerNavbar" >
                <div className="div1Navbar">
                    <div  onClick={scrollToTop}>
                        <img src={Imagenes.logoContactPoint} alt="imglogo" className="imgNavbar"></img>
                    </div>
                </div>
                <div className="div2Navbar">
                    <div className="navegators">
                        <Link 
                            to="sobreNosotros"
                            smooth="easeInOutQuart"
                            duration= {1200}
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
                            duration= {1200}
                            spy={true}
                            activeClass= "active"
                            offset={-64}
                            >
                            <p>Servicios</p>
                        </Link>
                        
                    </div>
                    <div className="navegators">
                        <Link 
                            to="equipo"
                            smooth="easeInOutQuart"
                            duration= {1200}
                            spy={true}
                            activeClass="active"
                            offset={-64}
                            >
                            <p>Equipo</p>
                        </Link>
                    </div>

                    <div className="navegators">
                        <Link 
                            to="contacto"
                            smooth="easeInOutQuart"
                            duration= {1200}
                            spy={true}
                            activeClass="active"
                            offset={-64}
                            >
                            <p>Contacto</p>
                        </Link>
                    </div>
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
                            duration= {1200}
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
                            duration= {1200}
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
                            to="equipo"
                            smooth="easeInOutQuart"
                            duration= {1200}
                            spy={true}
                            activeClass="active"
                            offset={-64}
                            onClick={disappearLinks}
                            >
                            <p>Equipo</p>
                        </Link>
                    </div>
                    <div className="navegators">
                        <Link 
                            to="contacto"
                            smooth="easeInOutQuart"
                            duration= {1200}
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