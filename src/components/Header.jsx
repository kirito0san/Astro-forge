import { useRef } from "react";

const Header = () => {
  const show = useRef(null);
  const burger = useRef(null);
  const shaDow = useRef(null);
  return (
    <div className="container shadow-xl py-3 px-4 mx-auto flex bg-[#9F7F09]  justify-between items-center ">
      <div className="font-bold text-5xl  text-white ">Astro Forge</div>
      <div ref={shaDow} className="flex  justify-between  items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="md:hidden w-[40px] cursor-pointer z-20 h-[40px] text-black"
          ref={burger}
          onClick={() => {
            show.current.classList.toggle("w-0");
            show.current.classList.toggle("w-[200px]");
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

        <div
          className="w-0 md:w-auto md:bg-[#9F7F09] md:flex-row md:static md:h-auto  aLinks  overflow-hidden absolute  z-10 bottom-0 right-0 bg-white h-screen flex flex-col  transition-all"
          ref={show}
        >
          <a href="">discord</a>
          <a href="https://zkillboard.com/">zkillboard</a>
          <a href="https://www.eveonline.com/">alliance</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
