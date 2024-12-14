import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ element }) {
  return (
    <div className="list">
      <div className="item">
        <div className={`${style.card}`}>
          <img src={element.img} className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">{element.name}</h2>
            <h5 className="card-subtitle ">{element.author}</h5>
            <h5 className="card-subtitle mt-1">{element.state}</h5>
            <p className="card-text">{element.content}</p>
            <p>Tags:</p>

            {element.tags[0] && (
              <span className="badge text-bg-primary me-2">HTML</span>
            )}
            {element.tags[1] && (
              <span className="badge text-bg-success me-2">CSS</span>
            )}
            {element.tags[2] && (
              <span className="badge text-bg-info me-2">JS</span>
            )}

            <hr />

            <button
              className="btn btn-danger me-2"
              onClick={() => {
                deleteArticle(index);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <Link
              className="btn btn-primary me-2"
              to={`/postpage/detail/${element.id}`}
            >
              <i class="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
