import { useState } from 'react';

import './navbar.css';

export default function Navbar () {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [menu, setMenu] = useState('nav-container hidden');

    const updateMenu = () => {
        if(!isMenuClicked) {
            setMenu('nav-container visible');
        } else {
            setMenu('nav-container hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <nav>
            <div>
                <h1> Life in Balance </h1>
            </div>
            <div class={menu}>
                <a href='#home-nav' onClick={updateMenu}>Home</a>
                <a href='#classes-nav' onClick={updateMenu}>Classes</a>
                <a href='#contact-nav' onClick={updateMenu}>Contact</a>
                <a href='#about-nav' onClick={updateMenu}>About</a>
            </div>
            <div className='burger-menu' onClick={updateMenu}>
                <div className='burger-bar'></div>
                <div className='burger-bar'></div>
                <div className='burger-bar'></div>
            </div>
        </nav>
    )
}