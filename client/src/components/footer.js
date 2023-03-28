import Imagenes from "../css/img/imagenes"
import s from "../css/footer.css"

const Footer = () =>{

    return(
        <div className="fourthBlock">
            <div>
                <h3 className="titleFooter">Contact Point</h3>
            </div>
                {/* <div className="footerDW">
                    
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
                </div> */}
                
                {/* <div className="footerMP">


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
                    

                </div> */}
                <div className="cartasFooter">
                    <div className="cartaPresentacionFooter">
                        
                            <img src={Imagenes.tarjetaDesarrolloWeb} alt="imgprueba" className="imgCPF"></img>
                        
                        <div className="títuloCPF">
                            <h3>Desarrollo Web</h3>
                        </div>
                        <div className="informacionCPF">
                            <div className="containerLogosFooter">
                                <div>
                                    <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer">
                                        <img className="imgLogo" src={Imagenes.logoLinkedIn} alt="linkedinimg"></img>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://github.com/Soucalibur" target="_blank" rel="noopener noreferrer" >
                                        <img className="imgLogo" src={Imagenes.logoGithub} alt="githubimg"></img>
                                    </a>
                                </div>

                                <div>
                                    <a href="https://portfolio-pbhoz3dhf-soucalibur.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <img className="imgLogo" src={Imagenes.logoPortfolio} alt="githubimg"></img>
                                    </a>
                                </div>

                                <div>
                                    <a href="https://instagram.com/matthewgallardev?igshid=OTJhZDVkZWE=" target="_blank" rel="noopener noreferrer">
                                        <img className="imgLogo" src={Imagenes.logoInstagram} alt="githubimg"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cartaPresentacionFooter">

                        <img src={Imagenes.tarjetaMarketing} alt="imgprueba" className="imgCPF"></img>
                        
                        <div className="títuloCPF">
                            <h3>Marketing y Publicidad</h3>
                        </div>
                        <div className="informacionCPF">
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
                    </div>

                    <div className="cartaPresentacionFooter">

                        <img src={Imagenes.tarjetaFotografia} alt="imgprueba" className="imgCPF"></img>
                        
                        <div className="títuloCPF">
                            <h3>Fotografía</h3>
                        </div>
                        <div className="informacionCPF">
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
                    </div>

                </div>
            </div>
    )
}

export default Footer