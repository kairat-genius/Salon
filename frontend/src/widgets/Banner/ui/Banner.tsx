import "./Banner.css"

export const Banner = () => {
  return (
      <div
          className="frame-9"
          style={{backgroundImage: "url('/banner/background.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"}}
      >
        <div className="frame-12">
          <div className="div">Студия красоты</div>
          <div className="line-1"></div>
          <div className="frame-1597883421">
            <div className="mon">Mon</div>
            <div className="plaisir">Plaisir</div>
          </div>
        </div>
        <div className="_25">25 лет профессионально заботимся о Вашей красоте</div>
      </div>

  );
};
