import Figure from "react-bootstrap/Figure";
import BookImg from "../../asset/images/card-books.png";
import PhoneImg from "../../asset/images/card-phone.png";
import CarImg from "../../asset/images/card-cars.png";
import FoodImg from "../../asset/images/card-food.png";
import ClothesImg from "../../asset/images/card-clothes.png";
import BeuatyImage from "../../asset/images/card-beauty.png";
import Col from "react-bootstrap/Col";

function FigureExample() {
  return (
    <div className="table-responsive  ">
      <Figure className="card-container mt-5">
        <Col className="card1 col-md-2 mt-3">
          <div className="first-card ">
            <Figure.Image
              className="card-shadow"
              alt="first-card"
              src={PhoneImg}
            />
            <Figure.Caption className="text-center card-text">
              لوازم دیجیتال
            </Figure.Caption>
          </div>
        </Col>
        <Col className="mt-3 col-md-2 col-sm-4 card2">
          <div className="first-card">
            <Figure.Image
              className="card-shadow"
              alt="first-card"
              src={BookImg}
            />
            <Figure.Caption className="text-center card-text">
              کتاب
            </Figure.Caption>
          </div>
        </Col>
        <Col className="mt-3 col-md-2 col-sm-4 card3 ">
          <div className="first-card">
            <Figure.Image
              className="card-shadow"
              alt="first-card"
              src={CarImg}
            />
            <Figure.Caption className="text-center card-text">
              ماشین
            </Figure.Caption>
          </div>
        </Col>
        <Col className="mt-3 col-md-2 col-sm-4 card4 ">
          <div className="first-card">
            <Figure.Image
              className="card-shadow"
              alt="first-card"
              src={FoodImg}
            />
            <Figure.Caption className="text-center card-text">
              مواد غذایی
            </Figure.Caption>
          </div>
        </Col>
        <Col className="mt-3 col-md-2 col-sm-4 card5">
          <div className="first-card">
            <Figure.Image
              className="card-shadow"
              alt="first-card"
              src={ClothesImg}
            />
            <Figure.Caption className="text-center card-text">
              پوشاک
            </Figure.Caption>
          </div>
        </Col>
        <Col className="mt-3 col-md-2col-sm-4 card6 ">
          <div className="first-card">
            <Figure.Image
              className="card-shadow"
              alt="first-card"
              src={BeuatyImage}
            />
            <Figure.Caption className="text-center card-text">
              سلامت
            </Figure.Caption>
          </div>
        </Col>
      </Figure>
    </div>
  );
}

export default FigureExample;
