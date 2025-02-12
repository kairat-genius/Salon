import "./ServicePricing.css";

export const ServicePricing = () => {
    return (
        <table>
            <thead className="service-pricing-header">
            <tr>
                <th className="service-title">Маникюр без покрытия</th>
                <th>Описание</th>
                <th>От - До</th>
                <th>Скидочная цена</th>
                <th>Длительность услуги</th>
            </tr>
            </thead>
            <tbody className="service-pricing-body">
            <tr>
                <td>Маникюр</td>
                <td>Короткое описание</td>
                <td>750 ₽</td>
                <td>150 ₽</td>
                <td>1 час</td>
            </tr>
            <tr>
                <td>Мужской маникюр</td>
                <td>Короткое описание</td>
                <td>800 ₽</td>
                <td>150 ₽</td>
                <td>1 час</td>
            </tr>
            <tr>
                <td>Гель-лак Luxio</td>
                <td>Короткое описание</td>
                <td>1200 - 1400 ₽</td>
                <td>150 ₽</td>
                <td>1 час</td>
            </tr>
            <tr>
                <td>Кошачий глаз</td>
                <td>Короткое описание</td>
                <td>1200 ₽</td>
                <td>150 ₽</td>
                <td>1 час</td>
            </tr>
            </tbody>
        </table>
    );
};
