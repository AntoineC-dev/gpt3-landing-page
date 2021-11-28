import React from "react";

import "./Blog.css";
import { Article } from "../../components";
import { blog1Png, blog2Png, blog3Png, blog4Png, blog5Png } from "../../assets";

const blogImages = [blog2Png, blog3Png, blog4Png, blog5Png];

const data = {
  title: "A lot is happening, We are blogging about it.",
};

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">{data.title}</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog1Png}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            featured
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {blogImages.map((item, index) => (
            <Article
              key={item + index}
              imgUrl={item}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
