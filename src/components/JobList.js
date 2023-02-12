import { useState, useEffect } from "react";
import { getJob } from '../services/PersonService';
import Job from "./Job";
import AppButton from "./Button"
import { useNavigate } from 'react-router-dom'

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

  console.log(jobList);

  const navigate = useNavigate();

  const jobPost = () => {
    navigate('/postJob');  
  }

  return (
    <div className="jobListBox">
     <header className="header" >
     <AppButton color='Blue' text='JobPost' kaluthaiXyz={jobPost} />
     </header>
     {jobList.map((job)=>
    <Job key={job.jobID} job={job}></Job> 
     )} 
    </div>

  )
}

export default JobList
//<h3 style={{ color: 'red', cursor: 'pointer' }}>{setJobList}</h3>