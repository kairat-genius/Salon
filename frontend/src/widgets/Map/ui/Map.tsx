import "./Map.css";
import { Contact } from "@/widgets/Map/ui/Contact";

export const Map = () => {
    const zoom = 16;
    const address = "Шмитовский пр-д, 16 строение 2, Москва, Россия, 123100";
    const src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=${zoom}&output=embed`;

    return (
        <div id="contact" className="map" >
            <Contact />
            <iframe
                src={src}
                loading="lazy"
                style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                }}
                title={address}
                aria-label={address}
            ></iframe>
        </div>
    );
};
