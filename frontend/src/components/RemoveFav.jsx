import React from "react";
import { useCurrentUserContext } from "../contexts/userContext";

function RemoveFav({ item }) {
  const { user, setUser } = useCurrentUserContext();

  const removeFav = async (id) => {
    const newArray = await user.favs.filter((el) => el._id !== id);
    console.log(newArray);
    setUser({ ...user, favs: newArray });
  };

  return (
    <button
      type="button"
      className="h-6 w-6 mr-6 mt-2 rounded-full flex justify-center"
      onClick={() => removeFav(item._id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  );
}

export default RemoveFav;
