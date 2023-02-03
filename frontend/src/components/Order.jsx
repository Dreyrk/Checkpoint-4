import React from "react";
import OrderTable from "./OrderTable";

function Order({ order }) {
  console.log(order);

  return (
    <div>
      <div className="w-[90%] h-full mx-auto flex flex-col gap-12">
        <OrderTable order={order} orderName={order.address.street} />
      </div>
    </div>
  );
}

export default Order;
