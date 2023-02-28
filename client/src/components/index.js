import s from "../css/index.css"
import Navbar from "./navbar"
import Lenis from '@studio-freight/lenis'

const Index = ()=>{

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })
      
      //get scroll value
      lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        console.log({ scroll, limit, velocity, direction, progress })
      })
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)

    return(
        <div className="containerIndex" >
            <div className="positionNavbar">
                <Navbar></Navbar>
            </div>
            <div className="firstBlock" id="nosotros">
                <h3>Nosotros</h3>
                <p>Acá puede ir información de la que sea necesaria</p>
            </div>
            <div className="secondBlock" id="servicios">
                <h3>Servicios</h3>
                <p>Mas informacion para agregar</p>
            </div>
            <div className="thirdBlock"  id="contacto">
                <h3>Contactenos</h3>
                <p>Mas informacion para agregar</p>
            </div>
            <div className="fourthBlock">
                <h3>Informacion de los que pertenecen a la página</h3>
            </div>
        </div>
    )
}

export default Index