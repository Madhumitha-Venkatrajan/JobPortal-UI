import { useState, useEffect } from "react";
import { getJob } from '../services/PersonService';
import Job from "./Job";
import { useNavigate } from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";
import { Button, Card, Col, Container, Row, Navbar, Nav, Figure } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ApplyJob from "./ApplyJob";
import Modal from 'react-bootstrap/Modal';
import ViewProfile from "./ViewProfile";
import { FaEdit } from "react-icons/fa";
import UseBodyScrollLock from "./UseBodyScrollLock";
import EditProfile from "./EditProfile";

const JobList = () => {

  const [jobList, setJobList] = useState([])
  const [modalToDisplay, setModal] = useState();

  const handleClose = () => setModal(null);
  const handleShow = () => setModal("ApplyJob");
  const showProfileModal = () => setModal("Profile");
  const showEditProfile = () => setModal("Edit");

  useEffect(() => {
    getJob(setJobList)
    //console.log("getJob call is completed. Exiting useeffect.");
  }, []);


  // console.log(jobList);

  const navigate = useNavigate();

  const jobPost = () => {
    navigate('/postJob');
  }

  const getTitle = () => {
    if (modalToDisplay == 'Profile') {
      return 'View Profile'
    }
    else if (modalToDisplay == 'ApplyJob') {
      return 'Apply'
    }
    else {
      return 'Edit'
    }
  }
  // const onClick=(e) =>{
  //   e.preventDefault();

  // }

  return (
    //  Navbar
    <div className="vh-100" >
      <Navbar bg="light" expand="lg">
        <Container mt-3>
          <Navbar.Brand href="home"><span class="text-success">Job Portal</span></Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by title"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="postJob">Post Job</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={showProfileModal}>View Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#Admin/3.2">Admin</NavDropdown.Item>
                <NavDropdown.Item href="#ContactUs/3.3">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#About/3.2">
                  SignOut
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section class="text-dark text-center" text-sm-start>
        <Container className="w-100">
          <div className="d-sm-flex">
            <div className="w-50 d-none d-sm-block overflow-auto vh-100 ">
              <Table className="table table-bordered">
                <tbody>
                  {jobList.map((job) =>
                    <tr>
                      <td> <Job key={job.jobID} variant="primary" job={job} ></Job></td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
            <div className="ms-auto">
              <Button onClick={handleShow}>
                Apply
              </Button>
              <Modal
                show={modalToDisplay != null}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header >
                  {/* <Modal.Title>{modalToDisplay == 'Profile' ? 'View Profile' : 'Apply Job'}</Modal.Title> */}
                  <Modal.Title> {
                    getTitle()
                  }
                  </Modal.Title>

                  {<FaEdit onClick={showEditProfile} title="Edit" />}
                </Modal.Header>
                <Modal.Body>
                  {modalToDisplay == 'Profile' && <ViewProfile />}
                  {modalToDisplay == 'ApplyJob' && <ApplyJob />}
                  {modalToDisplay == 'Edit' && <EditProfile />}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Container>
      </section>

      <UseBodyScrollLock />

    </div>
  )
}

export default JobList
//<h3 style={{ color: 'red', cursor: 'pointer' }}>{setJobList}</h3>


// {jobList.map((job) =>
//   <Job key={job.jobID} variant="primary" job={job} ></Job>
// )}