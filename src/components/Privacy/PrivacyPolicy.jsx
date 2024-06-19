import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './privacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className='privacy'>
            </div>
            <div className="privacy-container">
                <h2 className="privacy-heading">Privacy Notice</h2>
                <div className="privacy-content">
                    <h5>By visiting AbhiBus platforms ("Website, Mobile site and Mobile Apps"),you are accepting and consenting to the practices described in this Privacy Notice (as defined here in after). This document describes the privacy policy ("Privacy Notice") of Le Travenues Technology Ltd ("AbhiBus" or "we" or "us" or "our")and is designed to explain guest users or registered users of the Website,Mobile site and Mobile Apps, Mobilesite and Mobile Apps including(without limitation) buyers of bus tickets,
                        customers who are using our hotel booking facility, bus partners, bus ticket booking agents, intermediaries who sell services on the Website, Mobile site and Mobile Apps,
                        other users/visitors of the Website, Mobile site and Mobile Apps ("you" or "your" or "yourself"or "user") what data/information we collect, why we collect it, and what we do with it. Your use of and access to the Website, Mobile site and Mobile Apps and the services provided through (i) the Website, Mobile site and Mobile Apps and (ii) mobile site,
                        mobile app and other offline channels including call centers and offices ("Other Interfaces") are inter alia subject to this Privacy Notice and our Terms and Conditions. Any capitalized term used but not defined in this Privacy Notice
                        shall have the meaning attributed to it in our Terms and Conditions.</h5>
                  
                </div>

            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
