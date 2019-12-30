import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Kelly Nguyen</h1>
        <p>Full-Stack Web Developer | Designer</p>
    </header>
)

export default Header
