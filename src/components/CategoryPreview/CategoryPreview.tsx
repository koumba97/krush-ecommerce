import { ArticlesData } from '../../data/ArticlesData'
import { CategoriesData } from '../../data/CategoriesData'
import { Category } from '../../types/Category'
import { Article } from '../Article/Article'
import CategoryList from '../CategoryList/CategoryList'
import './CategoryPreview.scss'
import { useState, useEffect } from 'react'

interface IProp {
    currentCategory: Category
    categoryList: Category[]
    changeCategory: Function
}
const CategoryPreview = ({ currentCategory, categoryList, changeCategory }: IProp) => {
    const [newCategory, setNewCategory] = useState(currentCategory.id)

    useEffect(() => {
        setNewCategory(currentCategory.id)
    }, [currentCategory])

    return (
        <section className="category-preview">
            <div className="preview-side">
                <CategoryList currentCategory={currentCategory} list={categoryList} changeCategory={changeCategory} />
                <div className={`article-container  ${newCategory == currentCategory.id ? 'transition' : ''}`}>
                    {[...Array(6)].map((x, i) => (
                        <Article key={`article-${i}`} article={ArticlesData[i]} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategoryPreview
