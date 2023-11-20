import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import {
  FaCubes,
  FaHome,
  FaCartArrowDown,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <div className="nav-container">
      <Navbar expand="lg" className="bg-warning rounded">
        <Container>
          <Navbar.Brand href="#home" dir="rtl">
            <FaCubes className="nav-logo mx-2" />
            فروشگاه انلاین
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem className="mx-2">
                <Nav.Link href="">
                  <Link to={"/"} className="navbar-links">
                    <FaHome /> صفحه اصلی
                  </Link>
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link>
                  <Link to={"/card"} className="navbar-links">
                    <FaCartArrowDown />
                    سبد خرید
                  </Link>
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link className="mx-2">
                  <Link to={"/confirm"} className="navbar-links">
                    <FaCheckCircle className="mx-1" />
                    تکمیل خرید
                  </Link>
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
