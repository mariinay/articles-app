import React, { useState } from 'react'
import Articles from '../components/articles/Articles'
import NewArticle from '../components/articles/NewArticle'
import '../styles/home.css'
import { save, update, deleteS } from '../services/ArticleService'


const Home = ({articles, setArticles, showArticle}) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveTitle = (e) => {
    setTitle(e.target.value);
  }
  const saveContent = (e) => {
    setContent(e.target.value);
  }


  const saveArticle = () => {
    save(title, content, articles, setArticles);
  }

  const [forUpdate, setForUpdate] = useState(null);
  const [newTitle, setNewTitle] = useState();
  const [newContent, setNewContent] = useState();
  const prepareUpdate = (article) => {
    setForUpdate(article);
    setNewTitle(article.title);
    setNewContent(article.content);
  }
 
  const updateTitle = (e) => {
    setNewTitle(e.target.value);
  }
  const updateContent = (e) => {
    setNewContent(e.target.value);
  }
  const updateArticle = () => {
    update(newTitle, newContent, articles, setArticles, forUpdate, setForUpdate);

  }
  const deleteArticle = (articleForDelete) => {
    deleteS(articles, articleForDelete, setArticles);
  }
  
  return (
    <>
      <div className='home'>
        <div className='articles component'>
          <Articles 
            articles={articles} 
            prepareUpdate={prepareUpdate} 
            deleteArticle={deleteArticle} 
            showArticle={showArticle} 
          />
        </div>
        <div className='new-article component'>
          <h3>Create new article</h3>
          <NewArticle 
            saveTitle={saveTitle}
            saveContent={saveContent} 
            article={forUpdate} 
            saveArticle={saveArticle}
            btnName="Save"
          />
        </div>
      </div>
      {forUpdate != null &&
        <div className='overlay'>
          <div className='update-form'>
            <NewArticle 
              saveTitle={updateTitle}
              saveContent={updateContent} 
              article={forUpdate} 
              saveArticle={updateArticle}
              btnName="Update" 
             />
          </div>
        </div>
      } 
    </>
  )
}

export default Home