import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Loading = () => {
  const parentRef = useRef();
  const childRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(childRef.current, {
      width: "100%",
      duration: 2,
      delay: 0.3,
      ease: "sine.out",
    });
    tl.to(parentRef.current, {
      display: "none",
    });
  });
  return (
    <div ref={parentRef} className="h-[0.4vh] w-full fixed z-[999]">
      <div ref={childRef} className="child w-0 h-full bg-zinc-200"></div>
    </div>
  );
};

export default Loading;
