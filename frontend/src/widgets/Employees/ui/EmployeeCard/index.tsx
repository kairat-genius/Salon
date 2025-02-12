import "./EmployeeCard.css"
import Image from "next/image";

export const EmployeeCard = () => {
    return (
        <div className="employee-card">
            <img className="employee-card__image" src="/img/employee/image0.png"/>
            <div className="employee-card__content">
                <div className="employee-card__wrap">
                    <div className="employee-card__name">Имя какого - то работника: ФИО</div>
                    <div className="employee-card__text">Профессия сотрудника</div>
                </div>
                <div className="employee-card__wrap">
                    <div className="employee-card__contact-item">
                        <Image className="employee-card__icon" src="/img/employee/ic-outline-mail0.svg" width={20} height={20} alt=""/>
                        <div className="employee-card__text">sotrudnik@gmail.com</div>
                    </div>
                    <div className="employee-card__contact-item">
                        <Image className="employee-card__icon" src="/img/employee/call0.svg" width={20} height={20} alt=""/>
                        <div className="employee-card__text">+996(555)55-55</div>
                    </div>
                </div>
            </div>
        </div>

    );
};
