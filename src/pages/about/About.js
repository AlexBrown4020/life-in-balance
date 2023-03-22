import './about.css';

export default function About () {
    return (
        <div id='about-container'>
            <h3>About</h3>
            <div className='about-description'>
                <p>
                    Julie is a fitness instructor from Berkshire, UK, with over 20 years
                    of experience in the fitness world. Currently, she specializes in Hatha Yoga.
                </p>
                <img id='teacher-about-img' alt='teacher pose about container' src='1679371570821.jpg'/>
                <p>
                    "I have taught many various types of classes, and my journey has led me to Yoga,
                    where I have been very lucky to learn from wise and inspiring individuals; sharing my
                    knowledge with my students, and adding a sprinkle of laughter."
                </p>
            </div>
            <section>
                <h4>Testimonials</h4>
                <span className='testimonial-card top'>
                    <div>
                        <p>
                        <img id='teacher-testimonial1' alt='teacher-testimonial1' src='1679288909967.jpg'/>
                            “I started online with Julie through the first lockdown and i have continued 
                            with 1-2-1's because they are so good. The instructions you receive is personalised and 
                            tailored to you and this has allowed me to make fantastic personal progress. 
                            I would have no hesitation to recommend Julie.”
                        </p>     
                        <h5 className='testimonial-name'>-Jo Ray</h5>
                    </div>
                </span>
                <span className='testimonial-card'>
                    <div>
                        <p>
                        <img id='teacher-testimonial2' alt='teacher-testimonial2' src='1679288890729.jpg'/>
                            “I had no idea what to expect online, but knowing Julie through the classes I've attended in 
                            person I knew it would be special . Julie's tone is unique and she creates a calm and reassuring atmosphere. 
                            The session flowed with clear instructions, i would recommend Julie's 1-2-1.”
                        </p>
                        <h5 className='testimonial-name'>-Sandy Philp</h5>
                    </div>
                </span>
            </section>
        </div>
    )
}