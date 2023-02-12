import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/PersonService';
import { bootstrap } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const SignUpForm = () => {
    const [formData, setFormData] = useState(
        {
            name: '',
            phoneNumber: '',
            emailID: '',
            password: '',
            confirmPassword: ''
        })

    const navigate = useNavigate();

    const navigateToJobList = () => {
        // 👇️ navigate to /jobList
        navigate('/jobList');
    };

    const updateFirstName = (e) => {
        setFormData({ ...formData, name: e.target.value })
    }

    const updatephoneNumber = (e) => {
        setFormData({ ...formData, phoneNumber: e.target.value })
    }

    const updateEmailID = (e) => {
        setFormData({ ...formData, emailID: e.target.value })

    }

    const updatePassword = (e) => {
        setFormData({ ...formData, password: e.target.value })

    }

    const updateConfirmPassword = (e) => {
        setFormData({ ...formData, confirmPassword: e.target.value })

    }

    const createUserStatus = (res) => {

        if (res.status == 200) {
            if (res.data.statusCode == 400) {
                alert("User with EmailID already exists.")
                return
            }
            alert("successfully created profile");
            navigateToJobList();
        }
        else {
            alert("Not succeeful");
        }

    }

    const submit = (e) => {
        e.preventDefault()
        createUser(formData, createUserStatus)
    }


    return (
        <Form>

            <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Control type="FullName" placeholder="Enter Full Name" value={formData.name} onChange={updateFirstName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control type="Phone No." placeholder="Enter valid Phone Number" value={formData.phoneNumber} onChange={updatephoneNumber} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="EmailID" placeholder="Enter EmailID" value={formData.emailID} onChange={updateEmailID} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPass">
                <Form.Control type="Password" placeholder="Enter Password" value={formData.password} onChange={updatePassword} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control type="Confirm Password" placeholder="Enter Confirm Passowrd" value={formData.confirmPassword} onChange={updateConfirmPassword} />
            </Form.Group>
            <Button onClick={submit} variant="primary" type="submit" value="Submit">
            SignUp
            </Button>

        </Form>

    )
}

{/* <form>
            <label for="fname">Name:</label>
            <input type="text" name="fname"  value={formData.name} onChange={updateFirstName} />
            <label for="phNum">Phone Number:</label>
            <input type="text" name="phNum"  value={formData.phoneNumber} onChange={updatephoneNumber} />
            <label for="emailID">Email ID:</label>
            <input type="text" name="emailID"  value={formData.emailID} onChange={updateEmailID} />
            <label for="pass">Password:</label>
            <input type="text" name="pass" value={formData.password} onChange={updatePassword} />
            <label for="confirmPass">Confirm Password:</label>
            <input type="text" name="confirmPass"  value={formData.confirmPassword} onChange={updateConfirmPassword} />
            <input onClick={submit} type="submit" value="Submit"></input>
        </form> */}



export default SignUpForm
