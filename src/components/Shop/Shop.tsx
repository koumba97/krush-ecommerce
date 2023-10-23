import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { Category } from '../../types/Category';
import { ProductCard } from '../ProductCard/ProductCard';
import CategoryList from '../CategoryList/CategoryList';
import './Shop.scss';
import { Product } from '../../types/Product';

interface IProp {
    currentCategory: Category;
    categoryList: Category[];
    changeCategory: Function;
}
const Shop = ({ currentCategory, categoryList, changeCategory }: IProp) => {
    const [categoryMap, setCategoryMap] = useState<Product[]>();
    const { getProductsByCategory } = useContext(CategoriesContext);

    useEffect(() => {
        const getCategoryMap = async () => {
            const result: Product[] | null = await getProductsByCategory(currentCategory.name);
            if (result) setCategoryMap(result);
        };
        getCategoryMap();
    }, []);
    return (
        <section className="shop">
            <div className="preview-side">
                <CategoryList currentCategory={currentCategory} list={categoryList} changeCategory={changeCategory} />
                {categoryMap ? (
                    <div key={currentCategory.id} className="article-container transition">
                        {categoryMap.map((product, i) => (
                            <ProductCard key={`article-${i}`} product={product} />
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default Shop;
