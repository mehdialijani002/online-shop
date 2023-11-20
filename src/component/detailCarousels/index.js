import Figure from "react-bootstrap/Figure";
import image from "../../asset/images/be43c4c7b33938efd06978239260d2475a14f8b5_1699258854.gif";
import Img from "../../asset/images/e1e3b332b0a868af4c0cea0e591c12374abb9f9d_1699457149.png";
function FigureExample() {
  return (
    <div className="fiqure-container">
      <Figure>
        <Figure.Image className="fiqure-img" alt="171x180" src={image} />
        <Figure.Image
          className="fiqure-img  mt-5 mb-5"
          alt="171x180"
          src={Img}
        />
      </Figure>
    </div>
  );
}

export default FigureExample;
