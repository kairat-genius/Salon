import "./Logo.css"

interface LogoProps {
    banner?: boolean;
}

export const Logo = ({ banner }: LogoProps) => {
    return (
        <div className={`logo ${banner ? "logo-banner" : ""}`}>
            <span className="logo-text-head">Mon</span>
            <span className="logo-name-head">Plaisir</span>
        </div>
    );
};