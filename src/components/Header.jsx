import { useRef } from "react";

const Header = () => {
  const show = useRef(null);
  const show1 = useRef(null);
  const burger = useRef(null);
  const shaDow = useRef(null);

  return (
    <div className="container gap-4 py-3 px-4 mx-auto flex justify-between md:justify-center items-center ">
      <div className="nav w-0 top-[0] h-[190px] " ref={show}>
        <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/hmk9N7EyDY">
          discord
        </a>
        <a rel="noopener noreferrer" target="_blank">
          events
        </a>
      </div>

      <div className="font-bold text-5xl text-center uppercase font-anton  text-white ">
        <p className="">AstroForge</p>
        <p className="text-red-800 text-4xl">vanguards</p>
      </div>
      <div ref={shaDow} className="flex  justify-between  items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="md:hidden w-[40px] cursor-pointer z-20 h-[40px] text-red-800"
          ref={burger}
          onClick={() => {
            show.current.classList.toggle("w-0");
            show.current.classList.toggle("!w-[240px]");
            show1.current.classList.toggle("w-0");
            show1.current.classList.toggle("!w-[240px]");
            burger.current.classList.toggle("text-black");
            shaDow.current.classList.toggle("shaDow");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>

        <div className="nav w-0 top-[190px] h-[calc(100vh-190px)] " ref={show1}>
          <a target="_blank" href="https://zkillboard.com/" rel="noreferrer">
            <p>zkillboard</p>
          </a>
          <a target="_blank" href="https://www.eveonline.com/" rel="noreferrer">
            <p>alliance</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
