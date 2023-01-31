import { useState } from 'react';
import { axiosConfig } from '../types';
import axios from 'axios';

function LoginModal() {

    const [emailOrUsername, setEmailOrUsername] = useState(String)
    const [password, setPassword] = useState(String)

    const handleSubmit = async () => {
        const config:axiosConfig = {
            method: "post",
            url: "http://localhost:8080/api/v1/auth/authenticate",
            headers:{
                Accept: 'application/json', 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": true
            },
            data: JSON.stringify({
                email: emailOrUsername, password: password
            })
        }

        axios(config)
        .then((res) => {
            console.log("RESPONSE: ", res.data);
            localStorage.setItem('user', JSON.stringify(res.data));
        })
        .catch((err) => {
            console.log("INCORRECT PASSWORD OR USERNAME")
            console.log("ERROR: ", err.message)
        })
   
        
    }

    const handleEmailInput = (event: React.FormEvent<HTMLInputElement>): void => {
        setEmailOrUsername(event.currentTarget.value);
    };
    const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>): void => {
        setPassword(event.currentTarget.value);
    };


    return (
        <div className="login">
            <div className={"signin-form-field"} data-testid="signin-email-wrapper" >
                    <input onChange={handleEmailInput} type="text" id="email-signin" data-testid="email-input-field"/>
                    {/* <label htmlFor="email-signin">Email address</label> */}
            </div>
            <div className={"signin-form-field"} data-testid="signin-email-wrapper" >
                    <input onChange={handlePasswordInput} type="text" id="email-signin" data-testid="email-input-field"/>
                    {/* <label htmlFor="email-signin">Email address</label> */}
            </div>
            <button className="submit" onClick={handleSubmit}>login</button>
        </div>
    )
}

export default LoginModal