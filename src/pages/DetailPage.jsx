import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DetailPage() {
  const { id } = useParams();

  const [article, setArticle] = useState([]);

  function fetchArticle() {
    fetch(`http://localhost:3000/post/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <div className="list">
        <div className="item">
          <div className="card">
            <img src={article.img} className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">{article.name}</h2>
              <h5 className="card-subtitle ">{article.author}</h5>
              <h5 className="card-subtitle mt-1">{article.state}</h5>
              <p className="card-text">{article.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
