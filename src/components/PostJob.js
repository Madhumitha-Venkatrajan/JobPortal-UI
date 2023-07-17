import { useState } from "react"
import { createJobPost } from '../services/PersonService';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const PostJob = () => {

  const [postJobFormData, setFormPostJobData] = useState(
    {
      companyID: null,
      companyName: '',
      jobTitle: '',
      jobType: '',
      salary: '',
      location: '',
    })

  const [jobResponsibilities, setJobResponsibilities] = useState([])

  const [jobRequirements, setJobRequirements] = useState([])

  const updateJobRes = (e) => {
    setJobResponsibilities({
      ...jobResponsibilities, jobResponsibilities: [...jobResponsibilities.jobResponsibilities,
      e.target.value]
    })
  }
  const updateJobReq = (e) => {
    setJobRequirements({
      ...jobRequirements, jobRequirements: [...postJobFormData.jobRequirements,
      e.target.value]
    })
  }

  const updateCompanyID = (e) => {
    setFormPostJobData({ ...postJobFormData, companyID: e.target.value })
  }
  const updateCompanyName = (e) => {
    setFormPostJobData({ ...postJobFormData, companyName: e.target.value })
  }
  const updateJobTitle = (e) => {
    setFormPostJobData({ ...postJobFormData, jobTitle: e.target.value })
  }
  const updateJobType = (e) => {
    setFormPostJobData({ ...postJobFormData, jobType: e.target.value })
  }

  // const updateJobRes = (e) => {
  //   setFormPostJobData({
  //     ...postJobFormData, jobResponsibilities: [...postJobFormData.jobResponsibilities,
  //     e.target.value]
  //   })
  // }
  // const updateJobReq = (e) => {
  //   setFormPostJobData({
  //     ...postJobFormData, jobRequirements: [...postJobFormData.jobRequirements,
  //     e.target.value]
  //   })
  // }

  const updateSalary = (e) => {
    setFormPostJobData({ ...postJobFormData, salary: e.target.value })
  }
  const updateLocation = (e) => {
    setFormPostJobData({ ...postJobFormData, location: e.target.value })
  }

  const jobPostSaved = (res) => {
    if (res !== "failure") {
      alert("saved job successfully")
    }
    else {
      alert("job saved failed, try again later")
    }
  }

  const submit = (e) => {
    e.preventDefault()
    createJobPost(postJobFormData, jobPostSaved)
  }
  return (

    <div>

      <Navbar bg="light" expand="lg">
        <Container mt-3>
          <Navbar.Brand href="home"><span class="text-success">Job Portal</span></Navbar.Brand>
          <Form className="d-flex">

          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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

      <Container mt-3>
        <Form.Group className="mb-3" class="py-3" controlId="formBasiccmpnyID">
          <Form.Control type="numeric" placeholder="Enter CompanyID" value={postJobFormData.companyID} onChange={updateCompanyID} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCmpnyName">
          <Form.Control type="text" placeholder="Enter CompanyName" value={postJobFormData.companyName} onChange={updateCompanyName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicjobTle">
          <Form.Control type="text" placeholder="Enter JobTitle" value={postJobFormData.jobTitle} onChange={updateJobTitle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicJobType">
          <Form.Control type="text" placeholder="Enter Job type eg: Full-time, Part-time, Contract, Internship" value={postJobFormData.jobType} onChange={updateJobType} />
        </Form.Group>

        <ListGroup>
          <ListGroup.Item as="li" disabled>
            Job Description
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            Responsibilities:
            <section>
              <Form.Group className="mb-3" controlId="formBasicJobRes">
                <Form.Control type="text" placeholder="Enter Job Responsibilities in 100 words"
                  value={jobResponsibilities.jobResponsibilities} onChange={updateJobRes} />
              </Form.Group>
              <ol>
                {jobResponsibilities.map((jobResponsibility) =>
                  <li key={jobResponsibility.jobID} variant="primary" jobResponsibility={jobResponsibility} ></li>
                )}
              </ol>
            </section>
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            Requirements:
            <section>
              <Form.Group className="mb-3" controlId="formBasicJobReq">
                <Form.Control type="text" placeholder="Enter Job Requirements in 100 words"
                  value={jobRequirements.jobRequirements} onChange={updateJobReq} />
              </Form.Group>
              <ol>
                {jobRequirements.map((jobRequirement) =>
                  <li key={jobRequirement.jobID} variant="primary" jobRequirement={jobRequirement} ></li>
                )}
              </ol>
            </section></ListGroup.Item>
        </ListGroup>

        {/* <Form.Group className="mb-3" controlId="formBasicJobDescription">
          <Form.Control type="text" placeholder="Enter Job Description"
            value={postJobFormData.jobDescription} onChange={updateJobDescription} />
            </Form.Group> */}
        <Form.Group className="mb-3" class="py-3" controlId="formBasicSalry">
          <Form.Control type="salry" placeholder="Enter Salary" value={postJobFormData.salary} onChange={updateSalary} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLoction">
          <Form.Control type="loction" placeholder="Enter Loction" value={postJobFormData.location} onChange={updateLocation} />
        </Form.Group>
        <Button onClick={submit} variant="primary" type="Save" value="Save">
          Save Changes
        </Button>

      </Container>
    </div>
  )
}

export default PostJob
// const[jobResFormData, setJobResFormData] = useState(
//   {
//      jobResponsibilities : ''
//   })
//   const updateJobRes = (e) => {
//       setJobResFormData({ ...jobResFormData, jobResponsibilities: e.target.value })
//   }

// const[jobReqFormData, setJobReqFormData] = useState(
//   {
//      jobRequirements : ''
//   })
//   const updateJobReq = (e) => {
//       setJobReqFormData({ ...jobReqFormData, jobRequirements: e.target.value })
//   }