import ImagenesCarrusel from "./imagesCarousel";
import s from "../css/slider.css"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Pagination, Navigation } from "swiper";

const Slider = ()=>{


    return(
        
            <div className="firstBlock" id="nosotros">
                 <Swiper
                    slidesPerView={1}
                    // spaceBetween={0}
                    loop={true}
                    speed={1000}
                    pagination={{
                    clickable: true,
                    }}
                    // autoplay={{
                    //     delay: 3500,
                    //     disableOnInteraction: false,
                    //   }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
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