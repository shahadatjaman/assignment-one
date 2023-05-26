import React from "react";
import "./styles.css";
import { useWindowWidth } from "../../../hook/useWidth";

const Avatar = (props) => {
  const { src_url, alt_name, width } = props;
  const isMatch = useWindowWidth({ width: 900 });

  return (
    <div className={`avatar-wrapper ${isMatch && "w-8"}`}>
      <img
        className={`${!isMatch && width}  rounded`}
        src={src_url}
        alt={alt_name}
      />
    </div>
  );
};

export default Avatar;
