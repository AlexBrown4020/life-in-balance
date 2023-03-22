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
                </ul>
            </section>
            <section>
                Zoom Session:
                <ul>
                    <li>£25 per 60 minutes</li>
                    <li>Camera and a stable internet connection</li>
                </ul>
            </section>
            <section>
                Home Visit:
                <ul>
                    <li>£35-£45 per 75 minutes</li>
                    <li>Equipment available on request</li>
                </ul>
            </section>
            <p className='classes-info'>
                *Block bookings and group sessions are available
            </p>
            <p className='classes-info'>
                **Home visits are limited by distance/location
            </p>
            <div id='contact-nav'/>
        </div>
    )
}