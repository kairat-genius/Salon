import "./ServicePricing.css";
import {CategoryType, ServiceType} from "@/interface";
import {formatDuration} from "@/shared/utils/formatDuration";

interface ServiceCardProps {
    selectedCategory: CategoryType;
}

export const ServicePricing: React.FC<ServiceCardProps> = ({selectedCategory}) => {
    return (
        <table>
            <thead className="service-pricing-header">
            <tr>
                <th className="service-title">{selectedCategory?.title}</th>
                <th>Описание</th>
                <th>От - До</th>
                <th>Скидочная цена</th>
                <th>Длительность услуги</th>
            </tr>
            </thead>
            <tbody className="service-pricing-body">
            {selectedCategory?.services?.map((data: ServiceType) => (
            <tr className="service-row-desktop" key={data.id}>
                <td className="service-name">{data.title}</td>
                <td className="service-description">{data.comment}</td>
                <td className="service-price">{data.price_min} - {data.price_max} ₽</td>
                <td className="service-discount">{data.discount} ₽</td>
                <td className="service-duration">{formatDuration(data.duration)}</td>
            </tr>
            ))}
            {selectedCategory?.services?.map((data: ServiceType) => (
            <tr className="service-row-mobile" key={data.id}>
                <td className="service-info">
                    <span className="service-name">{data.title}</span>
                    <span className="service-description">{data.comment}</span>
                </td>
                <td className="service-info">
                    <span className="service-price-wrapper">
                        <span className="service-discount">-{data.discount} ₽</span>
                        <span className="service-price">{data.price_min} - {data.price_max} ₽</span>
                    </span>
                    <span className="service-duration">{formatDuration(data.duration)}</span>
                </td>
            </tr>
                ))}

            </tbody>
        </table>
    );
};
