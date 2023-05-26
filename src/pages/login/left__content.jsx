import React from "react";
import { logo } from "./data";
import { Link } from "react-router-dom";
import LoginForm from "./login_form";

const LeftContent = () => {
  return (
    <>
      {/* logo */}
      <div className="w-full p-8">
        <Link className="flex justify-start items-center" to={"/"}>
          <img className="w-14" src={logo} alt="stockgro" />
          <h2 className="text-2xl text-white font-bold ml-2">StockGro</h2>
        </Link>
      </div>

      {/* Login form */}

      <div className="px-4 flex justify-center items-center">
        <LoginForm />
      </div>

      <div className="bg-slate-600 py-2 w-full text-center text-white">
        Don't have an account? Sign Up
      </div>
    </>
  );
};

export default LeftContent;
