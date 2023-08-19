import { ArticlesData } from "../../data/ArticlesData";
import { Category } from "../../types/Category";
import { Article } from "../Article/Article";
import "./CategoryPreview.scss";
import { useState, useEffect } from "react";

interface IProp {
  category: Category;
  categoryList: Category[];
  changeCategory: Function;
}
const CategoryPreview = ({ category, categoryList, changeCategory }: IProp) => {
  const [activeCategory, setActiveCategory] = useState(1);

  useEffect(() => {
    setActiveCategory(category.id);
  }, [category]);

  return (
    <section className="category-preview">
      {/* <div className="category-side">
        <h1 className={category.id == activeCategory ? "transition" : ""}>
          #{category.name}
        </h1>

        <div
          className={`category-box ${
            category.id == activeCategory ? "transition" : ""
          }`}
        >
          <div
            className="image-category"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          ></div>
          <div className="category-body-container"></div>
        </div>
      </div> */}
      <div className="preview-side">
        <div className="category-list-container">
          {categoryList.map((categoryItem) => {
            return (
              <div
                key={`category-${categoryItem.name}`}
                className={`category-link
                  ${category.id == categoryItem.id ? "active" : ""}
                `}
                onClick={() => {
                  changeCategory(categoryItem.id);
                }}
              >
                <p>{categoryItem.name}</p>
                <i className={categoryItem.iconClass} />
              </div>
            );
          })}
        </div>
        <div
          className={`article-container  ${
            category.id == activeCategory ? "transition" : ""
          }`}
        >
          {[...Array(6)].map((x, i) => (
            <Article key={`article-${i}`} article={ArticlesData[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPreview;
