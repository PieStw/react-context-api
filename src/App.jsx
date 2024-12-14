import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostPage from "./pages/PostPage";
import DefaultLayout from "./layouts/DefaultLayout";
import DetailPage from "./pages/DetailPage";
import Contex from "./contex/Contex";

function App() {
  const [articleList, setArticleList] = useState([]);

  function fetchAllArticle() {
    fetch("http://localhost:3000/post")
      .then((res) => res.json())
      .then((data) => setArticleList(data.posts));
  }

  useEffect(() => {
    fetchAllArticle();
  }, []);

  return (
    <>
      <Contex.Provider value={articleList}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/aboutus" element={<AboutUsPage />}></Route>
              <Route path="/postpage" element={<PostPage />}></Route>
              <Route
                path="/postpage/detail/:id"
                element={<DetailPage />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Contex.Provider>
    </>
  );
}

export default App;
