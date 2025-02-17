import "./Arrow.css";
import {FC} from "react";
import Image from "next/image";

interface ArrowProps {
    styleClass?: string;
}

export const Arrow: FC<ArrowProps> = ({ styleClass = "" }) => {
    return (
        <div className={`arrow ${styleClass}`}>
            <Image className="icon-arrow" src="/img/icons-controls/arrow.svg" alt="стрелка" width={80} height={80} />
        </div>
    );
};
