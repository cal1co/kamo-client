import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { LocalStorageLoginObject } from '../types'
import '../style/Nav.css';

const variable = import.meta.env.VITE_LOCALSTORAGE_SECRET_KEY

function Nav() {

    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const currUser = (localStorage.getItem('user') || "null")
        let login:LocalStorageLoginObject
        if (localStorage.getItem('user') !== null) {
            setLoggedIn(true);
            login = JSON.parse(currUser);
        } else {
            setLoggedIn(false);
        }
        return () => {
            // console.log('unmount nav')
        }
    })

    const logoutUser = ():void => {
        localStorage.clear()
        setLoggedIn(false)
    }

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
            {
                loggedIn 
                ?
                <Link to="/" className="logout-link" onClick={logoutUser}>
                    logout
                </Link>
                :
                <Link to="/login" className="login-link">
                    login
                </Link>
            }
            <Link to="/chat-test" className="chat-link">
                CHAT TEST
            </Link>
            </div>
        </div>
    )
}

export default Nav