import { Category } from "../types/Category";
import "./CategoryContainer.scss";

interface IProps {
  category: Category;
}

export const CategoryContainer = ({ category }: IProps) => {
  return (
    <div className="category-container">
      <div className="category-body-container">
        <h3>{category.title.toUpperCase()}</h3>
      </div>
    </div>
  );
};
