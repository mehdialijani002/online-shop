import Carousel from "react-bootstrap/Carousel";
import Book from "../../asset/images/style.png";
import Phone from "../../asset/images/watch.png";
import Style from "../../asset/images/be43c4c7b33938efd06978239260d2475a14f8b5_1699258854.gif";
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className=" banner-img banner" src={Style} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="banner-img banner" src={Phone} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="banner-img banner" src={Book} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
