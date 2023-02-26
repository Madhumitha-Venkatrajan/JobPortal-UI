import axios from "axios";
import { Buffer } from "buffer";




// export const createUser = (person, callBack) => {
//     axios.post(
//         "https://localhost:7297/api/JobPortalAPI", person
//     ).then(callBack);

// }

export const createUser = (person,password,callBack) => {
    const base64encodedData = Buffer.from(`${password}`).toString('base64');
    axios.post(
        "https://localhost:7297/api/JobPortalAPI", person, {
            headers: {
                'Authorization': `Basic ${base64encodedData}`
            }
        }
    ).then(callBack);
}

export const createJobPost = (postJobFormData, callBack) => {
    axios.post(
        "https://localhost:7297/api/JobPortalAPI/postJob", postJobFormData
    ).then((res) => {
        if (res.status !== 201) {
            if (callBack != null && typeof (callBack) == "function") callBack("failure");

        }
        else {
            if (callBack != null && typeof (callBack) == "function") callBack(res.data);
        }
    });

}

export const jobApplied = (formData, callBack) => {


    axios.post(
        "https://localhost:7297/api/JobPortalAPI/appliedJobs", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    ).then(callBack);

}

// const afterValidateUser = (res) => {
//    if(res.status!==200){
//     alert("Try again later");
//     return;
//    }
//    if(res.data==true){
//     alert("Logged in successfully");
//    }
//    else{
//     alert("Enterred EmailID or password is incorrect ");
//    }

//     // console.log(res)
// }

export const renewAuthToken = () => {
    const jwtToken = sessionStorage.getItem('jwttoken');
    const refreshToken = sessionStorage.getItem('refreshtoken');
    axios.post(
        "https://localhost:7297/api/JobPortalAPI/RefToken",{
            jwttoken : jwtToken,
            refreshtoken : refreshToken  
        }
    ).then((res) => {
        if (res.status == 200){
            sessionStorage.setItem('jwttoken', res.data.jwttoken);
            sessionStorage.setItem('refreshtoken', res.data.refreshtoken);
            sessionStorage.setItem('authTokenTime', (new Date()).getTime());
            setTimeout(renewAuthToken, 900000);
        }
    });
}

export const validateUser = (emailID, password, callBack) => {
    const base64encodedData = Buffer.from(`${emailID}:${password}`).toString('base64');
    axios.get(
        `https://localhost:7297/api/JobPortalAPI/GetToken`,
        {
            headers: {
                'Authorization': `Basic ${base64encodedData}`
            }
        }
    ).then((res) => {
        if (res.status == 200) {
            setTimeout(renewAuthToken, 900000);
            callBack(res);
        }
    });

}


//.then(callBack);
export const getJob = (callBack) => {
    // console.log("Calling api for job list data");
    axios.get(
        "https://localhost:7297/api/JobportalAPI/allJobs"
    ).then((res) => {
        console.log("Received response from api");
        if (res.status !== 200) {
            if (callBack != null && typeof (callBack) == "function") callBack([]);

        }
        else {
            if (callBack != null && typeof (callBack) == "function") callBack(res.data);
        }
    });
}
