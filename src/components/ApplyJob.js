import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { jobApplied } from '../services/PersonService';


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
      <label for="exprnce">Experience:</label>
      <input type="text" name="exprnce"  value={applyJobForm.experience} onChange={updateExperience} />
      <label for="skils">Skills:</label>
      <input type="text" name="skils"  value={applyJobForm.skills} onChange={updateSkills} />
      <input type="file" onChange={handleInputChange} />
      <br />
      <br />
      <input onClick={submit} type="Submit" value="Submit"></input>
    </form>

    /* <div>
 
      
     </div>*/
  )
}

export default ApplyJob
