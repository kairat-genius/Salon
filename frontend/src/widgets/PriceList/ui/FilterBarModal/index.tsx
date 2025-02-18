"use client"
import React, {useState} from "react";
import "./FilterBarModal.css";
import Image from "next/image";
import {TitlePriceList} from "@/widgets/PriceList/ui/TitlePriceList";



import { CategoryListType, CategoryType } from "@/interface";
import {Logo} from "@/shared/ui/Logo";

interface FilterBarProps extends CategoryListType {
    onCategorySelectAction: (category: CategoryType) => void;
    selectedCategory?: CategoryType;
}

export const FilterBarModal: React.FC<FilterBarProps> = ({ category, onCategorySelectAction, selectedCategory }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen((prev) => {
            if (!prev) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
            return !prev;
        });
    };

    const handleCategoryClick = (category: CategoryType) => {
        onCategorySelectAction(category);
        toggleModal()
    };

    return (

        <div className="filter-bar-modal">
            <div className="filter-item-modal active only">
                <div className="filter-text-modal">{selectedCategory?.title}</div>
            </div>
            <Image className="filter-open-modal" src="/img/price-list/filter.svg" width={35} height={35}
                   alt="Фильтр услуг" onClick={toggleModal}/>
            {/*Модальное окно*/}
            {isOpen && (
            <div className="filter-modal-overlay" onClick={toggleModal}>
                <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal__content">
                        <div className="modal__header">
                            <Image className="modal__close-icon" src="/img/icons-controls/closing.svg" width={25} height={25} alt="Закрытие модаль"  onClick={toggleModal}/>
                        </div>
                        <TitlePriceList/>
                    </div>
                    <div className="modal__categories">
                        {category.map((cat) => (
                        <div className={`filter-item-modal ${selectedCategory?.id === cat.id ? "active" : ""}`}
                             key={cat.id}
                             onClick={() => handleCategoryClick(cat)}
                        >
                            <div className="filter-text-modal">{cat?.title}</div>
                        </div>
                            ))}
                    </div>
                </div>
            </div>
            )}
        </div>

    );
};
