import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { validateUser } from '../services/PersonService';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {

    const [loginData, setLoginData] = useState(
        {
            emailID: '',
            password: ''
        }
    )


    const navigate = useNavigate();

    const navigateToJobList = () => {
        // 👇️ navigate to /jobList
        navigate('/jobList');
    };

    const eMailID = (e) => {
        setLoginData({ ...loginData, emailID: e.target.value })
    }

    const password = (e) => {
        setLoginData({ ...loginData, password: e.target.value })
    }

    const afterValidateUser = (res) => {
        if (res.status !== 200) {
            alert("Try again later");
            return;
        }
        if (res.status == 200) {
            alert("Logged in successfully");
            localStorage.setItem('EmailID', loginData.emailID)
            sessionStorage.setItem('jwttoken', res.data.jwttoken);
            sessionStorage.setItem('refreshtoken', res.data.refreshtoken);
            sessionStorage.setItem('authTokenTime', (new Date()).getTime());
            navigateToJobList();
        }
        else {
            alert("Enterred EmailID or password is incorrect ");
        }
    }


    const submit = (e) => {
        e.preventDefault()
        validateUser(loginData.emailID, loginData.password, afterValidateUser)
    }

    return (
        <Form>

            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter email" value={loginData.emailID} onChange={eMailID} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" value={loginData.password} onChange={password} />
            </Form.Group>
            <Button onClick={submit} variant="primary" type="submit" value="Submit">
                Login
            </Button>

        </Form>
    );
}

export default LoginForm

