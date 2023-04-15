import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { editPersonDetails } from '../services/PersonService';
import { editPersonPost } from '../services/PersonService';

const EditProfile = () => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [editFormData, setEditFormData] = useState(
    {
      name: '',
      phoneNumber: '',
      emailID: localStorage.getItem('EmailID'),
      experience: '',
      education: '',
      skills: ''
    })

  useEffect(() => {
     editPersonDetails(setEditFormData,'emailID')
  }, []);

  const updateName = (e) => {
    setEditFormData({ ...editFormData, name: e.target.value })
  }

  const updatePhoneNumber = (e) => {
    setEditFormData({ ...editFormData, phoneNumber: e.target.value })
  }

  const updateEmailID = (e) => {
    setEditFormData({ ...editFormData, emailID: e.target.value })
  }
  const updateExperience = (e) => {
    setEditFormData({ ...editFormData, experience: e.target.value })
  }
  const updateEducation = (e) => {
    setEditFormData({ ...editFormData, education: e.target.value })
  }
  const updateSkills = (e) => {
    setEditFormData({ ...editFormData, skills: e.target.value })
  }

  const profileEdited = (res) => {
    if(res!="failure"){
   alert("saved Person details successfully")
  }
  else{
    alert("Person details saved failed, try again later")
  }
}

  const submit = (e) => {
    e.preventDefault()
    editPersonPost(editFormData,profileEdited)

  }
  return (
    <div>
    <form>

      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Control type="FullName" placeholder="Enter Full Name" value={editFormData.name} onChange={updateName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Control type="Phone No." placeholder="Enter valid Phone Number" value={editFormData.phoneNumber} onChange={updatePhoneNumber} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="EmailID" placeholder="Enter EmailID" value={editFormData.emailID} onChange={updateEmailID} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicExp">
        <Form.Control type="Experience" placeholder="Enter Experience" value={editFormData.experience} onChange={updateExperience} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEducation">
        <Form.Control type="Education" placeholder="Enter Education" value={editFormData.education} onChange={updateEducation} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSkills">
        <Form.Control type="Skills" placeholder="Enter Skills" value={editFormData.skills} onChange={updateSkills} />
      </Form.Group>
      <Button onClick={submit} variant="primary" type="Save" value="Save">
                Save Changes
            </Button>
      </form>
      </div>
    
  );
}



export default EditProfile
