import "./Map.css";
import { Contact } from "@/widgets/Map/ui/Contact";

export const Map = () => {
    const address = "улица Сергея Макеева, 1, Москва, 123100";
    
    return (
        <div id="contact" className="map">
            <Contact />
            <iframe
                src="https://yandex.com/map-widget/v1/org/mon_plezir/1018167095/?ll=37.549935%2C55.756529&utm_source=share&z=20"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                style={{ border: 0, display: "block" }}
                title={address}
                aria-label={address}
            ></iframe>
        </div>
    );
};
