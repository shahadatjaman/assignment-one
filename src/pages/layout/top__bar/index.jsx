import React from "react";
import { BsFillDiagram2Fill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { BsJustify } from "react-icons/bs";
import Avatar from "./Avatar";
import Account from "./Account";
import { user } from "./data";
import useModal from "../../../hook/useModal";
import { useWindowWidth } from "../../../hook/useWidth";
import Drawer from "../../../shared/drawer";
import AccountMenu from "./AccountMenu";

const TopBar = (props) => {
  const isMatch = useWindowWidth({ width: 900 });
  const { isOpen, closeHandler, openHandler } = useModal();
  return (
    <div className="topbar-wrapper">
      <div className="topbar_left">
        <BsJustify
          onClick={props.openHandler}
          className="text-2xl cursor-pointer"
        />
      </div>

      <div className="topbar_right">
        <div className="flex mr-4">
          <ul className="topbar_ul">
            <li className="topbar_li">
              <BsFillDiagram2Fill className="mr-1" />
              {!isMatch && <span>Social</span>}
            </li>
            <li className="topbar_li" onMouseEnter={openHandler}>
              <Avatar width={"w-6"} src_url={user.avatr} alt_name={user.name} />
              {!isMatch && (
                <>
                  <span className="ml-2">Account</span>
                  <BiChevronDown
                    className={`font-medium text-2xl ${
                      isOpen && "mt-4 transition-all"
                    }`}
                  />
                </>
              )}

              {isOpen && !isMatch && <Account closeHandler={closeHandler} />}
            </li>
          </ul>
        </div>

        <Drawer isOpen={isOpen} closeHandler={closeHandler}>
          <AccountMenu />
        </Drawer>
      </div>
    </div>
  );
};

export default TopBar;
