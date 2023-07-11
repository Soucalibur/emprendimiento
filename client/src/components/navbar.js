import s from "../css/navbar.css"
import Imagenes from "../css/img/imagenes";

import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";

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

   
    useEffect(() => {
        const handleScroll = () => {
          const position = window.pageYOffset;
          const navbar = document.getElementById("navbar")
          if (position > 30) {
            console.log(position, "es mayor a cero")
            // navbar.style.background = "rgba(100, 100, 100,0.95)"
            navbar.style.background = "rgb(18, 18, 18)"
            // navbar.style.boxShadow = "0 4px 10px rgba(255,255,255,0.7)"
            navbar.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.1)"
            
            navbar.style.height = "9vh"
          } if(position < 30) {
            console.log(position, "es menor a cero");
            navbar.style.background = "none";
            navbar.style.boxShadow = "none"
            navbar.style.height = "7vh"
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <div className="positionNavbar" >
            <div className="containerNavbar" id="navbar">
                <div className="div1Navbar">
                    <div  onClick={scrollToTop}>
                        <img src={Imagenes.logoContactPoint} alt="imglogo" className="imgNavbar"></img>
                    </div>
                </div>
                <div className="div2Navbar">
                    
                        <Link 
                            to="sobreNosotros"
                            smooth="easeInOutQuart"
                            duration= {1200}
                            spy={true}
                            activeClass="active"
                            offset={-55}
                            className="navegators"
                            >
                            <p>Quienes somos</p>
                        </Link>
                    
                        <Link 
                            to="servicios"
                            smooth="easeInOutQuart"
                            duration= {1200}
                            spy={true}
                            activeClass= "active"
                            offset={-55}
                            className="navegators"
                            >
                            <p>Servicios</p>
                        </Link>
                        
                        <Link 
                            to="equipo"
                            smooth="easeInOutQuart"
                            duration= {1200}
                            spy={true}
                            activeClass="active"
                            offset={-55}
                            className="navegators"
                            >
                            <p>Equipo</p>
                        </Link>

                        <Link 
                            to="contacto"
                            smooth="easeInOutQuart"
                            duration= {1200}
                            spy={true}
                            activeClass="active"
                            offset={-55}
                            className="navegators"
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