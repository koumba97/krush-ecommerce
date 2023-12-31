import { Category } from '../../types/Category';
import './CategoryContainer.scss';

interface IProps {
    category: Category;
    categoryList: Category[];
}

export const CategoryContainer = ({ category }: IProps) => {
    return (
        <div className="category-container">
            <div className="image-category" style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
            <div className="category-body-container">
                <h3 className="category-name">{category.name}</h3>
            </div>
        </div>
    );
};
