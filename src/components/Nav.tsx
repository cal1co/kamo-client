import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Nav.css';

function Nav() {
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
        </div>
    )
}

export default Nav