import "./FilterBar.css";

export const FilterBar = () => {
    return (
                <div className="filter-bar">
                    <div className="filter-item">
                        <div className="filter-text">Массаж</div>
                    </div>
                    <div className="filter-item">
                        <div className="filter-text">Массаж</div>
                    </div>
                    <div className="filter-item active">
                        <div className="filter-text">Парикмахерскаие услуги</div>
                    </div>
                    <div className="filter-item">
                        <div className="filter-text">Парикмахерскаие услуги</div>
                    </div>
                </div>
    );
};
