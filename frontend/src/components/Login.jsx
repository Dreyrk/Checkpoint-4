import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loginInfos, setLoginInfos] = useState({
    email: "",
    password: "",
  });

  const { setUser, setToken } = useCurrentUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginInfos) {
      // on appelle le back
      axios({
        method: "post",
        url: "/api/login",
        baseURL: "http://localhost:5000",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        data: loginInfos,
      })
        .then((res) => {
          setUser(res.data.user);
          setToken(res.data.token);
          navigate("/");
        })
        .catch((e) => console.error(e));
    }
  };

  return (
    <div className="w-full h-full">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-[80%] border text-white bg-red p-2 rounded-xl"
          type="button">
          Login
        </button>
      ) : (
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Log in to our platform
          </h3>
          <div className="w-full flex flex-col">
            <form className="mx-4" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email :
                </label>
                <input
                  onChange={(e) =>
                    setLoginInfos({ ...loginInfos, email: e.target.value })
                  }
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password :
                </label>
                <input
                  type="password"
                  placeholder="********"
                  onChange={(e) =>
                    setLoginInfos({ ...loginInfos, password: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <button
                type=""
                className="text-white bg-red hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
