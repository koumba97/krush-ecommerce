import { ArticlesData } from '../../data/ArticlesData'
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
    return (
        <section className="category-preview">
            <div className="preview-side">
                <CategoryList currentCategory={currentCategory} list={categoryList} changeCategory={changeCategory} />
                <div key={currentCategory.id} className="article-container transition">
                    {[...Array(6)].map((_x, i) => (
                        <Article key={`article-${i}`} article={ArticlesData[i]} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategoryPreview
