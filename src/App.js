import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react"
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import { validateUser, renewAuthToken } from './services/PersonService';
import JobList from "./components/JobList";
import Home from "./components/Home";
import ApplyJob from "./components/ApplyJob";
import PostJob from "./components/PostJob";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewProfile from "./components/ViewProfile";



const App = () => {

  sessionStorage.getItem('EmailID')

  useEffect(() => {
    if (sessionStorage.getItem('jwttoken') == null) return;
    const authTokenTime = sessionStorage.getItem('authTokenTime');
    const currentTime = new Date().getTime();
    let timeDelay = 0;
    let expectedRenewalTime = authTokenTime + 900000;//15min 
    if (expectedRenewalTime >= currentTime) timeDelay = expectedRenewalTime - currentTime;
    setTimeout(renewAuthToken, timeDelay);
  }, []);

  // const refreshToken = () => {
  //   if (sessionStorage.getItem('jwttoken') == null) return;
  //   const authTokenTime = sessionStorage.getItem('authTokenTime');
  //   const currentTime = new Date().getTime();
  //   let timeDelay = 0;
  //   let expectedRenewalTime = authTokenTime + 30000;
  //   if (expectedRenewalTime >= currentTime) timeDelay = expectedRenewalTime - currentTime;
  //   setTimeout(renewAuthToken, timeDelay);
  // }

  // refreshToken();


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jobList" element={<JobList />} />
        <Route path="/viewProfile" element={<ViewProfile/>} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
        {/* <Route path="/signUp" element={<SignUpForm />} /> */}
        <Route path="/applyJob" element={<ApplyJob />} />
        <Route path="/postJob" element={<PostJob />} />
        <Route path="*" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App;