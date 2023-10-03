import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navigation() {
  const [closed, setMenu] = useState(false);
  return (
    <>
      <div className=" text-white md:flex md:gap-8 md:justify-between bg-black md:items-center md:mx-16 md:py-3 sticky top-0 z-50 max-w-screen">
        <div className="log">
          <img
            src="./photo/logo-removebg-preview.png"
            className="w-[6vw] md:block hidden"
            alt=""
          />
        </div>
        <div className="z-10">
          <i
            className={`fa fa-bars text-[25px] text-white border p-1 mt-3 hover:text-green-600 md:hidden font-bold ${
              !closed ? "hidden" : "mx-16 block w-fit  top-0"
            }`}
            onClick={() => {
              setMenu(false);
            }}
          ></i>
          <i
            className={`fa fa-close md:hidden text-white text-[25px]  border p-1 mt-3  hover:text-green-600 font-bold ${
              closed ? "hidden" : "mx-16 block w-fit "
            } `}
            onClick={() => {
              setMenu(true);
            }}
          ></i>
          <ul
            className={`md:flex md:flex-row md:gap-5 ${
              closed
                ? "hidden"
                : "flex flex-col gap-5 h-full w-[80%] mx-16 bg-gray-800 p-1 md:bg-black"
            }`}
          >
            <a href="#home">
              <li className="first-letter:uppercase text-white hover:text-green-600">
                home
              </li>
            </a>

            <a href="#collection">
              <li className="first-letter:uppercase text-white hover:text-green-600">
                Our Collection
              </li>
            </a>

            <a href="#bugati">
              <li className="first-letter:uppercase text-white hover:text-green-600">
                New Car
              </li>
            </a>
            <a href="#contact">
              <li className="first-letter:uppercase text-white hover:text-green-600">
                Contact us
              </li>
            </a>

            <Link to="/">
              <li className="first-letter:uppercase text-white hover:text-green-600">
                help
              </li>
            </Link>
          </ul>
        </div>
        <div
          className={`mg:flex md:flex-row md:gap-7 items-center ${
            closed ? "hidden" : "flex flex-col gap-5 h-full "
          }`}
        >
          <input type="text" placeholder="Search..." className="px-2" />

          <i className="fa fa-search md:relative   md:right-[55px] md:p-2 text-orange-300 cursor-pointer"></i>
        </div>
      </div>
    </>
  );
}
