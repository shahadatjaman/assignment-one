import React from "react";
import { socialIcons } from "./data";

const SocialIcons = () => {
  return (
    <div className="mt-8">
      <ul className="flex">
        {socialIcons?.map((social, index) => (
          <li
            key={index}
            className="flex mr-8 flex-col justify-center items-center"
          >
            <span
              style={{ background: social.bg }}
              className="w-8 m-0 h-8 rounded-full overflow-hidden flex justify-center items-center"
            >
              <img className="w-1/2" src={social.img} />
            </span>
            <span>{social.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
