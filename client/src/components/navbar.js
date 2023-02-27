import s from "../css/navbar.css"

const Navbar = ()=>{

    return(
        <div className="containerNavbar">
            <div>
                <p>Imagen del logo</p>
            </div>
            <div>
                <a href="#nosotros" className="navegators">Quienes somos</a> 
            </div>
            <div>
                <a href="#servicios" className="navegators">Servicios</a> 
            </div>
            <div>
                <a href="#contacto" className="navegators">Contactenos</a> 
            </div>
        </div>
    )
}

export default Navbar