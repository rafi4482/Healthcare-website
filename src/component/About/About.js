import './About.css'
import React from 'react';
import Foot from '../../Foot/Foot';

const About = () => {
    return (
        <>
        <div className="text-align">
        <h1 >Why choose us?</h1>
            <p>We have a high success rate when it comes to our recovery rate. We always try to provide best healthcare service to our patients</p>
        </div >
        <div className="text-align">
        <h1>What are the services?</h1>
            <p>We provide ultramodern X-Ray,ECG,Cardopvascular therapy,ENT care and many more</p>
        </div>
        <div className="text-align">
        <h1>What about the memberships?</h1>
            <p>Our members get a discount and a priority service</p>
        </div>
       
        </>
    );
};

export default About;