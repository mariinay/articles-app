import React from 'react'
import Menu from './menu/Menu'
import './header.css'
import logo from '../../../images/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt='Logo'/>
        <Menu />
    </div>
  )
}

export default Header