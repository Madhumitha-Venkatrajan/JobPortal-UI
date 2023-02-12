import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import { validateUser } from './services/PersonService';
import JobList from "./components/JobList";
import Home from "./components/Home";
import ApplyJob from "./components/ApplyJob";
import PostJob from "./components/PostJob";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/jobList" element={<JobList />} />
            {/* <Route path="/login" element={<LoginForm />} /> */}
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/applyJob" element={<ApplyJob />} />
            <Route path="/postJob" element={<PostJob />} />
            <Route path="*" element={<Home />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App;