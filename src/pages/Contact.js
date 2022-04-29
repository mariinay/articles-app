import React, { useState } from 'react'
import ContactForm from '../components/contact/ContactForm'
import QuestionSubmited from '../components/contact/QuestionSubmited';
import "../components/contact/contact.css"
import { validateQuestion } from "../services/Validate";


const Contact = () => {

    const [submited, setSubmited] = useState(false);
    const [question, setQuestion] = useState(
        {
        name:"",
        email:"",
        content:""
        }
    )

    const saveData = (e) => {
        let newData = question;
        newData[e.target.name] = e.target.value;
        setQuestion(newData);
    }

    const saveQuestion = () => {
        if(validateQuestion(question)){
            setSubmited(true);
        }
    }

  return (
    <div className='contact'>
        {!submited ?
            <div className='contact-component'>
                <ContactForm saveData={saveData} saveQuestion={saveQuestion} />
            </div>
        :
            <div className='contact-component'>
                <QuestionSubmited question={question} />
            </div>
        }
    </div>
  )
}

export default Contact