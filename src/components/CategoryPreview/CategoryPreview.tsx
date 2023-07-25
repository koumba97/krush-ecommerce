import { Category } from "../../types/Category";
import "./CategoryPreview.scss";

interface IProp {
  category: Category;
  categoryList: Category[];
}
const CategoryPreview = ({ category, categoryList }: IProp) => {
  return (
    <section className="category-preview">
      <div className="category-side">
        <h1>#{category.name}</h1>
        <div className="category-box">
          <div
            className="image-category"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          ></div>
          <div className="category-body-container">
            <a className="category-link" href="">
              Shop now
            </a>
          </div>
        </div>
      </div>
      <div className="preview-side">
        <div className="category-list-container">
          {categoryList.map((categoryItem) => {
            return (
              <p
                key={`category-${categoryItem.name}`}
                className={
                  category.id == categoryItem.id
                    ? `category-link active`
                    : `category-link`
                }
              >
                {categoryItem.name}
              </p>
            );
          })}
        </div>
        <div className="article-container">
          {[...Array(6)].map((x, i) => (
            <div className="article"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPreview;
