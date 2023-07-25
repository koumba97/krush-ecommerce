import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { CategoryContainer } from "./components/CategoryContainer/CategoryContainer.tsx";
import { CategoriesData } from "./data/CategoriesData.ts";
import PromoBar from "./components/PromoBar/PromoBar.tsx";
import CategoryPreview from "./components/CategoryPreview/CategoryPreview.tsx";

const App = () => {
  return (
    <div className="app">
      <NavBar />

      <div className="page-content">
        <PromoBar />
        <CategoryPreview
          category={CategoriesData[0]}
          categoryList={CategoriesData}
        />
        {/* <div className="categories-container">
          {CategoriesData.map((category) => {
            return <CategoryContainer category={category} key={category.id} />;
          })}
        </div> */}

        <div className="big-category-container"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
