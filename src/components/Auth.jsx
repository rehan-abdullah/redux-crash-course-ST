import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAuth } from "../actions/authActions";

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(auth);

  const handleAuth = () => {
    dispatch(toggleAuth());
  };

  return (
    <div>
      <button onClick={handleAuth} className="btn btn-info my-3">
        {auth.isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Auth;
