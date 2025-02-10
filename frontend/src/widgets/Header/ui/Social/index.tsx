import "./Social.css"
import Image from "next/image";

export const Social = () => {
    return (
        <div className="social">
            <Image className="social_item" width={50} height={50} alt="social telegram" src="/social/logos-telegram0.svg"/>
            <Image className="social_item" width={50} height={50} alt="social whatsapp" src="/social/logos-whatsapp-icon0.svg"/>
            <Image className="social_item" width={50} height={50} alt="social instagram" src="/social/group0.svg"/>
        </div>
    );
};
