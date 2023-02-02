import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isOpen, setIsOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: {
      street: "",
      postalCode: 12345,
      town: "",
    },
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/users", newUser)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-[80%] border text-white bg-red p-2 rounded-xl"
          type="button">
          Register
        </button>
      ) : (
        <div className="h-full flex flex-col items-center">
          <h1 className="text-xl mb-4">Register to our plateform</h1>
          <form
            className="h-[70%] w-[90%] flex flex-col gap-8 bg-white p-6 rounded-md shadow-lg"
            onSubmit={handleSubmit}>
            <label htmlFor="firstname" className="flex gap-5">
              Firstname :
              <input
                className="border rounded-md focus:border-red"
                id="firstname"
                type="text"
                placeholder="John"
                onChange={(e) =>
                  setNewUser({ ...newUser, firstname: e.target.value })
                }
              />
            </label>
            <label htmlFor="lastname" className="flex gap-5">
              Lastname :
              <input
                className="border rounded-md"
                id="lastname"
                type="text"
                placeholder="Doe"
                onChange={(e) =>
                  setNewUser({ ...newUser, lastname: e.target.value })
                }
              />
            </label>
            <label htmlFor="email" className="flex gap-12">
              Email :
              <input
                className="border rounded-md"
                id="email"
                type="email"
                placeholder="name@email.com"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </label>
            <label htmlFor="password" className="flex gap-4">
              Password :
              <input
                className="border rounded-md"
                id="password"
                type="password"
                placeholder="**********"
              />
            </label>
            <label
              htmlFor="passwordConfirmed"
              className="flex gap-4 items-center justify-start text-xs">
              Confirm password :
              <input
                className="h-6 border rounded-md"
                id="passwordConfirmed"
                type="password"
                placeholder="**********"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </label>
            <p>Shipping Address :</p>
            <div className="flex flex-wrap gap-4">
              <label htmlFor="street" className="w-[50%] text-sm">
                Street :
                <input
                  type="text"
                  id="street"
                  className="w-full border rounded-md"
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      address: { ...newUser.address, street: e.target.value },
                    })
                  }
                />
              </label>
              <label htmlFor="postalCode" className="w-[30%] text-sm">
                Postal Code :
                <input
                  type="number"
                  id="postalCode"
                  className="w-full border rounded-md"
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      address: {
                        ...newUser.address,
                        postalCode: e.target.value,
                      },
                    })
                  }
                />
              </label>
              <label htmlFor="town" className="w-[50%] text-sm">
                Town :
                <input
                  type="text"
                  id="town"
                  className="w-full border rounded-md"
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      address: { ...newUser.address, town: e.target.value },
                    })
                  }
                />
              </label>
            </div>
            <button
              className="w-[50%] h-8 self-center bg-red rounded-md text-white shadow-sm"
              type="submit">
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
