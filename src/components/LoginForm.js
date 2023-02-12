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
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter email" value={loginData.emailID} onChange={eMailID} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" value={loginData.password} onChange={password} />
            </Form.Group>
            <Button onClick={submit} variant="primary" type="submit" value="Submit">
                Login
            </Button>

        </Form>



        // <form>
        //     <label for="eMail">EmailID:</label>
        //     <input type="text" name="eMail"  value={loginData.emailID} onChange={eMailID} />
        //     <label for="passwrd">Password:</label>
        //     <input type="text" name="passwrd"  value={loginData.password} onChange={password} />
        //     <input onClick={submit} type="Submit" value="Submit"></input>
        // </form> 
    );
}

export default LoginForm

