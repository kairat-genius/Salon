'use client'
import "./Employees.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import {FreeMode, Navigation } from "swiper/modules";
import {Title} from "@/shared/ui/Title";
import {EmployeeCard} from "./EmployeeCard";
import {StaffType} from "@/interface";
import {Arrow} from "@/shared/ui/Arrow";
import "swiper/css/navigation";

interface EmployeesProps {
    staff: StaffType[];
}

export const Employees: React.FC<EmployeesProps> = ({ staff }) => {
  return (
      <div className="employees">
        <Title>Сотрудники</Title>
        <div className="employees__list">
            <Swiper
                spaceBetween={40}
                modules={[FreeMode, Navigation]}
                freeMode={true}
                slidesPerView="auto"
                grabCursor={true}
                navigation={{
                    prevEl: ".employees-prev",
                    nextEl: ".employees-next",
                }}
            >
                {staff.map((data) => (
                <SwiperSlide style={{ width: "auto" }} key={data.id}>
                    <EmployeeCard employee={data}/>
                </SwiperSlide>
                ))}
            </Swiper>
            <Arrow styleClass="swiper-button-prev employees-prev"/>
            <Arrow styleClass="swiper-button-next employees-next"/>
        </div>
      </div>

  );
};

