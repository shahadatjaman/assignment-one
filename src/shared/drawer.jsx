import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useWindowWidth } from "../hook/useWidth";
const Drawer = (props) => {
  const { children, isOpen, closeHandler } = props;
  const isSmallDevice = useWindowWidth({ width: 400 });
  return (
    <div onMouseLeave={closeHandler} className="relative">
      {/* <!-- Toggle button --> */}
      {isOpen && (
        <div className="fixed transition-all z-10 top-0 right-48 mt-4 mr-4 md:hidden">
          <button onClick={closeHandler}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
      )}
      {/* <!-- Drawer --> */}
      <div
        className={`fixed bg-gray-one inset-y-0 transition-all ${
          isSmallDevice ? "w-full" : "w-64"
        } shadow-md md:hidden ${isOpen ? "right-0" : "-right-96"}`}
        id="drawer"
      >
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
