import React from "react";
import ItemCard from "../components/ItemCard";
import { useCurrentUserContext } from "../contexts/userContext";

function FavsPage() {
  const { user } = useCurrentUserContext();
  return (
    <div>
      <h1 className="text-xl font-semibold">
        {user.firstname}'s Favorites Items :
      </h1>
      <div>
        {user.favs.length > 0 ? (
          <ul>
            {user.favs.map((el, i) => (
              <li key={el._id}>
                <ItemCard item={el} index={i} />
              </li>
            ))}
          </ul>
        ) : (
          "No Favs :/"
        )}
      </div>
    </div>
  );
}

export default FavsPage;
