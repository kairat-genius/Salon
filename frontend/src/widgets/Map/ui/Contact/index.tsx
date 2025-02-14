import "./Contact.css";
import {Button} from "@/shared/ui/Button";
import Image from "next/image";

export const Contact = () => {
    return (
        <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-location">
                        <Image className="location-image" src="/map/image-20.png" width={80} height={80} alt="logo map"/>
                        <div className="location-name">Улица 1905 г.</div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-label">Адрес:</div>
                            <div className="contact-value">Шмитовский проезд, д.16, стр.2</div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-label">График работы:</div>
                            <div className="contact-value">Пн-Вс: 9:00-21:00</div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-label">Почта:</div>
                            <div className="contact-value">pochta@gmail.com</div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-label">Телефоны:</div>
                            <div className="contact-value">+7 968 601 20 20</div>
                        </div>
                    </div>
                </div>
                <Button/>
        </div>

    );
};
