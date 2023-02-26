import { useState, useEffect } from "react";
import { getJob } from '../services/PersonService';
import Job from "./Job";
import { useNavigate } from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";
import { Button, Card, Col, Container, Row, Navbar, Nav, Figure } from "react-bootstrap";



const JobList = () => {

  const [jobList, setJobList] = useState([])

  // const setJobListData = (data) => {
  //   console.log("Received data for updating state");
  //   setJobList(data);
  // }

  useEffect(() => {
    if (jobList.length === 0)
      getJob(setJobList)
    //console.log("getJob call is completed. Exiting useeffect.");
  }, [jobList]);

  // console.log(jobList);

  const navigate = useNavigate();

  const jobPost = () => {
    navigate('/postJob');
  }

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
                <NavDropdown.Item href="#ContactUs/3.1">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="#About/3.2">
                  About
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="w-100">
        <div className="d-sm-flex">
          <div className='w-50 d-none d-sm-block vh-100 px-3 overflow-auto' >
            {jobList.map((job) =>
              <Job key={job.jobID} variant="primary" job={job} ></Job>
            )}
          </div>
          <div className="ms-auto">
            <h1>hi</h1>
          </div>
        </div>
      </Container>


      {/* <div >
     {jobList.map((job)=>
    <Job key={job.jobID} job={job}></Job> 
     )} 
    </div> */}
    </div>
  )
}

export default JobList
//<h3 style={{ color: 'red', cursor: 'pointer' }}>{setJobList}</h3>