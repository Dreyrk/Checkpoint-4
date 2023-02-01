import React from "react";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import FilterBar from "../components/FilterBar";

function Products() {
  return (
    <div>
      <div className="mx-2 flex flex-col items-start gap-1">
        <SearchBar />
        <FilterBar />
      </div>
      <div className="flex flex-col gap-6 my-4 mx-4">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default Products;
