import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/Button'
import '../components/articles/article.css'

const FullArticle = ({article}) => {

    let navigate = useNavigate();

    const back = () => {
        navigate("/");
    }
    
  return (
    <div className='fullArticlePage'>
      <div className='fullArticle'>
        <h3>{article.title}</h3>
        <p>{article.content}</p>
        <p className='created-at'>Created at: {article.dateAndTime}</p>
      </div>
      <div className='btnBack'>
        <Button handle={back} btnName="Back to home page"/>
      </div>

    </div>

  )
}

export default FullArticle