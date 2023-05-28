import React from "react";
import "./styles.css";
import { items } from "./data";
import Avatar from "./Avatar";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(userLoggedOut());
    navigate("/login");
  };
  return (
    <ul className="ul-styled">
      <li className={`li-styled"`}>
        <div
          className={`profile_styled 
            hover:bg-secondary"
            mb-4`}
        >
          {user?.avatar && (
            <Avatar
              width={"w-12"}
              src_url={user?.avatar}
              alt_name={user.fullname}
            />
          )}

          <div className="w-full ml-4">
            <span className="block">{user?.fullname}</span>
            {/* <span className="text-sm">{item.username}</span> */}
          </div>
        </div>
      </li>
      {items?.map((item, index) => (
        <li key={index} className={`${item.isBordBottom && "li-styled"}`}>
          <div className={`profile_styled hover:bg-secondary mb-4`}>
            {item.img && (
              <Avatar
                width={"w-12"}
                src_url={user.avatr}
                alt_name={user.name}
              />
            )}

            {item.icon && <span>{item.icon}</span>}

            <div className="w-full ml-4">
              <span className="block">{item.name}</span>
              <span className="text-sm">{item.username}</span>
            </div>
          </div>
        </li>
      ))}

      <li onClick={logOutHandler} className="li_styled">
        <div className={`profile_styled hover:bg-secondary mb-4`}>
          <span>
            <BsFillCaretRightFill />
          </span>

          <div className="w-full ml-4">
            <span className="block">Log Out</span>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default AccountMenu;
