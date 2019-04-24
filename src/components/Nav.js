import React from 'react';
import { NavLink } from 'react-router-dom'
import Hamburger from './Hamburger'

const navItems = [
    { name: "Start", path: "/" },
    { name: "Projektowanie", path: "/" },
    { name: "Kod", path: "/" },
    { name: "Animacje", path: "/" },
    { name: "Video", path: "/" },
    { name: "Kontakt", path: "/" },
]
const Nav = () => {

    const menu = navItems.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))

    return (
        <div>
            <Hamburger />
            <nav>
                <ul>
                    {menu}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;