import React from "react";
import { useState } from "react";

function FilterBar({ filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["Decks", "Bar", "Collier", "SCS"];

  return (
    <div className="w-[80%]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="w-20 h-8 border flex justify-center items-center bg-red text-white rounded-lg p-1">
        Filter
      </button>
      {isOpen && (
        <div>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option>---------------</option>
            {categories.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default FilterBar;
