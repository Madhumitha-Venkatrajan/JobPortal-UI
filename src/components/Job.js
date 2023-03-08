import React from 'react'
import AppButton from './Button'
import { useNavigate } from 'react-router-dom'


const Job = ({ job }) => {

  const navigate = useNavigate();

  // const onClickApplyNow = () => {
  //   navigate(`/applyJob?id=${job.jobID}`);
  // }

  return (
     <div>
                <h5>{job.companyName}</h5>
                <p>{job.jobTtile}</p>
                <p>{job.fullTime}</p>
                <p>{job.salary}</p>
                <p>{job.location}</p>
</div>
  )
}

export default Job

{/* <h5>{job.companyName}</h5>
      <p>{job.jobTtile}</p>
      <p>{job.fullTime}</p>
      <p>{job.salary}</p>
      <p>{job.location}</p> */}