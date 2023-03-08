import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { getPersonDetails } from '../services/PersonService';
import Modal from 'react-bootstrap/Modal';
import {FaEdit} from "react-icons/fa";

const ViewProfile = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState(
        {
            name: '',
            phoneNumber: '',
            emailID: localStorage.getItem('EmailID'),
            experience: '',
            education: '',
            skills: ''
        })

    useEffect(() => {
        getPersonDetails(setFormData,'emailID')
    }, []);

    const updateName = (e) => {
        setFormData({ ...formData, name: e.target.value })
    }

    const updatePhoneNumber = (e) => {
        setFormData({ ...formData, phoneNumber: e.target.value })
    }

    const updateEmailID = (e) => {
        setFormData({ ...formData, emailID: e.target.value })
    }
    const updateExperience = (e) => {
        setFormData({ ...formData, experience: e.target.value })
    }
    const updateEducation = (e) => {
        setFormData({ ...formData, education: e.target.value })
    }
    const updateSkills = (e) => {
        setFormData({ ...formData, skills: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()

    }
    return (
                <form>
                    <div class="form-group row" > 
                        <label for="staticEmail" class="col-sm-2 col-form-label">Name: </label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" 
                                id="staticEmail"value={formData.name}/>
                        </div>
                        <label for="staticEmail" class="col-sm-2 col-form-label">PhoneNumber:</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext"
                                id="staticEmail" value={formData.phoneNumber} />
                        </div>
                        <label for="staticEmail" class="col-sm-2 col-form-label">EmailID:</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext"
                                id="staticEmail" value={formData.emailID} />
                        </div>
                        <label for="staticEmail" class="col-sm-2 col-form-label">Experience:</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext"
                                id="staticEmail" value={formData.experience} />
                        </div>
                        <label for="staticEmail" class="col-sm-2 col-form-label">Education:</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext"
                                id="staticEmail" value={formData.education} />
                        </div>
                        <label for="staticEmail" class="col-sm-2 col-form-label">Skills:</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext"
                                id="staticEmail" value={formData.skills} />
                        </div>
                    </div>
                </form>
    );
}


export default ViewProfile
{/* <Form>
        //     <FloatingLabel>{formData.name}</FloatingLabel>
        //     <FloatingLabel >{formData.phoneNumber}</FloatingLabel>
        //     <FloatingLabel>{formData.emailID}</FloatingLabel>
        //     <FloatingLabel >{formData.experience} </FloatingLabel>
        //     <FloatingLabel>{formData.education}</FloatingLabel>
        //     <FloatingLabel >{formData.skills} </FloatingLabel>
        </Form> */}

{/* <Form>
            <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Control type="FullName" placeholder="Enter Full Name" value={formData.name} onChange={updateName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control type="Phone No." placeholder="Enter valid Phone Number" value={formData.phoneNumber} onChange={updatePhoneNumber} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="EmailID" placeholder="Enter EmailID" value={formData.emailID} onChange={updateEmailID} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicExperience">
                <Form.Control type="Experience" placeholder="Enter Experience in years" value={formData.experience} onChange={updateExperience} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEducation">
                <Form.Control type="Education" placeholder="Enter highest level of Education" value={formData.education} onChange={updateEducation} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSkills">
                <Form.Control type="Skills" placeholder="Enter Skills eg: C#, Java, Python " value={formData.skills} onChange={updateSkills} />
            </Form.Group>
            <div class="lead my-4">
                <Button onClick={submit} variant="primary" type="submit" value="Submit">
                    Save
                </Button>
                <Button onClick={submit} variant="primary" type="submit" value="Submit">
                    Cancel
                </Button>
            </div>
        </Form> */}
