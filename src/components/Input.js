import React from 'react'
import "./contact/contact.css"


const Input = ({fieldType, fieldPlaceholder, defaultValue, fieldOnChange, name}) => {


    return (
        fieldType == "textarea" ? 
            <textarea className='input textarea' 
                name={name}
                cols={50} 
                rows={4} 
                placeholder={fieldPlaceholder} 
                defaultValue={defaultValue}
                onChange={fieldOnChange}>  
            </textarea>
        : 
            <input className='input inputField'
                type={fieldType}
                name={name}
                placeholder={fieldPlaceholder} 
                onChange={fieldOnChange}
                defaultValue={defaultValue}
            />
    );
}

export default Input