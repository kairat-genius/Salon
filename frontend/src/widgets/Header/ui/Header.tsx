"use client"
import { useState } from "react";
import {Button} from "@/shared/ui/Button";
import {Social} from "./Social";
import "./Header.css"
import {Navbar} from "@/widgets/Header/ui/Navbar";
import Image from "next/image";
import {Logo} from "@/shared/ui/Logo";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => {
            if (!prev) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
            return !prev;
        });
    };

    return (
        <header>
            <Logo/>
            <div className={`header-wrapper ${isMenuOpen ? 'active' : ''} flex-row`}>
                <Navbar/>
                <div className="header-actions flex-row">
                    <Social/>
                    <Button/>
                </div>
            </div>
            <Image
                className="burger-menu"
                src={`/img/icons-controls/${isMenuOpen ? "closing" : "menu-burger"}.svg`}
                onClick={toggleMenu}
                width={25}
                height={25}
                alt={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            />

        </header>
    );
};
