import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './menu.css'

const MenuItem = ({title, route, boldItem, setBoldItem}) => {

    let navigate = useNavigate();

    const bold = () => {
      setBoldItem(route);
    }

  return (

    boldItem == route ?
      <b><Link to={route} className='item' onClick={bold}>{title}</Link></b>
    :
      <Link to={route} className='item' onClick={bold}>{title}</Link>
  )
}

export default MenuItem