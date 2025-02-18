import "./PromotionsCertificates.css"
import {TitleDescription} from "./TitleDescription";
import Image from "next/image";

export const PromotionsCertificates = () => {
  return (
      <div className="promotions-certificates">
        <div id="shares" className="promotions-content">
            <TitleDescription title="АКЦИИ">
                На нашем сайте действуют выгодные акции! <br />
                Успейте воспользоваться специальными предложениями и получите скидки на популярные товары. <br />
                Ограниченное время – не упустите шанс сэкономить! Подробности на сайте.
            </TitleDescription>
          <div className="promotions-images">
            <Image className="promotion-image img1" width={360} height={420} src="/img/pcerts/rectangle-70.png" alt="Акция 1"/>
            <Image className="promotion-image img2" src="/img/pcerts/rectangle-90.png" width={300} height={370} alt="Акция 2"/>
          </div>
        </div>
        <div id="certificates" className="certificates-content" >
          <Image className="certificate-image" src="/img/pcerts/image0.png" width={593} height={424} alt="Подарочные сертификаты"/>
            <TitleDescription title="Подарочные сертификаты">
                В нашем салоне любую услугу или комплекс услуг можно приобрести в виде подарочного сертификата, чтобы порадовать близкого человека.
            </TitleDescription>
        </div>
      </div>

  );
};
