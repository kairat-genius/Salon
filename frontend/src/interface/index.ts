interface SalesType {
    id: number;
    text: string;
    new_price: number;
}

export interface ServiceType {
    id: number;
    title: string;
    price_min: number;
    price_max: number;
    discount: number;
    comment: string;
    duration: number
}

export interface CategoryType {
    id: number;
    services: ServiceType[];
    title: string;
    sale_photo: string;
    sales: SalesType;
}

export interface StaffType {
    id: number;
    name: string;
    first_name: string;
    surname: string;
    patronymic: string;
    specialization: string;
    photo: string;
}

export interface CategoryListType {
    category: CategoryType[];
}