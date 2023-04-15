import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { jobApplied } from '../services/PersonService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const ApplyJob = () => {

  const myParam = useLocation().search;
  const productId = new URLSearchParams(myParam).get("id");

  const [applyJobForm, setApplyJobForm] = useState(
    {
      jobID: productId,
      emailID: localStorage.getItem('EmailID'),
      experience: '',
      skills: ''
    })

  const updateExperience = (e) => {
    setApplyJobForm({ ...applyJobForm, experience: e.target.value });
  };

  const updateSkills = (e) => {
    setApplyJobForm({ ...applyJobForm, skills: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("Files", file);
    formData.append("JobID", applyJobForm.jobID)
    formData.append("EmailID", applyJobForm.emailID)
    formData.append("Experience", applyJobForm.experience)
    formData.append("Skills", applyJobForm.skills)
    formData.append("Resume", null)
    jobApplied(formData)
  }


  const [file, setFile] = useState();

  const handleInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form>
      <Form.Group className="mb-3" controlId="formBasicExp">
        <Form.Control type="Experience" placeholder="Enter Experience" value={applyJobForm.experience} onChange={updateExperience} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSkills">
        <Form.Control type="Skills" placeholder="Enter skills eg: C#, Java, Python" value={applyJobForm.skills} onChange={updateSkills} />
      </Form.Group>
      <input type="file" onChange={handleInputChange} />
      <br />
      <br />
      <Button onClick={submit} variant="primary" type="submit" value="Submit">
        Submit
      </Button>
    </form>
    
  )

}

export default ApplyJob
