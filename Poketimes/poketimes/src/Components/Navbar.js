import React from 'react'


const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a className="brand-logo">Poke Times</a>
            <ul className="right">
                <li><a href="/"></a>Home</li>
                <li><a href="/about"></a>About</li>
                <li><a href="/contact"></a>Contact</li>
            </ul>
        </div>

        </nav>
    )
}
export default Navbar
