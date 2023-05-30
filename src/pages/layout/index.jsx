import React from "react";
import { Outlet } from "react-router-dom";
import "../layout/";
import SideBar from "./side__bar";
import TopBar from "./top__bar";
import { useWindowWidth } from "../../hook/useWidth";
import useModal from "../../hook/useModal";

const Layout = ({ children }) => {
  const isMatch = useWindowWidth({ width: 900 });
  const { isOpen, openHandler, closeHandler } = useModal();

  return (
    <div className="flex h-screen">
      {isMatch ? (
        <div
          className={`pt-8 w-1/4 transition-all ${
            isOpen ? "ml-0" : "-ml-96"
          } z-10 bg-gray-one`}
        >
          <SideBar closeHandler={closeHandler} />
        </div>
      ) : (
        <div className={`pt-8 w-sidebar z-10 bg-gray-one`}>
          {!isMatch && <SideBar />}
        </div>
      )}

      <div className="flex-1 overflow-y-auto scroll-container scrollbar relative bg-gray-two">
        <TopBar openHandler={openHandler} />
        <div className="mt-20 ml-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
