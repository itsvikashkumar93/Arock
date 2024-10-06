import React from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const openMenu = () => {
    setMenuOpen(true);
  };
  return (
    <div className="h-[6vh] px-3 py-4 flex items-center justify-between">
      <div className="nav-part1">
        <img src="../../fav.svg" alt="logo" className="h-12" />
      </div>
      <div className="nav-part2">
        <button onClick={openMenu} className="text-xs font-[thinFont]">
          MENU
        </button>
      </div>
    </div>
  );
};

export default Navbar;
