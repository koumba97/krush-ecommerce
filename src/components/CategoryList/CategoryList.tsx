import { Category } from '../../types/Category'
import './CategoryList.scss'
import { useState, useEffect } from 'react'

interface IProp {
    currentCategory: Category
    list: Category[]
    changeCategory: Function
}
const CategoryList = ({ currentCategory, list, changeCategory }: IProp) => {
    const [_newCategory, setNewCategory] = useState(currentCategory.id)

    useEffect(() => {
        setNewCategory(currentCategory.id)
    }, [currentCategory])

    return (
        <div className="category-list">
            {list.map((categoryItem) => {
                return (
                    <div
                        key={`category-${categoryItem.name}`}
                        className={`category-link ${currentCategory.id == categoryItem.id ? 'active' : ''}`}
                        onClick={() => {
                            changeCategory(categoryItem.id)
                        }}
                    >
                        <p>{categoryItem.name}</p>
                        <i className={categoryItem.iconClass} />
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryList
