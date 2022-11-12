import React, { FC } from "react";

interface IProps {
  categories: string[];
  selectCategory: (category: string) => void;
}

const Categories: FC<IProps> = ({ categories, selectCategory }) => {
  return (
    <div className="mt-12 flex flex-row overflow-auto">
      {categories && Array.isArray(categories) && categories.map((category, i) => (
        <button
          key={i}
          onClick={() => selectCategory(category)}
          className="border font-mono p-2 text-xs border-black focus:bg-lime-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
