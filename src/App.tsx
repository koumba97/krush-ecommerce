import { useState } from "react";
import "./App.css";
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
    title: "inspiration",
  },
  {
    id: 8,
    title: "gifts",
  },
];

const App = () => {
  return (
    <div className="categories-container">
      <div className="category-container">
        {categories.map((category) => {
          return <CategoryContainer category={category} />;
        })}
      </div>
    </div>
  );
};

export default App;
