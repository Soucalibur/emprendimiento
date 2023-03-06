import s from "../css/navbar.css"
import Imagenes from "../css/img/imagenes";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ()=>{

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    }
    

    return(
        <div className="containerNavbar" >
            <div  onClick={scrollToTop}>
                <img src={Imagenes.logoContactPoint} alt="imglogo" className="imgNavbar"></img>
            </div>
            <div className="navegators">
                <Link 
                    to="nosotros"
                    smooth="true"
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
                    smooth="true"
                    spy={true}
                    activeClass= "active"
                    offset={-64}>
                    <p>Servicios</p>
                </Link>
                
            </div>
            <div className="navegators">
                <Link 
                    to="contacto"
                    smooth="true"
                    spy={true}
                    activeClass="active"
                    offset={-64}>
                    <p>Contacto</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar