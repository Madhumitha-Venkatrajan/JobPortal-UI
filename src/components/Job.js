import React from 'react'
import AppButton from './Button'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Job = ({ job }) => {

  const navigate = useNavigate();

  // const onClickApplyNow = () => {
  //   navigate(`/applyJob?id=${job.jobID}`);
  // }

  return (
    <div>
      <h5>{job.jobTitle}</h5>
      <p>{job.companyName}</p>
      <p>{job.jobType}</p>
      <p>{job.salary}</p>
      <p>{job.location}</p>
      <Button variant="link">View more</Button>
    </div>
  )
}

export default Job

{/* <h5>{job.companyName}</h5>
      <p>{job.jobTtile}</p>
      <p>{job.fullTime}</p>
      <p>{job.salary}</p>
      <p>{job.location}</p> */}