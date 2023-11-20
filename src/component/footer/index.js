import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaCubes,
} from "react-icons/fa";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="footer text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset">
            <FaFacebook className="icon-facebook" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaTwitter className="icon-twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle className="icon-google" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaInstagram className="icon-instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaLinkedin className="icon-linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGithub className="icon-github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase text-center fw-bold mb-4">
                <FaCubes className="icon-footer" />
                درباره ما
              </h6>
              <p className="text-center">
                وبسایت فروشگاه انلاین با چندین سال تجربه آماده خدمت به شما
                است.ممنون که وبسایت ما رو برای خرید انتخاب کردید.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto text-center mb-4">
              <h6 className="text-uppercase fw-bold mb-4">محصولات</h6>
              <p className="header-footer-right">پوشاک اقایان</p>
              <p className="header-footer-right">پوشاک بانوان</p>
              <p className="header-footer-right">کالای دیجیتال</p>
              <p className="header-footer-right">زیورالات</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto text-center mb-4">
              <h6 className=" text-uppercase fw-bold mb-4">راه های ارتباطی</h6>
              <p className="header-footer-right">مدیریت</p>
              <p className="header-footer-right">همکاری با ما</p>
              <p className="header-footer-right">بخش فروش</p>
              <p className="header-footer-right">پشتیبانی</p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">تماس با ما</h6>

              <p className="icon-footer">
                m.alijani002@gmail.com <FaEnvelope />
              </p>
              <p className="icon-footer">
                + 01 234 567 88 <FaPhoneAlt />
              </p>
              <p className="icon-footer">
                + 01 234 567 89 <FaPhoneAlt />
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <div dir="rtl">
          <p className="mt-3">
            © کلیه حقوق این وبسایت برای فروشگاه آنلاین محفوظ است
          </p>
        </div>
      </div>
    </MDBFooter>
  );
}
