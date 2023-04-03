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
                    <li>Monthly membership at £6 per class</li>
                    <li>Or £7 per class</li>
                    <li>Access to recordings throughout the month</li>
                </ul>
                <p className='classes-info'>*Excluding bank holidays</p>
            </section>
            <section>
                Zoom Session:
                <ul>
                    <li>£25 per 60 minutes</li>
                </ul>
            </section>
            <section>
                Home Visit:
                <ul>
                    <li>£35-£45 per 75 minutes</li>
                    <li>Equipment available on request</li>
                </ul>
                <p className='classes-info'>*Limited by distance</p>
            </section>
            <p className='classes-info'>
                *Block bookings and group sessions are available
            </p>
            <div id='contact-nav'/>
        </div>
    )
}