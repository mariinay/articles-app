import React from 'react'
import Button from '../Button'
import Input from '../Input'

const NewArticle = ({saveTitle, saveContent, article, saveArticle, btnName}) => {

  return (
    <div className="create-article">
        <Input 
            fieldType="text" 
            fieldPlaceholder="Enter title"
            fieldOnChange={saveTitle}
            defaultValue={article != null ? article.title : ""}
            name="title"
        />
        <Input 
            fieldType="textarea" 
            fieldPlaceholder="Enter content"
            fieldOnChange={saveContent}
            defaultValue={article != null ? article.content : ""}
            name="content"
        />
        <Button handle={saveArticle} btnName={btnName} />
    </div>
  )
}

export default NewArticle