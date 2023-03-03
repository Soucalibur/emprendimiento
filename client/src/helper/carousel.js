import ImagenesCarrusel from "./imagesCarousel";
import s from "../css/slider.css"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Slider = ()=>{

    return(
       
            <div>
                 <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={ImagenesCarrusel[0].name} alt="img" /></SwiperSlide>
                    <SwiperSlide><img src={ImagenesCarrusel[1].name} alt="img2" /></SwiperSlide>
                    <SwiperSlide><img src={ImagenesCarrusel[2].name} alt="img3" /></SwiperSlide>
                    
                </Swiper>
                

            </div>
            
    )
}

export default Slider