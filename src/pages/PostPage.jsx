import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useContext } from "react";
import Card from "../components/card/Card";
import style from "./PostPage.module.css";
import Contex from "../contex/Contex";

export default function PostPage() {
  const post = useContext(Contex);

  return (
    <>
      <div className={`${style.list}`}>
        {post.map((element, index) => (
          <Card key={index} element={element}></Card>
        ))}
      </div>
    </>
  );
}
