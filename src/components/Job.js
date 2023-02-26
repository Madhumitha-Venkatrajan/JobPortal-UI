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
      <Tab.Container>
        <Row>
            <ListGroup>
              <ListGroup.Item action >
                <h5>{job.companyName}</h5>
                <p>{job.jobTtile}</p>
                <p>{job.fullTime}</p>
                <p>{job.salary}</p>
                <p>{job.location}</p>
              </ListGroup.Item>
            </ListGroup>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
  );
}

export default Job

{/* <h5>{job.companyName}</h5>
      <p>{job.jobTtile}</p>
      <p>{job.fullTime}</p>
      <p>{job.salary}</p>
      <p>{job.location}</p> */}