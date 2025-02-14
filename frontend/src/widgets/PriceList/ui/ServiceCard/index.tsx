import "./ServiceCard.css";
import Image from "next/image";
import {CategoryType} from "@/interface";

interface ServiceCardProps {
    selectedCategory: CategoryType;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({selectedCategory}) => {
    return (
                    <div className="service-card">
                        <Image className="service-card__image" src={selectedCategory.sale_photo} alt={selectedCategory.title} width={500} height={300}/>
                        {selectedCategory.sales && (
                        <div className="service-card__content">
                            <div className="service-card__description">
                                {selectedCategory.sales.text}
                            </div>
                            <div className="service-card__price">{selectedCategory.sales.new_price} ₽</div>
                        </div>
                            )}
                    </div>
    );
};
