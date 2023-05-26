import React from "react";
import LeftContent from "./left__content";
import RightContent from "./right__content";
import { useWindowWidth } from "../../hook/useWidth";

const Login = () => {
  const isMatch = useWindowWidth({ width: 869 });

  return (
    <div className="bg-gray-two flex">
      <div
        className={`${
          isMatch ? "w-full" : "w-2/5"
        } h-screen bg-gray-one flex justify-between flex-col items-center`}
      >
        <LeftContent />
      </div>
      <div className={`w-full overflow-hidden ${isMatch && "hidden"}`}>
        <RightContent />
      </div>
    </div>
  );
};

export default Login;
