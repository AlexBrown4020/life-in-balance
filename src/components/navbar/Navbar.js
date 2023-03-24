import { useState } from 'react';

import './navbar.css';

export default function Navbar () {
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [menu, setMenu] = useState('nav-container hidden');

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setMenu('nav-container visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenu('nav-container hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    }

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
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
        </nav>
    )
}