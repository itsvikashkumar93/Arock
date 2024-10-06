import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { IoMdPlay } from "react-icons/io";
const Center = () => {
  const h1Ref = useRef(null);

  useGSAP(() => {
    let clutter = "";

    const splitted = h1Ref.current.textContent.split("");
    splitted.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
    h1Ref.current.innerHTML = clutter;

    gsap.from(`h1 span`, {
      y: 50,
      opacity: 0,
      delay: 2.23,
      stagger: 0.15,
    });
  });

  return (
    <div className="h-[94vh] flex items-center justify-center">
      <div className="hero">
        <div className="relative flex items-start gap-2">
          <h1
            ref={h1Ref}
            className="text-[21vw] font-[ultraBold] overflow-hidden pr-2 tracking-tight font-bold leading-[18vw] uppercase"
          >
            arock
          </h1>
          <span className="text-3xl border border-4 mt-5 w-10 h-10 flex items-center px-2 rounded-full">
            R
          </span>
        </div>
        <div className="small-container flex justify-between ">
          <div className="flex items-center justify-center gap-2 ">
            <IoMdPlay className="p-3 text-4xl border rounded-full" />
            <h4 className="uppercase leading-none text-xs font-[thinFont]">
              Play <br />
              the film
            </h4>
          </div>
          <div className="flex justify-between gap-20 mr-7">
            <h4 className="uppercase leading-none text-xs font-[thinFont]">
              creator <br />
              curator
            </h4>
            <h4 className="uppercase leading-none text-xs font-[thinFont]">
              new york <br />
              los angeles
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
