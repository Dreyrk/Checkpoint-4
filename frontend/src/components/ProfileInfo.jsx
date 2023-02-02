import React from "react";
import { useCurrentUserContext } from "../contexts/userContext";
import ItemCard from "../components/ItemCard";
import { useState } from "react";

function ProfileInfo() {
  const { user } = useCurrentUserContext();

  const [modify, setModify] = useState(false);

  const [userModify, setUserModify] = useState({});

  return (
    <div className="h-screen w-screen flex flex-col gap-6">
      <div className="flex justify-around">
        <h1 className="w-[60%] text-2xl font-bold">
          Welcome {user.firstname} {user.lastname}
        </h1>
        {!modify ? (
          <button
            className="bg-red text-white h-8 w-20 rounded-md"
            onClick={() => setModify(!modify)}
            type="button">
            Modify
          </button>
        ) : (
          <button
            className="bg-red text-white h-8 w-20 rounded-md"
            onClick={() => setModify(!modify)}
            type="button">
            Done
          </button>
        )}
      </div>
      <div className="h-full flex flex-col items-center justify-around">
        <label className="w-[80%] flex gap-4" htmlFor="email">
          Email :
          <input className="w-[80%]" value={user.email} />
        </label>
        <label className="w-[80%] flex gap-4" htmlFor="password">
          Password : <input type="password" placeholder="*********" />
        </label>
        <div className="w-full h-[50%] flex flex-col justify-start items-start">
          <p className="ml-1 w-[60%] text-xl font-semibold">
            Your Favorites products :
          </p>
          {user.favs && (
            <ul className="w-[90%] m-auto h-[80%] border">
              {user.favs.map((fav) => (
                <li key={fav._id}>
                  <ItemCard item={fav} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-[90%] h-[15%] flex flex-wrap">
          <h3 className="h-[20%] text-xl font-semibold">Your Address :</h3>
          <label
            className="h-[25%] w-[80%] flex gap-4 items-center"
            htmlFor="street">
            Street :
            <input id="street" type="text" value={user.address.street} />
          </label>
          <label
            className="w-[50%] h-[25%] flex items-center gap-2 text-sm"
            htmlFor="postalCode">
            Postal Code :
            <input
              className="w-[40%]"
              id="postalCode"
              type="text"
              value={user.address.postalCode}
            />
          </label>
          <label
            className="h-[25%] w-[40%] flex items-center gap-2"
            htmlFor="town">
            Town :
            <input
              className="h-[60%] w-[60%]"
              id="town"
              type="text"
              value={user.address.town}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
