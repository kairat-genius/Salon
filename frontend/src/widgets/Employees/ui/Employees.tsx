'use client'
import "./Employees.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import {FreeMode } from "swiper/modules";
import {Title} from "@/shared/ui/Title";
import {EmployeeCard} from "./EmployeeCard";
import {StaffType} from "@/interface";

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
                modules={[FreeMode]}
                freeMode={true}
                slidesPerView="auto"
                grabCursor={true}
            >
                {staff.map((data) => (
                <SwiperSlide style={{ width: "auto" }} key={data.id}>
                    <EmployeeCard employee={data}/>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>

  );
};

