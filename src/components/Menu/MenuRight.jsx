import React from "react";
import RightText from "./RightText";
import RightBottom from "./RightBottom";

const MenuRight = ({ menuOpen, setMenuOpen }) => {
  const openHome = () => {
    setMenuOpen(false);
  };
  return (
    <div className="w-[27%] h-full p-5 pr-3 select-none">
      <h6
        onClick={openHome}
        className="text-end cursor-pointer uppercase text-xs font-[thinFont]"
      >
        close
      </h6>
      <img src="../../../fav.svg" alt="" className="w-12 my-5" />
      <RightText />
      <RightBottom />
    </div>
  );
};

export default MenuRight;
