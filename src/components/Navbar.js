import React from 'react'

const Navbar = ({ nav }) => {
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#home"><img src="./images/logo.png" alt="logo" className={nav ? 'logo active' : 'logo'}/></a>
            <div>
                <a href="#gallery">Gallery</a>
                <a href="#gallery2">Gallery 2</a>
                <a href="#footer">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
