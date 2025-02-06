import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;