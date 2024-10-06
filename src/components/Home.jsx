import React, { useRef } from "react";
import Navbar from "./Navbar";
import Center from "./Center";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = ({ menuOpen, setMenuOpen }) => {
  const loaderRef = useRef(null);
  const homeRef = useRef(null);
  useGSAP(() => {
    gsap.to(loaderRef.current, {
      y: "-100%",
      delay: 2.5,
      duration: 0.6,
      ease: "0.65, 0, 0.35, 1",
    });
    gsap.from(homeRef.current, {
      y: 20,
      scale: 1.05,
      duration: 1.1,
      delay: 2.3,
      ease: "power4.out",
    });

    
  });
  return (
    <div id="main" className="h-screen overflow-hidden relative w-full select-none">
      <div
        ref={loaderRef}
        className="fixed z-[99] h-full w-full bg-[#1A1A1A]"
      ></div>
      <div ref={homeRef} id="home" className="h-full w-full">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Center />
      </div>
    </div>
  );
};

export default Home;
