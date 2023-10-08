import { Category } from '../../types/Category'
import './CategoryList.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
                    <Link to={`/category/${categoryItem.name}`} key={`category-${categoryItem.name}`}>
                        <div className={`category-link ${currentCategory.id == categoryItem.id ? 'active' : ''}`}>
                            <p>{categoryItem.name}</p>
                            <i className={categoryItem.iconClass} />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default CategoryList
