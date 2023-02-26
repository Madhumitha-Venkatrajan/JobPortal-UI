import React from 'react'
import AppButton from './Button'
import { useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Job = ({ job }) => {

  const navigate = useNavigate();

  // const onClickApplyNow = () => {
  //   navigate(`/applyJob?id=${job.jobID}`);
  // }

  return (
    <div className='w-100'>
      <h5>{job.companyName}</h5>
      <p>{job.jobTtile}</p>
      <p>{job.fullTime}</p>
      <p>{job.salary}</p>
      <p>{job.location}</p>
    </div>
  );
}

export default Job
