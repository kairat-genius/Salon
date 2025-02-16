import "./Contact.css";
import {Button} from "@/shared/ui/Button";
import Image from "next/image";

export const Contact = () => {
    return (
        <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-location">
                        <Image className="location-image" src="/map/image-20.png" width={80} height={80} alt="logo map"/>
                        <div className="location-name">Метро Улица 1905 года</div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-label">Адрес:</div>
                            <div className="contact-value">Москва, ул. Сергея Макеева, 1</div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-label">График работы:</div>
                            <div className="contact-value">Пн-Вс: 9:00-21:00</div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-label">Почта:</div>
                            <div className="contact-value">Studiomonplaisir@mail.ru</div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-label">Телефоны:</div>
                            <div className="contact-value">+7 (495) 605-56-50</div>
                        </div>
                    </div>
                </div>
                <Button/>
        </div>

    );
};
