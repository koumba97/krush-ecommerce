import { useState } from 'react'
import './App.scss'
import NavBar from './components/NavBar/NavBar.tsx'
import Footer from './components/Footer/Footer.tsx'
import { CategoriesData } from './data/CategoriesData.ts'
import Header from './components/Header/Header.tsx'
import CategoryPreview from './components/CategoryPreview/CategoryPreview.tsx'
import { Category } from './types/Category.ts'

const App = () => {
    const [currentCategory, setCurrentCategory] = useState<Category>(CategoriesData[0])

    const changeCategoryHandler = (categoryId: number) => {
        setCurrentCategory(CategoriesData[categoryId - 1])
    }

    return (
        <div className="app">
            <NavBar />

            <div className="page-content">
                <Header />
                <CategoryPreview
                    currentCategory={currentCategory}
                    categoryList={CategoriesData}
                    changeCategory={changeCategoryHandler}
                />
                {/* <div className="categories-container">
          {CategoriesData.map((category) => {
            return <CategoryContainer category={category} key={category.id} />;
          })}
        </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default App
