import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { IconContext } from "react-icons";
import { GrEdit } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import Input from '../Input';
import './article.css'

const OneArticle = ({article, prepareUpdate, deleteArticle, showArticle}) => {

  let navigate = useNavigate();

  
  const update = () => {
    prepareUpdate(article);
  }

  const deleteThisArticle = () => {
    deleteArticle(article);
  }

  const show = () => {
    showArticle(article);
    navigate("/article");
  }

  let content = "";
  if(article.content.length > 100){
    content = article.content.slice(0, 100) + "..."
  }else{
    content = article.content;
  }

  return (
      <div className="article">
          <div className='toShow' onClick={show} title="Read more">
            <h5>{article.title}</h5>
            <p>{content}</p>
            <p className='created-at'>Created at: {article.dateAndTime}</p>
          </div>
          <div className='btnSection'>
            <IconContext.Provider value={{ size: "1.5em", className: "icon", }}>
              <GrEdit onClick={update} title="Update"  />
              <MdDeleteOutline onClick={deleteThisArticle} title="Delete" />
            </IconContext.Provider>

            
          </div>
      </div>
    
  )
}

export default OneArticle