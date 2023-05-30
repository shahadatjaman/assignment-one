import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { logo, menu } from "./data";
import { AiOutlineClose } from "react-icons/ai";
import { useWindowWidth } from "../../../hook/useWidth";

const SideBar = ({ closeHandler }) => {
  const isMatch = useWindowWidth({ width: 900 });
  return (
    <div className="relative">
      {/* close button */}
      {isMatch && (
        <div className="close-icon">
          <AiOutlineClose onClick={closeHandler} className="icon-style" />
        </div>
      )}

      {/* Logo */}
      <div className="logo-wrapper">
        <Link to={"/"}>
          <img className="w-12" src={logo} alt="stockgro" />
          <h3 className="logo-h3">StockGro</h3>
        </Link>
      </div>

      {/* Menu */}
      <div className="text-white mt-6">
        <ul className="mt-8">
          {menu?.map((value, index) => (
            <li key={index} className="li-style">
              <Link className="link-style" to={value.path}>
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium mt-2">{value.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
