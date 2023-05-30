import React from "react";
import { socialIcons } from "./data";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/";
import { useLoginMutation } from "../../features/auth/authApi";
import { useNavigate } from "react-router-dom";

const SocialIcons = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const authHandler = async () => {
    signInWithPopup(auth, provider).then(async (data) => {
      const { displayName, email, photoURL } = data.user;

      await login({
        fullname: displayName,
        email,
        avatar: photoURL ? photoURL : "",
      });

      navigate("/");
    });
  };

  return (
    <div className="mt-8">
      <ul className="flex">
        {socialIcons?.map((social, index) => (
          <li
            key={index}
            onClick={authHandler}
            className={`flex mr-8 flex-col justify-center items-center ${
              social.name === "Google" && "cursor-pointer"
            }`}
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
