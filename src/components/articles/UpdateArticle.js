import React from 'react'
import Input from '../Input'
import Button from '../Button'

const UpdateArticle = ({saveTitle, saveContent, article, btnName, updateArticle}) => {

  return (
    <div className="create-article">
        <Input 
            fieldType="text" 
            fieldPlaceholder="Enter title"
            defaultValue={article != null ? article.title : ""}
            fieldOnChange={saveTitle}
            name="title"
        />
        <Input 
            fieldType="text" 
            fieldPlaceholder="Enter content"
            defaultValue={article != null ? article.content : ""}
            fieldOnChange={saveContent}
            name="content"
        />
        <Button handle={updateArticle} btnName={btnName} />
    </div>
  )
}

export default UpdateArticle