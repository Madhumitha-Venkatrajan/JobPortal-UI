import React from 'react'
import AppButton from './Button'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {

  const navigate = useNavigate();

  const onClickApplyNow = () => {
    navigate(`/applyJob?id=${job.jobID}`);
  }
  

  return (
    <div className="job">
     <h4>{job.companyName }</h4> 
     <p>{job.jobTtile}</p>
     <p>{job.location}</p>
     <p>{job.fullTime}</p>
     <p>{job.salary}</p>
     <AppButton color='Blue' text='ApplyNow' kaluthaiXyz={onClickApplyNow}/>

    </div>
  )
}

export default Job
