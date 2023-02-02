import React from "react";
import OrderTable from "./OrderTable";

function Order({ order }) {
  const { items } = order;

  console.log(order);

  return (
    <div>
      <div className="w-[90%] h-full mx-auto flex flex-col gap-12">
        <OrderTable items={items} orderName={order.address} />
      </div>
    </div>
  );
}

export default Order;
