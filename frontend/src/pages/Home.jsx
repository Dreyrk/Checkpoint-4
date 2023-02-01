import React from "react";
import ItemCarousel from "../components/ItemCarousel";
import ItemCard from "../components/ItemCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <ItemCarousel />
      <div className="flex flex-wrap">
        <h2 className="ml-4 mb-4 text-2xl">Most Popular :</h2>
        <div className="h-[25%] w-[80%] m-auto mb-4 flex flex-col gap-6">
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
}
