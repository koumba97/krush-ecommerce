import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { CategoryContainer } from "./components/CategoryContainer/CategoryContainer.tsx";
import { CategoriesData } from "./data/CategoriesData.ts";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="page-content">
        <div className="categories-container">
          {CategoriesData.map((category) => {
            return <CategoryContainer category={category} key={category.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
