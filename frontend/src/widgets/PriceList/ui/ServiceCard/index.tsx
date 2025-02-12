import "./ServiceCard.css";
import Image from "next/image";

export const ServiceCard = () => {
    return (
                    <div className="service-card">
                        <Image className="service-card__image" src="/img/price-list/test.png" alt="Массаж" width={500} height={300}/>
                        <div className="service-card__content">
                            <div className="service-card__description">
                                Профессиональный массаж всего за 2500 рублей! Подарите своему телу
                                расслабление и заботу. Успейте записаться по выгодной цене! 🕒
                                Акция ограничена.
                            </div>
                            <div className="service-card__price">5000 ₽</div>
                        </div>
                    </div>
    );
};
