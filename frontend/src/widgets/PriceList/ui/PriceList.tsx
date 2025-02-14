'use client'
import React, { useState } from "react";
import "./PriceList.css";
import {TitlePriceList} from "@/widgets/PriceList/ui/TitlePriceList";
import {FilterBar} from "@/widgets/PriceList/ui/FilterBar";
import {ServiceCard} from "@/widgets/PriceList/ui/ServiceCard";
import {ServicePricing} from "@/widgets/PriceList/ui/ServicePricing";
import {CategoryListType, CategoryType} from "@/interface";
import {FilterBarModal} from "@/widgets/PriceList/ui/FilterBarModal";


export const PriceList: React.FC<CategoryListType> = ({category}) => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>(category[0]);

    const handleCategorySelect = (category: CategoryType) => {
        setSelectedCategory(category);
    };


    return (
      <div id="services" className="price-list">
          <TitlePriceList/>
          <div className="price-list__wrapper">
              <FilterBar category={category} onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory}/>

            <div className="price-list__services">
                <ServiceCard selectedCategory={selectedCategory} />
                <FilterBarModal category={category} onCategorySelectAction={handleCategorySelect} selectedCategory={selectedCategory}/>
                <ServicePricing selectedCategory={selectedCategory} />
            </div>
          </div>
      </div>

  );
};
