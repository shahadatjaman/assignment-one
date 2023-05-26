import React from "react";
import AccountMenu from "./AccountMenu";

const Account = ({ closeHandler }) => {
  return (
    <div
      onMouseLeave={closeHandler}
      className="absolute top-11 w-account right-0"
    >
      <AccountMenu />
    </div>
  );
};

export default Account;
