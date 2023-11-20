import Figure from "react-bootstrap/Figure";
import OfferPicOne from "../../asset/images/offer-pic1.png";

import OfferPicTwo from "../../asset/images/offer-pic2.png";

function FigureExample() {
  return (
    <Figure>
      <div className="offer-container mt-5 row">
        <Figure.Image
          className="offer-img mb-5 mx-5 col-lg-6 col-md-6 col-sm-12"
          src={OfferPicOne}
        />
        <Figure.Image
          className="offer-img mb-5 col-lg-6 col-md-6 col-sm-12"
          src={OfferPicTwo}
        />
      </div>
    </Figure>
  );
}

export default FigureExample;
