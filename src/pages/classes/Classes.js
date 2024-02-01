import './classes.css';

export default function Classes () {
    return (
        <div id='classes-container'>
            <h3>Classes & Schedule</h3>
            <section id='class-top'>
                Friday Livestream:
                <p className='class-description'>
                    1 hour group session held online at 9AM, every Friday
                </p>
                <ul>
                    <li>Monthly membership at £8 per class</li>
                    <li>Or £10 per class</li>
                    <li>Access to recordings throughout the month</li>
                </ul>
                <p className='classes-info'>*Excluding bank holidays</p>
            </section>
            <section>
                Zoom Session:
                <ul>
                    <li>Private 1-2-1 session</li>
                    <li>Session tailored to your needs</li>
                    <li>£25 per 60 minutes</li>
                </ul>
            </section>
            <section>
                Home Visit:
                <ul>
                    <li>£35-£55 per 75 minutes</li>
                    <li>Equipment available on request</li>
                </ul>
                <p className='classes-info'>*Price dependent on distance</p>
            </section>
            <p className='classes-info'>
                *Block bookings and group sessions are available
            </p>
            <div id='contact-nav'/>
        </div>
    )
}