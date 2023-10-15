import { ProductsData } from '../../data/ProductsData';
import { Category } from '../../types/Category';
import { Product } from '../Product/Product';
import CategoryList from '../CategoryList/CategoryList';
import './Shop.scss';

interface IProp {
    currentCategory: Category;
    categoryList: Category[];
    changeCategory: Function;
}
const Shop = ({ currentCategory, categoryList, changeCategory }: IProp) => {
    return (
        <section className="shop">
            <div className="preview-side">
                <CategoryList currentCategory={currentCategory} list={categoryList} changeCategory={changeCategory} />
                <div key={currentCategory.id} className="article-container transition">
                    {[...Array(6)].map((_x, i) => (
                        <Product key={`article-${i}`} product={ProductsData[i]} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
