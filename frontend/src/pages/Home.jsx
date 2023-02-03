import React from "react";
import ItemCarousel from "../components/ItemCarousel";
import ItemCard from "../components/ItemCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data.results))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <ItemCarousel />
      <div className="flex flex-wrap">
        <h2 className="ml-4 mb-4 text-2xl">Most Popular :</h2>
        <div className="h-[25%] w-[80%] m-auto mb-4 flex flex-col gap-6">
          {products.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
