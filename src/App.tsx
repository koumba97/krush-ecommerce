import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { CategoryContainer } from "./components/CategoryContainer/CategoryContainer.tsx";
import { CategoriesData } from "./data/CategoriesData.ts";
import PromoBar from "./components/PromoBar/PromoBar.tsx";
import CategoryPreview from "./components/CategoryPreview/CategoryPreview.tsx";
import { Category } from "./types/Category.ts";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>(
    CategoriesData[0]
  );

  const changeCategoryHandler = (categoryId: number) => {
    setCurrentCategory(CategoriesData[categoryId - 1]);
  };

  return (
    <div className="app">
      <NavBar />

      <div className="page-content">
        <PromoBar />
        <CategoryPreview
          category={currentCategory}
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
  );
};

export default App;
