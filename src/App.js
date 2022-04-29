import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { useState } from "react";
import FullArticle from "./pages/FullArticle";


function App() {

  const [articles, setArticles] = useState([]);
  const [showFullArticle, setShowFullArticle] = useState();
  const showArticle = (article) => {
    setShowFullArticle(article);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home articles={articles} setArticles={setArticles} showArticle={showArticle} /></Layout>}></Route>
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>}></Route>
        <Route path="/contact" element={<Layout><Contact /></Layout>}></Route>
        <Route path="/article" element={<Layout><FullArticle article={showFullArticle} /></Layout>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
