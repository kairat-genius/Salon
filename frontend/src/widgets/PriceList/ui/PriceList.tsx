import "./PriceList.css";
import {TitlePriceList} from "@/widgets/PriceList/ui/TitlePriceList";
import {FilterBar} from "@/widgets/PriceList/ui/FilterBar";
import {ServiceCard} from "@/widgets/PriceList/ui/ServiceCard";
import {ServicePricing} from "@/widgets/PriceList/ui/ServicePricing";

export const PriceList = () => {
  return (
      <div className="price-list">
          <TitlePriceList/>
          <div className="price-list__wrapper">
            <FilterBar/>

            <div className="price-list__services">
              <ServiceCard/>
              <ServicePricing/>
            </div>
          </div>
      </div>

  );
};
