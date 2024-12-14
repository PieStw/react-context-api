import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useState, useEffect } from "react";
import Card from "../components/card/Card";
import style from "./PostPage.module.css";

export default function PostPage() {
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
      <div className={`${style.list}`}>
        {articleList.map((element, index) => (
          <Card key={index} element={element}></Card>
        ))}
      </div>
    </>
  );
}
