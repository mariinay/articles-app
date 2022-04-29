import React from 'react'
import './contact.css'

const QuestionSubmited = ({question}) => {
  return (
    <div className='question-data'>
        <p>Name: {question.name}</p>
        <p>Email: {question.email}</p>
        <p>Question: {question.content}</p>
        <h2>Thank you for contacting us!</h2>
    </div>
  )
}

export default QuestionSubmited