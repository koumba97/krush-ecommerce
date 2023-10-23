import { useEffect, useState } from 'react';
import './Home.scss';
import { CategoriesData } from '../../data/CategoriesData.ts';
import Header from '../Header/Header.tsx';
import Shop from '../Shop/Shop.tsx';
import { Category } from '../../types/Category.ts';
import { useParams } from 'react-router-dom';
import { CategoryList, CategoryType } from '../../types/CategoryType.ts';

const Home = () => {
    const { categoryName } = useParams<{ categoryName: CategoryType }>();

    const [currentCategory, setCurrentCategory] = useState<Category>(CategoriesData[0]);

    const changeCategoryHandler = (categoryId: number) => {
        setCurrentCategory(CategoriesData[categoryId - 1]);
    };

    useEffect(() => {
        if (categoryName) {
            getCategoryData(categoryName);
        }
    });

    const getCategoryData = (name: any) => {
        if (name in CategoryList) {
            CategoriesData.forEach((category) => {
                if (category.name == name) {
                    setCurrentCategory(category);
                }
            });
        }
    };

    return (
        <>
            <Header />
            <Shop
                currentCategory={currentCategory}
                categoryList={CategoriesData}
                changeCategory={changeCategoryHandler}
            />
        </>
    );
};

export default Home;
