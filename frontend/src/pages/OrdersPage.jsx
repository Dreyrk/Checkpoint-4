import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCurrentUserContext } from "../contexts/userContext";
import Order from "../components/Order";

function OrdersPage() {
  const { user } = useCurrentUserContext();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/orders/user/${user._id}`)
      .then((res) => setOrders(res.data.results))
      .catch((e) => console.error(e));
  }, []);

  console.log(orders);

  return (
    <div>
      <h1>{user.firstname}'s Orders</h1>
      <div>
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
