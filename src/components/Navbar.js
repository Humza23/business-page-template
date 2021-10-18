import React from 'react'

const Navbar = ({ nav }) => {
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="/business-page-template/#home"><img src="./images/logo.png" alt="logo" className={nav ? 'logo active' : 'logo'}/></a>
            <div>
                <a href="/business-page-template/#gallery">Gallery</a>
                <a href="/business-page-template/#gallery2">Gallery 2</a>
                <a href="/business-page-template/#footer">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
