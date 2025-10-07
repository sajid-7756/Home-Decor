import React from "react";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="container mx-auto flex">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/products"}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={"/wishlist"}>Wishlist</NavLink>
                </li>
              </ul>
            </div>
            <Link to={"/"} className="cursor-pointer text-2xl font-bold">
              HomeDecor
            </Link>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 hidden lg:flex gap-4">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
              </li>
            </ul>
            <Link
              to={"/products"}
              className="btn relative hover:bg-blue-600 font-medium py-2.5 px-5 rounded overflow-hidden group transition-colors duration-500"
            >
              <span className="relative z-10">Visit Shop</span>
              <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
