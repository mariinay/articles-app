import React from 'react'
import "../styles/button.css"


const Button = ({handle, btnName}) => {


  return (
    <button type="submit" className="btn" onClick={handle}>{btnName}</button>
  )
}

export default Button