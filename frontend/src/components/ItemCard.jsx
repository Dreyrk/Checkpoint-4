import React from "react";
import bar from "../assets/protoBar.jpg";
import Stars from "./Stars";
import LikeButton from "./LikeButton";
import RemoveFav from "./RemoveFav";
import { useCurrentOrderContext } from "../contexts/orderContext";

function ItemCard({ item }) {
  const { currentOrder } = useCurrentOrderContext();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="w-full h-6 flex justify-between">
        <div className="h-6 w-36 ml-2 mt-2">
          <LikeButton item={item} />
        </div>
        <div>
          <RemoveFav item={item} />
        </div>
      </div>
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
          <button
            type="button"
            className="text-white bg-red font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => {
              currentOrder.items.push(item);
              console.log(currentOrder.items);
            }}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
