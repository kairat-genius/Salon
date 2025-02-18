import "./Banner.css"
import {Logo} from "@/shared/ui/Logo";
import React from "react";

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-title-wrapper">
                    <span className="banner-title">Студия красоты</span>
                    <div className="title-divider"></div>
                </div>
                <Logo banner={true}/>
            </div>
            <p className="banner-description">25 лет профессионально заботимся о Вашей красоте</p>
        </div>

    );
};
