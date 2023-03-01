import ImagenesCarrusel from "./imagesCarousel";
import s from "../css/slider.css"
import { useState } from "react";

const Slider = ()=>{

    const [number, setNumber] = useState(0)

    

    const nextImg = () =>{
        setNumber(number === ImagenesCarrusel.length - 1 ? 0 : number + 1)
    }
    const previewImg = ()=>{
        setNumber(number === 0 ? ImagenesCarrusel.length - 1 : number - 1)
    }

    if(ImagenesCarrusel.length === 0){
        return
    }

    return(
        <div className="containerImgSlider">
            
            <button onClick={previewImg}>⮘</button>
                {ImagenesCarrusel.map((img, index)=>{
                    return(
                        <div>
                            {index === number? <img src={img.name} alt="img" className="imgSlider"></img> : ""}
                        </div>
                    )
                })}
            <button onClick={nextImg}>⮚</button>
        </div>
    )
}

export default Slider