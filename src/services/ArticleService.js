import Swal from "sweetalert2";
import { showMessage } from "./Alerts";
import { validateArticle } from "./Validate";


export const save = (title, content, articles, setArticles) => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    const article = {
        title: title,
        content: content,
        dateAndTime: date + " " + time,
      }

    if(validateArticle(article)){
        setArticles(articles => [...articles, article]);
        showMessage("Article created successfully!", "success", "center", false, 2000);
    }
}

export const update = (title, content, articles, setArticles, forUpdate, setForUpdate) => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    const updatedData = {
        title: title,
        content: content,
        dateAndTime: date + " " + time,
    }

    if(validateArticle(updatedData)){
      const newArticles = articles;
      newArticles.map((a) => {
        if(a === forUpdate){
          a.title = updatedData.title;
          a.content = updatedData.content;
          a.dateAndTime = updatedData.dateAndTime;
        }
      })

      
    setArticles(newArticles);
    setForUpdate(null);
    showMessage("Article updated successfully!", "success", "center", false, 2000);

    }
}

export const deleteS = (articles, articleForDelete, setArticles) => {
    Swal.fire({
        text: "Do you want to delete this article?",
        position: "center",
        icon: "question",
        title: "Delete",
        showConfirmButton: true,
        confirmButtonText: "Yes",
        showCancelButton: true
      }).then((result) =>  {
        if(result.isConfirmed){
            const newArticles = [];
            articles.map((a) => {
              if(a != articleForDelete){
                newArticles.push(a);
              }
            })
            setArticles(newArticles);
            showMessage("Article deleted successfully!", "success", "center", false, 2000);
        };
      });
    
}
