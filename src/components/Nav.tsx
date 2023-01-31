import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LocalStorageLoginObject } from '../types'
import '../style/Nav.css';


function Nav() {

    useEffect(() => {
        console.log('mount nav')
        let obj = localStorage.getItem('user');
        let login:LocalStorageLoginObject
        if (obj != null) {
            // console.log(JSON.parse(obj || ""))
            login = JSON.parse(obj || "false");
            console.log("LOGGED IN WITH TOKEN: ", login)
        } else {
            console.log('NOT LOGGED IN!!!')
        }
        return () => {
            console.log('unmount nav')
        }
    })

    return (
        <div className="NavBar">
            <Link to="/" className="kamo-logo" style={{ textDecoration: 'none' }}>
                <div className="kamo-body">
                    <div className="kamo-eye kamo-eye-left"></div>
                    <div className="kamo-eye kamo-eye-right"></div>
                    <div className="kamo-beak"></div>
                </div>
                <div className="kamo-title">
                    kamo
                </div>
            </Link>
            <div className="chatLink">

            <Link to="/login" className="login-link">
                login
            </Link>
            <Link to="/chat-test" className="chat-link">
                CHAT TEST
            </Link>
            </div>
        </div>
    )
}

export default Nav