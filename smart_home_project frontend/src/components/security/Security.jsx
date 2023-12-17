import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Security = () => {
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();

  const Logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="security">
      <h1 className="font-semibold">Security</h1>
      <button
        type="button"
        onClick={Logout}
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
      font-medium rounded-lg text-[0.7rem] px-2 py-0.5 me-2 mb-2 dark:bg-gray-800
       dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Security;
