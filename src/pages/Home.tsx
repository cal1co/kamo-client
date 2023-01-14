import React from 'react';

import Nav from '../components/Nav'

function Home() {
    return (
        <div className="home" data-testid="landing-page">
            <Nav/>
            <div className="landing-page">
                Hello, World!
            </div>
        </div>
    )
}

export default Home