import React from 'react';
import '../style/Home.css'

import Nav from '../components/Nav'
import SignupModal from '../components/SignupModal'

function Home() {
    return (
        <div className="home" data-testid="landing-page">
            <div className="landing-page">
                <SignupModal/>
            </div>
        </div>
    )
}

export default Home