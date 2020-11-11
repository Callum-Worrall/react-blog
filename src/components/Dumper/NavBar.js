import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const divStyle = {
        display: 'flex'
    }

    const linkStyle = {
        fontSize: '1.2em',
        margin: '.5em',
        color: 'purple'
    }

    return (
        <div style={divStyle}>
            <Link style={linkStyle} to='/'>Home</Link>
            <Link style={linkStyle} to='/dumps/new'>Take a Dump!</Link>
        </div>
    )
}

export default NavBar;