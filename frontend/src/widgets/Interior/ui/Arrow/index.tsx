import "./Arrow.css";
import Image from "next/image";

interface ArrowProps {
    styleClass?: string;
}

export const Arrow: React.FC<ArrowProps> = ({ styleClass = "" }) => {
    return (
        <div className={`arrow ${styleClass}`}>
            <Image className="icon-arrow" src="/img/interior/arrow.svg" alt="стрелка" width={100} height={100} />
        </div>
    );
};
