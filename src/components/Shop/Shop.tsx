import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
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
    const { products } = useContext(ProductsContext);
    return (
        <section className="shop">
            <div className="preview-side">
                <CategoryList currentCategory={currentCategory} list={categoryList} changeCategory={changeCategory} />
                <div key={currentCategory.id} className="article-container transition">
                    {products.map((product, i) => (
                        <Product key={`article-${i}`} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
