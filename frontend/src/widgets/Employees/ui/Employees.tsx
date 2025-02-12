'use client'
import "./Employees.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import {FreeMode } from "swiper/modules";

import {Title} from "@/shared/ui/Title";
import {EmployeeCard} from "./EmployeeCard";
export const Employees = () => {
  return (
      <div className="employees">
        <Title>Сотрудники</Title>
        <div className="employees__list">
            <Swiper
                spaceBetween={40}
                modules={[FreeMode]}
                freeMode={true}
                slidesPerView="auto"
            >
                <SwiperSlide style={{ width: "auto" }}>
                    <EmployeeCard/>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                    <EmployeeCard/>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                    <EmployeeCard/>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                    <EmployeeCard/>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                    <EmployeeCard/>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                    <EmployeeCard/>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                    <EmployeeCard/>
                </SwiperSlide>
                <SwiperSlide style={{ width: "auto" }}>
                    <EmployeeCard/>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>

  );
};

