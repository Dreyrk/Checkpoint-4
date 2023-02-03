import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentOrderContext } from "../contexts/orderContext";
import CartItem from "../components/CartItem";
import { useCurrentUserContext } from "../contexts/userContext";
import axios from "axios";

function CartPage() {
  const { currentOrder, setCurrentOrder } = useCurrentOrderContext();
  const { user } = useCurrentUserContext();
  const navigate = useNavigate();

  console.log(currentOrder);

  const handleOrder = () => {
    const totalArray = [];

    currentOrder.items.forEach((el) => {
      totalArray.push(el.price);
    });

    const total = totalArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    setCurrentOrder({
      ...currentOrder,
      address: user.address,
      total,
      user_id: user._id,
    });

    console.log(currentOrder);

    axios
      .post("http://localhost:5000/api/orders", currentOrder)
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <div>
        <ul>
          {currentOrder.items.map((item) => (
            <li className="mb-2" key={item._id}>
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
