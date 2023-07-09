import { Category } from "../types/Category";

interface IProps {
  category: Category;
}

export const CategoryContainer = ({ category }: IProps) => {
  return (
    <div className="category-body-container" key={category.id}>
      <h2>{category.title.toUpperCase()}</h2>
    </div>
  );
};
