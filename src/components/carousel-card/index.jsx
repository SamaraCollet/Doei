import { Card } from "./styles";

const CarouselCard = ({ title, date, children }) => {
  return (
    <Card className="card">
      <div className="card-content">
        <div className="card-image">
          <img src="image-ong.png" alt="img-ong" />
        </div>

        <div className="card-info">
          <p className="card-title">{title}</p>
          <p className="card-date">{date}</p>
          <p className="card-text">{children}</p>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
