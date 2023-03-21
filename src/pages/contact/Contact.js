import './contact.css';

export default function Contact () {
    return (
        <div id='contact-container'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            <h3>Contact Me</h3>
            <p>Send an email or Facebook message to set up your sessions.
                Be sure to check me out on Instagram!
            </p>
            <img id='user-contact' alt='user-contact' src='1679288947320.jpg'/>
            <div id='social-media-container'>
                <a href='https://www.facebook.com/JulieBrownLIB'><img  alt='facebook' src='facebook.png'/></a>
                <img alt='mail' src='mail.png'/>
                <a href='https://www.instagram.com/julie200brown/'><img alt='instagram' src='instagram.png'/></a>
            </div>

        </div>
    )
}