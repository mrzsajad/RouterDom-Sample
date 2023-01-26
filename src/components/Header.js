import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigate=useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#action2">Profile</Nav.Link> */}

            {/*------------------------------------------------------*/}

            {/* <Link to="/About">About</Link>
            <Link to="/Contacts">Contacts</Link>
            <Link to="/Profile">Profile</Link> */}

            {/*------------------------------------------------------*/}
            <Nav.Link onClick={()=>navigate("/About")}>About</Nav.Link>
            <Nav.Link onClick={()=>navigate("/Contacts")}>Contacts</Nav.Link>
            <Nav.Link onClick={()=>navigate("/Profile/ChangePassword")}>Profile</Nav.Link>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
