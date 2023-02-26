import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/PersonService';
import { bootstrap } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const SignUpForm = () => {
    const [formData, setFormData] = useState(
        {
            name: '',
            phoneNumber: '',
            roleID: ''
        })

    const [formDataPass, setFormDataPass] = useState(
        {
            emailID: '',
            password: '',
            //  confirmPassword: ''
        })

    const roles = [
        { roleID: "1", roleName: "Job Seeker" },
        { roleID: "2", roleName: "Job Provider" }
    ];

    const getRoleNameByID = (roleID) => {
        const filteredRole = roles.filter((role) => {
            return role.roleID == roleID;
        });
        if (filteredRole == null || filteredRole.length <= 0) return "";
        return filteredRole[0].roleName;
    }

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


    const updateRoleID = (e) => {
        console.log(e);
        setFormData({ ...formData, roleID: e })
    }

    const updateEmailID = (e) => {
        setFormDataPass({ ...formDataPass, emailID: e.target.value })

    }

    const updatePassword = (e) => {
        setFormDataPass({ ...formDataPass, password: e.target.value })

    }

    // const updateConfirmPassword = (e) => {
    //     setFormData({ ...formData, confirmPassword: e.target.value })

    // }

    const createUserStatus = (res) => {

        if (res.status == 200) {
            if (res.data.statusCode == 400) {
                alert("User with EmailID already exists.")
                return
            }
            alert("successfully created profile");
            sessionStorage.setItem('EmailID', formDataPass.emailID)
            sessionStorage.setItem('jwttoken',res.data.jwttoken);
            sessionStorage.setItem('refreshtoken',res.data.refreshtoken);
            sessionStorage.setItem('authTokenTime', (new Date()).getTime());
            navigateToJobList();
        }
        else {
            alert("Not succeeful");
        }

    }

    const submit = (e) => {
        e.preventDefault()
        createUser(formData,formDataPass.emailID,formDataPass.password, createUserStatus)
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
                <Form.Control type="EmailID" placeholder="Enter EmailID" value={formDataPass.emailID} onChange={updateEmailID} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPass">
                <Form.Control type="Password" placeholder="Enter Password" value={formDataPass.password} onChange={updatePassword} />
            </Form.Group>
            <DropdownButton onSelect={updateRoleID} variant="light" title={getRoleNameByID(formData.roleID)}>
                {roles.map((role) =>
                    <Dropdown.Item eventKey={role.roleID}>{role.roleName}</Dropdown.Item>
                )}
            </DropdownButton>
            <div class="lead my-4">
                <Button onClick={submit} variant="primary" type="submit" value="Submit">
                    SignUp
                </Button>
            </div>
        </Form>

    );
}


export default SignUpForm
