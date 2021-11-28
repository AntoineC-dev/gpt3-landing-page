import React from "react";
import "./Blog.css";
import { Article } from "../../components";

const data = {
  title: "A lot is happening, We are blogging about it.",
};

const Blog = () => {
  return (
    <div className="gpt3__blog section__pading" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">{data.title}</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA"></div>
        <div className="gpt3__blog-container__groupB"></div>
      </div>
    </div>
  );
};

export default Blog;
