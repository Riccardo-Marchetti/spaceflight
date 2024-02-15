import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/OIG3.jpg";
import { Link } from "react-router-dom";
const CustomNavbar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            style={{ width: "60px" }}
            className="rounded-circle "
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to={"/"} className="fs-5 text-white text-decoration-none">
            Home
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
