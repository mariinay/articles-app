import React from 'react'
import OneArticle from './OneArticle'
import './article.css'

const Articles = ({ articles, prepareUpdate, deleteArticle, showArticle }) => {

  return (
      <div className='articles-list'>
        {articles[0] != null ? articles.map((article, index) =>{
            return <OneArticle key={index} article={article} prepareUpdate={prepareUpdate} deleteArticle={deleteArticle} showArticle={showArticle} />
        })
        :
            <p className='noArticles'>No articles</p>
        }
      </div>

  )
}

export default Articles