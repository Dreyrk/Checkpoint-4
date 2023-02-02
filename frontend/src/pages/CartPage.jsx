import React, { useState } from "react";
import { useCurrentOrderContext } from "../contexts/orderContext";
import CartItem from "../components/CartItem";
import { useCurrentUserContext } from "../contexts/userContext";
import axios from "axios";

function CartPage() {
  const { currentOrder, setCurrentOrder } = useCurrentOrderContext();
  const { user } = useCurrentUserContext();
  const { items } = currentOrder;

  const handleOrder = () => {
    const totalArray = [];

    currentOrder.items.forEach((el) => {
      totalArray.push(el.price);
    });

    const total = totalArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    console.log(user._id);
    setCurrentOrder({
      ...currentOrder,
      address: user.address,
      total,
      user_id: user._id,
    });

    const body = JSON.stringify(currentOrder);

    axios
      .post("http://localhost:5000/api/orders", body)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
        <div className="m-6">
          <button
            type="button"
            className="text-white bg-red font-medium rounded-lg px-5 py-2.5 text-center"
            onClick={handleOrder}>
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
