import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import FilterBar from "../components/FilterBar";
import axios from "axios";
import PageNav from "../components/PageNav";

function Products() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products?page=${page}`)
      .then((res) => {
        setItems(res.data.results);
        setTotalPages(res.data.totalPages);
      })
      .catch((e) => console.error(e));
  }, [page]);

  return (
    <div>
      <div className="mx-2 flex flex-col items-start gap-1">
        <SearchBar setData={setItems} data={items} />
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>
      <div className="flex flex-col gap-6 my-4 mx-4">
        {filter === ""
          ? items.map((el) => <ItemCard item={el} key={el._id} />)
          : items
              .filter(
                (item) => item.category.toLowerCase() === filter.toLowerCase()
              )
              .map((el) => <ItemCard item={el} key={el._id} />)}
      </div>
      <PageNav page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default Products;
