import { useState } from "react";
import "./App.css";

export const categories: { id: number; title: string }[] = [
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

function App() {
  return (
    <div className="categories-container">
      <div className="category-container">
        {categories.map((category) => {
          return (
            <div className="category-body-container" key={category.id}>
              <h2>{category.title.toUpperCase()}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
