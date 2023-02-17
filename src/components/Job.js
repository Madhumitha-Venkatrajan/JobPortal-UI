import React from 'react'
import AppButton from './Button'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Job = ({ job }) => {

  const navigate = useNavigate();

  // const onClickApplyNow = () => {
  //   navigate(`/applyJob?id=${job.jobID}`);
  // }

  return (
    <div >
      <h5>{job.companyName}</h5>
      <p>{job.jobTtile}</p>
      <p>{job.fullTime}</p>
      <p>{job.salary}</p>
      <p>{job.location}</p>
    </div>
  )

}



export default Job
// className="job"

{/* <Card style={{ width: '18rem' }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{job.companyName}</ListGroup.Item>
          <ListGroup.Item>{job.jobTtile}</ListGroup.Item>
          <ListGroup.Item>{job.location}</ListGroup.Item>
          <ListGroup.Item>{job.fullTime}</ListGroup.Item>
          <ListGroup.Item>{job.salary}</ListGroup.Item>
        </ListGroup>
      </Card> */}
{/* <h4>{job.companyName }</h4> 
     <p>{job.jobTtile}</p>
     <p>{job.location}</p>
     <p>{job.fullTime}</p>
     <p>{job.salary}</p>
     <AppButton color='Blue' text='ApplyNow' kaluthaiXyz={onClickApplyNow}/> */}
