import "./EmployeeCard.css"
import {FC} from "react";
import Image from "next/image";
import {StaffType} from "@/interface";
import { formatExperience } from "@/shared/utils/formatters";

interface EmployeeCardProps {
    employee: StaffType;
}

export const EmployeeCard: FC<EmployeeCardProps> = ({ employee }) => {
    return (
        <div className="employee-card">
            <Image className="employee-card__image" src={`${process.env.NEXT_PUBLIC_API_URL}${employee.photo}`} width={362} height={507} alt={`Сотрудник Mon Plaisir ${employee.name}`}/>
            <div className="employee-card__content">
                <div className="employee-card__wrap">
                    <div className="employee-card__name">{employee.name}</div>
                    <div className="employee-card__text">{employee.specialization}</div>
                    <div className="employee-card__text">Стаж:&nbsp;{formatExperience(employee.experience)}</div>
                </div>
            </div>
        </div>
    );
};
