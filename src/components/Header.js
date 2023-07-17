import { useState } from "react"
import { NavDropdown } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
import AppButton from "./Button"
import LoginForm from "./LoginForm";
import { Button, Card, Col, Container, Row, Navbar, Nav, Figure } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import SignUpForm from "./SignUpForm";




const Header = ({ title }) => {
  // const navigate = useNavigate();

  // const onClickLogin = () => {
  //   <LoginForm />
  // }

  // const onClickSignUp = () => {
  //   navigate('/signup');
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    //  Navbar
    <div>
      <Navbar bg="light" expand="lg">
        <Container mt-3>
          <Navbar.Brand href="home"><span class="text-success">Job Portal</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="postJob">Post Job</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <Nav.Link href="ContactUs">ContactUs</Nav.Link>
                <NavDropdown.Item href="About/3.2">
                  About
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <section class="bg-light text-dark p-5 text-center" text-sm-start>
        <Container>
          <div class="d-sm-flex">
            <Figure className="img-fluid w-50 d-none d-sm-block">
              <Figure.Image
                src="../assets/cover-image.png"
              />
              <Figure.Caption class="lead my-4"><span
                class="text-primary"></span>
              </Figure.Caption>
            </Figure>
            <div className="ms-auto">
              <LoginForm />
              <>
                <Button variant="link" onClick={handleShow}>
                  Don't have account? Create new account
                </Button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <SignUpForm />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}




Header.defaultProps = {
  title: 'Job Portal',
}
export default Header
//color='Black'text='Sign Up' 