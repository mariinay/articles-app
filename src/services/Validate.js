import { showMessage } from "./Alerts";


export const isFieldEmpty = (value) => {
    if (value.length === 0) {
        return true;
    }

    return false;
}

export const isEmailValid = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email != "" && regex.test(email) === true){
        return true;
    }

    return false;
}

export const validateQuestion = (question) => {
    if(isFieldEmpty(question.name) || isFieldEmpty(question.email) || isFieldEmpty(question.content)){
        showMessage("Field can not be empty!", "error", "center", true);
        return false;
    }
    if(!isEmailValid(question.email)){
        showMessage("Email is not valid!", "error", "center", true);
        return false;
    }

    return true;
}

export const validateArticle = (article) => {
    if(isFieldEmpty(article.title) || isFieldEmpty(article.content)){
        showMessage("Field can not be empty!", "error", "center", true);
        return false;
    }

    return true;
}