import React from "react";
import SocialIcons from "./social__icons";

const LoginForm = () => {
  return (
    <div className="w-full py-6 bg-white flex flex-col justify-center items-center">
      <h2 className="text-xl font-medium"> Login in to Tickertap</h2>
      <p className="text-center my-2 text-slate-800 w-2/3">
        Find your next great investment, now esier and faster with tickertap
      </p>

      <SocialIcons />
    </div>
  );
};

export default LoginForm;
