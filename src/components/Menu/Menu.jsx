import React, { useRef, useState } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef(null);
  const [menuTop, setMenuTop] = useState(100);
  useGSAP(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        // top: `${menuTop}%`,
        top: "0",
        duration: 0.6,
        ease: "0.65, 0, 0.35, 1",
      });
    } else {
      gsap.to(menuRef.current, {
        top: "-100%",
        duration: 0.6,
        ease: "0.65, 0, 0.35, 1",
        onComplete: () => {
          gsap.set(menuRef.current, { top: "100%" });
        },
      });
    }
  }, [menuOpen, menuTop]);

  return (
    <div
      ref={menuRef}
      className={`fixed h-screen top-[100%] w-full bg-[#1A1A1A] z-[50] flex`}
    >
      <MenuLeft />
      <MenuRight menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Menu;
