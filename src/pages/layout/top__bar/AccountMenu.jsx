import React from "react";
import "./styles.css";
import { items, user } from "./data";
import Avatar from "./Avatar";

const AccountMenu = () => {
  return (
    <ul className="ul-styled">
      {items?.map((item, index) => (
        <li key={index} className={`${item.isBordBottom && "li-styled"}`}>
          <div
            className={`profile_styled ${
              item.isHoverSec && "hover:bg-secondary"
            }  ${item.isBordBottom && "mb-4"}`}
          >
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
    </ul>
  );
};

export default AccountMenu;
