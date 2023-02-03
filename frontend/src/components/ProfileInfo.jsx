import React, { useState } from "react";
import axios from "axios";
import { useCurrentUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

function ProfileInfo() {
  const navigate = useNavigate();
  const { user, setUser } = useCurrentUserContext();

  const [modify, setModify] = useState(false);

  const [userModify, setUserModify] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.hashedPassword,
    address: {
      street: user.address.street,
      postalCode: user.address.postalCode,
      town: user.address.town,
    },
    favs: user.favs,
  });

  const handleModify = () => {
    const body = JSON.stringify(userModify);

    axios
      .put(`http://localhost:5000/api/users/${user._id}`, body)
      .then(() => console.log("Modified"))
      .catch((e) => console.error(e));

    setUserModify({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.hashedPassword,
      address: {
        street: user.address.street,
        postalCode: user.address.postalCode,
        town: user.address.town,
      },
    });
    setModify(false);
    setUser(userModify);
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-6">
      <div className="flex justify-around">
        <h1 className="max-w-[60%] text-2xl font-bold">
          Welcome {user.firstname} {user.lastname}
        </h1>
        {!modify ? (
          <button
            className="bg-red text-white h-8 w-20 rounded-md mt-4"
            onClick={() => setModify(!modify)}
            type="button">
            Modify
          </button>
        ) : (
          <button
            className="bg-red text-white h-8 w-20 rounded-md mt-4"
            onClick={handleModify}
            type="button">
            Done
          </button>
        )}
      </div>
      <div className="h-full flex flex-col items-center justify-around">
        <label className="w-[80%] flex gap-4" htmlFor="email">
          Email :
          <input
            disabled={!modify && "disabled"}
            className={
              !modify ? "w-[80%] rounded" : "w-[80%] border border-red rounded"
            }
            value={modify ? userModify.email : user.email}
            onChange={(e) =>
              setUserModify({
                email: e.target.value,
              })
            }
          />
        </label>
        <label className="w-[80%] h-6 flex gap-4" htmlFor="password">
          Password :
          <input
            className={
              !modify ? "h-6 rounded" : "h-6 border border-red rounded"
            }
            type="password"
            disabled={!modify && "disabled"}
            value={modify ? userModify.password : user.hashedPassword}
            onChange={(e) =>
              setUserModify({ ...userModify, password: e.target.value })
            }
          />
        </label>
        <div className="w-full h-[5%] flex flex-col justify-center items-center">
          <button
            type="button"
            className="bg-red text-white  rounded-md w-36 h-10"
            onClick={() => navigate("/favs")}>
            Your Favorites
          </button>
        </div>
        <div className="w-[90%] h-[15%] flex flex-wrap">
          <h3 className="h-[20%] text-xl font-semibold">Your Address :</h3>
          <label
            className="h-[25%] w-[80%] flex gap-4 items-center"
            htmlFor="street">
            Street :
            <input
              className={
                !modify ? "h-6 rounded" : "h-6 border border-red rounded"
              }
              id="street"
              type="text"
              disabled={!modify && "disabled"}
              value={!modify ? user.address.street : userModify.address.street}
              onChange={(e) =>
                setUserModify({
                  ...userModify,
                  address: { ...userModify.address, street: e.target.value },
                })
              }
            />
          </label>
          <label
            className="w-[50%] h-[25%] flex items-center gap-2 text-sm"
            htmlFor="postalCode">
            Postal Code :
            <input
              disabled={!modify && "disabled"}
              className={
                !modify
                  ? "w-[40%] h-6 rounded"
                  : "w-[40%] h-6 border border-red rounded"
              }
              id="postalCode"
              type="text"
              value={
                !modify
                  ? user.address.postalCode
                  : userModify.address.postalCode
              }
              onChange={(e) =>
                setUserModify({
                  ...userModify,
                  address: {
                    ...userModify.address,
                    postalCode: e.target.value,
                  },
                })
              }
            />
          </label>
          <label
            className="h-[25%] w-[40%] flex items-center gap-2"
            htmlFor="town">
            Town :
            <input
              disabled={!modify && "disabled"}
              className={
                !modify
                  ? "h-[60%] w-[60%] rounded"
                  : "h-[60%] w-[60%] border border-red rounded"
              }
              id="town"
              type="text"
              value={!modify ? user.address.town : userModify.address.town}
              onChange={(e) =>
                setUserModify({
                  ...userModify,
                  address: { ...userModify.address, town: e.target.value },
                })
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
