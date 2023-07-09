import { useState } from "react";
import "./App.scss";
import { CategoryContainer } from "./components/CategoryContainer";
import { Category } from "./types/Category";

export const categories: Category[] = [
  {
    id: 1,
    title: "bestseller",
  },
  {
    id: 2,
    title: "decoration",
  },
  {
    id: 3,
    title: "table & kitchen",
  },

  {
    id: 4,
    title: "furniture",
  },
  {
    id: 5,
    title: "lamp",
  },
  {
    id: 6,
    title: "lifestyle",
  },
  {
    id: 7,
    title: "kids",
  },
  {
    id: 7,
    title: "gifts",
  },
];

const App = () => {
  return (
    <div className="app">
      <h2>KRUSH.</h2>
      <div className="categories-container">
        {categories.map((category) => {
          return <CategoryContainer category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
