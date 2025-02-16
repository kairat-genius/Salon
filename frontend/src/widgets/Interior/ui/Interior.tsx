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
        <div id="about" className="interior">
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
                    breakpoints={{
                        320: {
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 0,
                                modifier: 1,
                                slideShadows: true,
                            },
                            spaceBetween: 0,
                            slidesPerView: 3,
                        },

                        // Настройки для экранов шириной от 768px до 1024px
                        768: {
                            coverflowEffect: {
                                rotate: 20,
                                stretch: -50,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            },
                            spaceBetween: 90,
                            slidesPerView: 3,
                        },
                        1024: {
                            coverflowEffect: {
                                rotate: 20,
                                stretch: -50,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            },
                            spaceBetween: 90,
                            slidesPerView: 3,
                        },

                    }}
                    initialSlide={1}
                >
                    {[...Array(15)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <Image src={`/img/interior/${index + 1}.jpg`} className="interior-img" alt={`Интерьер Mon Plaisir ${index + 1}`} width={500} height={500}/>
                    </SwiperSlide>
                    ))}
                </Swiper>
                <Arrow styleClass="swiper-button-prev"/>
                <Arrow styleClass="swiper-button-next"/>
            </div>
        </div>
    );
};
