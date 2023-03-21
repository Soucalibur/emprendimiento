import Imagenes from "../css/img/imagenes"
import s from "../css/index.css"

const FourthBlock = () =>{

    return(
        <div className="fourthBlock">
                <h3 className="titleFooter">Contact Point</h3>
                <div className="footerDW">
                    
                    <p style={{"padding":"10px"}}>Desarrollo web </p>
                    <p>Matthew Gallar</p>
                    
                    <div className="containerLogosFooter">
                        <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer">
                            <img className="imgLogo" src={Imagenes.logoLinkedIn} alt="linkedinimg"></img>
                        </a>
                        <a href="https://github.com/Soucalibur" target="_blank" rel="noopener noreferrer" >
                            <img className="imgLogo" src={Imagenes.logoGithub} alt="githubimg"></img>
                        </a>
                        <a href="https://portfolio-pbhoz3dhf-soucalibur.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className="imgLogo" src={Imagenes.logoPortfolio} alt="githubimg"></img>
                        </a>
                    </div>
                </div>
                <div className="footerMP">


                    <p style={{"padding":"10px"}}>Marketing y publicidad </p>
                    <p>Tobias Porcel</p>


                    <div className="containerLogosFooter">
                        <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer">
                            <img className="imgLogo" src={Imagenes.logoLinkedIn} alt="linkedinimg"></img>
                        </a>
                        <a href="https://portfolio-pbhoz3dhf-soucalibur.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className="imgLogo" src={Imagenes.logoInstagram} alt="githubimg"></img>
                        </a>
                    </div>
                    

                </div>
            </div>
    )
}

export default FourthBlock