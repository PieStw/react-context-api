import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostPage from "./pages/PostPage";
import DefaultLayout from "./layouts/DefaultLayout";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/aboutus" element={<AboutUsPage />}></Route>
            <Route path="/postpage" element={<PostPage />}></Route>
            <Route path="/postpage/detail/:id" element={<DetailPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
