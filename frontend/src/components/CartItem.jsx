import React from "react";
import Stars from "./Stars";
import bar from "../assets/protoBar.jpg";

function CartItem({ item }) {
  console.log(item);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="">
        <img
          className="p-8 rounded-t-lg"
          src={item.image_url || bar}
          alt="product"
        />
      </div>
      <div className=" px-5 pb-5">
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </div>
        <Stars note={item.note} />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {item.price}$
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
