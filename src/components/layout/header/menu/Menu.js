import React, { useState } from 'react'
import MenuItem from './MenuItem'
import './menu.css'

const Menu = () => {

  const [boldItem, setBoldItem] = useState("/");

  return (
    <div className='menu'>
        <MenuItem title={"Home"} route={"/"} boldItem={boldItem} setBoldItem={setBoldItem} />
        <MenuItem title={"Abou Us"} route={"/about-us"} boldItem={boldItem} setBoldItem={setBoldItem}/>
        <MenuItem title={"Contact"} route={"/contact"} boldItem={boldItem} setBoldItem={setBoldItem}/>
    </div>
  )
}

export default Menu