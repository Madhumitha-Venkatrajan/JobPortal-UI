import { useState } from "react"
import { createJobPost } from '../services/PersonService';

const PostJob = () => {

  const [postJobFormData, setFormPostJobData] = useState(
    {
      companyID: null,
      companyName: '',
      jobTitle: '',
      fullTime: '',
      salary: '',
      location: '',
    })

  const updateCompanyID = (e) => {
    setFormPostJobData({ ...postJobFormData, companyID: e.target.value })
  }
  const updateCompanyName = (e) => {
    setFormPostJobData({ ...postJobFormData, companyName: e.target.value })
  }
  const updateJobTitle = (e) => {
    setFormPostJobData({ ...postJobFormData, jobTitle: e.target.value })
  }
  const updateFullTime = (e) => {
    setFormPostJobData({ ...postJobFormData, fullTime: e.target.value })
  }
  const updateSalary = (e) => {
    setFormPostJobData({ ...postJobFormData, salary: e.target.value })
  }
  const updateLocation = (e) => {
    setFormPostJobData({ ...postJobFormData, location: e.target.value })
  }
 
  const jobPostSaved = (res) => {
    if(res!="failure"){
   alert("saved job successfully")
  }
  else{
    alert("job saved failed, try again later")
  }
}

  const submit = (e) => {
    e.preventDefault()
    createJobPost(postJobFormData,jobPostSaved)
}
  return (
    <div>
      <form>
        <label for="cmpnyID">CompanyID:</label>
        <input type="numeric" name="cmpnyID" 
          value={postJobFormData.companyID} onChange={updateCompanyID} />
        <label for="cmpnyName">CompanyName:</label>
        <input type="text" name="cmpnyName" 
          value={postJobFormData.companyName} onChange={updateCompanyName} />
        <label for="jobTle">JobTitle:</label>
        <input type="text" name="jobTle" 
          value={postJobFormData.jobTitle} onChange={updateJobTitle} />
           <label for="fulTime">FullTime:</label>
        <input type="text" name="fulTime" 
          value={postJobFormData.fullTime} onChange={updateFullTime} />
            <label for="salry">Salary:</label>
        <input type="text" name="salry" 
          value={postJobFormData.salary} onChange={updateSalary} />
           <label for="loction">Location:</label>
        <input type="text" name="loction" 
          value={postJobFormData.location} onChange={updateLocation} />
          <input onClick={submit} type="submit" value="Submit"></input>
      </form>

    </div>
  )
}

export default PostJob
