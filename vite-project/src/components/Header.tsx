import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
    return (
        <header>
            <h1>Andrew Angus</h1>
            <nav>
                <Navigation />
            </nav>
        </header>
    );
}

export default Header;