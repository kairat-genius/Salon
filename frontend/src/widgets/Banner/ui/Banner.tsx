import "./Banner.css"

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-title-wrapper">
                    <span className="banner-title">Студия красоты</span>
                    <div className="title-divider"></div>
                </div>
                <div className="banner-logo">
                    <span className="logo-text">Mon</span>
                    <span className="logo-name">Plaisir</span>
                </div>
            </div>
            <p className="banner-description">25 лет профессионально заботимся о Вашей красоте</p>
        </div>

    );
};
