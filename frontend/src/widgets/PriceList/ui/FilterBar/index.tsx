
import React from "react";
import "./FilterBar.css";
import { CategoryListType, CategoryType } from "@/interface";

interface FilterBarProps extends CategoryListType {
    onCategorySelect: (category: CategoryType) => void;
    selectedCategory?: CategoryType;
}

export const FilterBar: React.FC<FilterBarProps> = ({ category, onCategorySelect, selectedCategory }) => {
    const handleCategoryClick = (category: CategoryType) => {
        onCategorySelect(category);
    };

    return (
        <div className="filter-bar">
            {category.map((cat) => (
                <div
                    className={`filter-item ${selectedCategory?.id === cat.id ? "active" : ""}`}
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat)}
                >
                    <div className="filter-text">{cat.title}</div>
                </div>
            ))}
        </div>
    );
};