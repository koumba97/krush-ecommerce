import { Article as ArticleType } from "../../types/Article";
import "./Article.scss";
import { useState } from "react";

interface IProps {
  article: ArticleType;
}

export const Article = ({ article }: IProps) => {
  const [imageCover, setImageCover] = useState(article.images[0]);

  return (
    <div className="article">
      <div
        className="image-article"
        style={{ backgroundImage: `url(${imageCover})` }}
        onMouseEnter={() => setImageCover(article.images[1])}
        onMouseLeave={() => setImageCover(article.images[0])}
      ></div>
      <div className="article-details-container">
        <h3 className="article-name">{article.name}</h3>
        <p className="article-price">
          {article.price.value} {article.price.currency}
        </p>
      </div>
    </div>
  );
};