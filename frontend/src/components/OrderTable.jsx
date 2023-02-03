import React from "react";

function OrderTable({ order, orderName }) {
  console.log(order);

  return (
    <div class="relative overflow-x-auto">
      <p className="border bg-red p-2 text-white rounded-md font-semibold">
        Commande delivered at : {orderName}
      </p>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr
              key={item._id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
              <td class="px-6 py-4">{item.category}</td>
              <td class="px-6 py-4">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
