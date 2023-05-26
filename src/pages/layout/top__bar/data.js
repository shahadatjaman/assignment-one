import {
  BsFillBookmarkFill,
  BsFillCreditCardFill,
  BsFillBasket3Fill,
  BsFillAirplaneEnginesFill,
  BsFillCaretRightFill,
  BsFillQuestionOctagonFill,
} from "react-icons/bs";

export const user = {
  name: "Shahadat Jaman",
  username: "@shahadat.jaman",
  avatr:
    "https://res.cloudinary.com/dza2t1htw/image/upload/v1677676923/1676712410615_1_d4pahb.jpg",
};

export const items = [
  {
    name: user.name,
    img: user.avatr,
    username: user.username,
    isBordBottom: true,
  },
  {
    name: "Portfolio",
    icon: <BsFillCreditCardFill />,
  },
  {
    name: "Basket",
    icon: <BsFillBasket3Fill />,
  },
  {
    name: "Watchlist",
    icon: <BsFillBookmarkFill />,
    isBordBottom: true,
  },
  {
    name: "Go Pro",
    icon: <BsFillAirplaneEnginesFill />,
    isHoverSec: true,
  },
  {
    name: "Settings",
    icon: <BsFillAirplaneEnginesFill />,
  },

  {
    name: "Support",
    icon: <BsFillQuestionOctagonFill />,
  },
  {
    name: "Logout",
    icon: <BsFillCaretRightFill />,
  },
];
