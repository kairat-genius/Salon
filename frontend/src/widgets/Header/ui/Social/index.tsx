import "./Social.css"
import Image from "next/image";
import Link from "next/link";

export const Social = () => {
    return (
        <div className="social">
            <Link href="/"><Image className="social_item" width={50} height={50} alt="social telegram" src="/img/social/telegram.svg"/></Link>
            <Link href="/"><Image className="social_item" width={50} height={50} alt="social whatsapp" src="/img/social/whatsapp.svg"/></Link>
            <Link href="https://www.instagram.com/salon_mon_plaisir"><Image className="social_item" width={50} height={50} alt="social instagram" src="/img/social/instagram.svg"/></Link>
        </div>
    );
};
