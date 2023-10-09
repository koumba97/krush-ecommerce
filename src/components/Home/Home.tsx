import { useEffect, useState } from 'react';
import './Home.scss';
import Footer from '../Footer/Footer.tsx';
import { CategoriesData } from '../../data/CategoriesData.ts';
import Header from '../Header/Header.tsx';
import CategoryPreview from '../CategoryPreview/CategoryPreview.tsx';
import { Category } from '../../types/Category.ts';
import { useParams } from 'react-router-dom';
import { CategoryList } from '../../types/CategoryList.ts';

const Home = () => {
    const { categoryName } = useParams<{ categoryName: string }>();

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
        <div className="page-content">
            <Header />
            <CategoryPreview
                currentCategory={currentCategory}
                categoryList={CategoriesData}
                changeCategory={changeCategoryHandler}
            />
        </div>
    );
};

export default Home;
