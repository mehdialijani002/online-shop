import Accordion from "react-bootstrap/Accordion";
import Carousel from "../../component/detailCarousels/index";
import Image from "../../asset/images/comment.gif";
function AllCollapseExample() {
  return (
    <div>
      <div className="detail-carousel">
        <Carousel />
      </div>
      <h1 className="text-center detail-header">
        سوالات پر <span>تکرار</span>
      </h1>
      <div className="detail-container mt-5 mb-5">
        <Accordion>
          <Accordion.Item className="mb-3" eventKey="0">
            <Accordion.Header className="detail-title">
              چرا باید وبسایت شما رو انتخاب کنیم؟
            </Accordion.Header>
            <Accordion.Body className="detail-p">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="1">
            <Accordion.Header className="detail-title">
              چه قدر طول میکشه تا خرید ما به دستمون برسه؟
            </Accordion.Header>
            <Accordion.Body className="detail-p">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="2">
            <Accordion.Header className="detail-title">
              فرق شما با بقیه وبسایت برای خرید کالا چیه؟
            </Accordion.Header>
            <Accordion.Body className="detail-p">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="3">
            <Accordion.Header className="detail-title">
              چه قدر طول میکشه تا خرید ما به دستمون برسه؟
            </Accordion.Header>
            <Accordion.Body className="detail-p">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <img src={Image} className="detail-img" />
      </div>
    </div>
  );
}

export default AllCollapseExample;
