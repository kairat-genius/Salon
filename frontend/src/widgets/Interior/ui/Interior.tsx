"use client"

import "./Interior.css"
import {Title} from "@/shared/ui/Title";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import {Navigation, EffectCoverflow} from "swiper/modules";
import Image from "next/image";
import {Arrow} from "@/widgets/Interior/ui/Arrow";

export const Interior = () => {

    return (
        <div className="interior">
            <Title>Интерьер</Title>
            <div className="interior-list">
                <Swiper
                    effect={'coverflow'}
                    centeredSlides={true}
                    spaceBetween={90}
                    loop
                    modules={[Navigation, EffectCoverflow]}
                    slidesPerView={3}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    grabCursor={true}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: -50,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    initialSlide={1}
                >
                    <SwiperSlide>
                        <Image src="/image.png" className="interior-img" alt="" width={500} height={500}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/image.png" className="interior-img" alt="" width={500} height={500}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/image.png" className="interior-img" alt="" width={500} height={500}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/image.png" className="interior-img" alt="" width={500} height={500}/>
                    </SwiperSlide>
                </Swiper>
                <Arrow styleClass="swiper-button-prev"/>
                <Arrow styleClass="swiper-button-next"/>
            </div>
        </div>
    );
};
