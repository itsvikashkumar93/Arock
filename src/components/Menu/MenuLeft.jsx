import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const MenuLeft = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Apply VanillaTilt to the referenced element
    VanillaTilt.init(tiltRef.current, {
      max: 5,
      speed: 400,
      glare: false,
    });

    // Cleanup to remove the effect when component unmounts
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="w-[73%] h-full ">
      <div
        ref={tiltRef}
        className="w-full h-full relative flex items-center px-10"
      >
        <img
          className="w-[92%] h-[95%] absolute scale-[0.90] object-cover"
          src="../../../menu.webp"
          alt=""
        />
        <img
          className="w-[92%] h-[95%] absolute scale-[0.93] opacity-[60%] object-cover"
          src="../../../menu.webp"
          alt=""
        />
        <img
          className="w-[92%] h-[95%] absolute scale-[0.96] opacity-[40%] object-cover"
          src="../../../menu.webp"
          alt=""
        />
        <img
          className="w-[92%] h-[95%] absolute scale-[0.99] opacity-[20%] object-cover"
          src="../../../menu.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuLeft;
