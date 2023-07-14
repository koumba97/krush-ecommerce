import { useState } from "react";
import "./App.scss";
import { CategoryContainer } from "./components/CategoryContainer";
import { CategoriesData } from "./data/CategoriesData.ts";

const App = () => {
  return (
    <div className="app">
      <h2>KRUSH.</h2>
      <div className="categories-container">
        {CategoriesData.map((category) => {
          return <CategoryContainer category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
