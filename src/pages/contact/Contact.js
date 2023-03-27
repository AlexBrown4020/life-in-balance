import { useState } from 'react';
import Email from '../../components/email/Email';
import './contact.css';

export default function Contact () {

    const [emailForm, setEmailForm] = useState(false);

    const toggleEmail = () => {
        setEmailForm(!emailForm);
    };

    return (
        <div id='contact-container'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            <h3>Contact Me</h3>
            <img id='client-image' alt='client contact' src='1679288947320.jpg'/>
            <p>
                Send an email or Facebook message to set up your sessions.
                Be sure to check me out on Instagram!
            </p>
            {
                emailForm ? <Email toggleEmail={toggleEmail}/>
                : <></>
            }
                <div id='social-media-container'>
                    <a href='https://www.facebook.com/JulieBrownLIB'><img  alt='facebook' src='facebook.png'/></a>
                    <a href='#contact-container' onClick={() => {
                        toggleEmail();
                    }}><img alt='mail' src='mail.png'/></a>
                    <a href='https://www.instagram.com/julie200brown/'><img alt='instagram' src='instagram.png'/></a>
                </div>
            <div id='about-nav'/>
        </div>
    )
}