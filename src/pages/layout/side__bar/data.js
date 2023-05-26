import { AiFillHome } from "react-icons/ai";
import {
  BsFillTrophyFill,
  BsMessenger,
  BsFillBriefcaseFill,
  BsFillChatRightDotsFill,
} from "react-icons/bs";
export const logo =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1684831409/rsz_stockgroblack_hnpe3m.png";

export const menu = [
  {
    name: "home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    name: "arena",
    path: "/",
    icon: <BsFillTrophyFill />,
  },
  {
    name: "market",
    path: "/",
    icon: <BsMessenger />,
  },
  {
    name: "portfolio",
    path: "/",
    icon: <BsFillBriefcaseFill />,
  },
  {
    name: "social",
    path: "/",
    icon: <BsFillChatRightDotsFill />,
  },
];
