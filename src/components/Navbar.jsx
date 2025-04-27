import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";

// 90e0ef
// 4ad66d

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-lg bg-white border border-[#45b3e0] text-[#45b3e0] font-[600]"
              : "px-3 py-2 rounded-lg bg-[#45b3e0] border border-[#45b3e0] text-white font-[600]"
          }
        >
          Awareness
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/try-prediction"}
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-lg bg-white border border-[#45b3e0] text-[#45b3e0] font-[600]"
              : "px-3 py-2 rounded-lg bg-[#45b3e0] border border-[#45b3e0] text-white font-[600]"
          }
        >
          Try Prediction
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/counseling"}
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-lg bg-white border border-[#45b3e0] text-[#45b3e0] font-[600]"
              : "px-3 py-2 rounded-lg bg-[#45b3e0] border border-[#45b3e0] text-white font-[600]"
          }
        >
          Counseling
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 rounded-lg bg-white border border-[#45b3e0] text-[#45b3e0] font-[600]"
              : "px-3 py-2 rounded-lg bg-[#45b3e0] border border-[#45b3e0] text-white font-[600]"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#caf0f8ce] py-2 flex flex-col justify-center items-center">
      <div className="navbar sm:w-10/12 w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden border border-[#45b3e0]  text-[#45b3e0] rounded-lg bg-white mr-2"
            >
              <FaBars className=" " />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-3 shadow border border-[#45b4e03b] gap-1 bg-[#c9e9f6]"
            >
              {links}
            </ul>
          </div>
          <p className="text-xl">
            <img className="w-14 h-14" src={logo} alt="" />
          </p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
