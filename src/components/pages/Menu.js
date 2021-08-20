import React from 'react'
import '../styles/menu.css';
function Menu() {
    return (
        <nav className="Nav">
            <navmenu className="NavMenu">
                <li>
                    <a href = "/"className="Navlink" >Home</a>
                </li>
                <li>
                    <a href='/User' className="Navlink">User</a>
                </li>
                <li>
                    <a href='/Company' className="Navlink">Company</a>
                </li>
                <li>
                    <a href='/Contact' className="Navlink">Contact</a>
                </li>
            </navmenu>
        </nav>
    )
}

export default Menu
