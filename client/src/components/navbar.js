import s from "../css/navbar.css"
import Imagenes from "../css/img/imagenes";

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ()=>{

    const scrollToTop = () => {
        scroll.scrollToTop(); 
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
            </div>
        </div>
    )
}

export default Navbar