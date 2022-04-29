import React, { useState } from 'react'
import Input from '../Input'
import "./contact.css"
import Button from '../Button'

const ContactForm = ({saveData, saveQuestion}) => {
 
  

  return (
    <div className='form-elements'>
        <Input fieldType="text" fieldPlaceholder="Name" defaultValue="" fieldOnChange={saveData} name="name"/>
        <Input fieldType="text" fieldPlaceholder="Email" defaultValue="" fieldOnChange={saveData} name="email" />
        <Input fieldType="textarea" fieldPlaceholder="Enter your question" defaultValue="" fieldOnChange={saveData} name="content"/>
        <Button handle={saveQuestion} btnName="Submit" />
      </div>
    
  )
}

export default ContactForm