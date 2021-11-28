import React, { FC } from "react";
import "./Article.css";

interface IArticle {
  imgUrl: string;
  date: string;
  title: string;
  featured?: boolean;
}

const Article: FC<IArticle> = ({ imgUrl, date, title, featured = false }) => {
  const featuredClass = featured ? "featured" : "";
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3 className={`gpt3__blog-container_article-content_title ${featuredClass}`}>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
