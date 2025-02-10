import "./Navbar.css"
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="navbar flex-row">
            <Link href="#" className="nav-item">Услуги</Link>
            <Link href="#" className="nav-item">О нас</Link>
            <Link href="#" className="nav-item">Акции</Link>
            <Link href="#" className="nav-item">Сертификаты</Link>
            <Link href="#" className="nav-item">Контакты</Link>
        </nav>
    );
};
