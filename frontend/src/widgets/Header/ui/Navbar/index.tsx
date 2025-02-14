import "./Navbar.css"
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="navbar flex-row">
            <Link href="/#services" className="nav-item">Услуги</Link>
            <Link href="/#about" className="nav-item">О нас</Link>
            <Link href="/#shares" className="nav-item">Акции</Link>
            <Link href="/#certificates" className="nav-item">Сертификаты</Link>
            <Link href="/#contact" className="nav-item">Контакты</Link>
        </nav>
    );
};
