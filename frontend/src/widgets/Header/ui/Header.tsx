import {Button} from "@/shared/ui/Button";
import {Social} from "./Social";
import "./Header.css"
import {Navbar} from "@/widgets/Header/ui/Navbar";
import Image from "next/image";

export const Header = () => {
    return (
        <header>
            <Image className="logo" height={90} width={304} alt="logo" src="/logo.png"/>
            <div className="header-wrapper flex-row">
                <Navbar/>
                <div className="header-actions flex-row">
                    <Social/>
                    <Button/>
                </div>
            </div>
        </header>
    );
};
