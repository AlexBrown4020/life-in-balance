import './navbar.css';

export default function Navbar () {
    return (
        <nav>
            <div>
                <h1> Life in Balance </h1>
            </div>
            <div id='nav-container'>
                <button><a href='#home-nav'>Home</a></button>
                <button><a href='#classes-nav'>Classes</a></button>
                <button><a href='#contact-nav'>Contact</a></button>
                <button><a href='#about-nav'>About</a></button>
            </div>
        </nav>
    )
}