import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex justify-between w-full phone:pr-5 lg:pt-12 md:pt-6 phone:pt-3">
      <div className=" lg:pl-28 md:pl-12 phone:pl-3">
        <div className="nav-left bg-logo"></div>
      </div>
      <div className="lg:hidden md:hidden">
        <HiMenuAlt3
          className="text-3xl text-white cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="hidden lg:flex md:flex lg:pl-5 md:pl-3 phone:pl-2 nav-middle">
        <div className=" nav-button">Cart</div>
        <div className=" nav-button">Checkout</div>
        <div className=" text-blue-950 nav-button">Home</div>
        <div className=" nav-button">My Account</div>
        <div className=" nav-button">Page</div>
        <div className=" nav-button">Shop</div>
      </div>

      <div className="hidden lg:flex md:flex lg:pr-20 md:mt-1 md:pr-5 nav-right">
        <IoSearch className="text-lg text-white duration-300 cursor-pointer md:mr-5 lg:mr-10 hover:text-blue-950" />
        <FaUser className="text-white duration-300 cursor-pointer hover:text-blue-950" />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-0 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-32" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="pt-2 pb-3 mx-auto mt-4 ml-8 text-center rounded-lg shadow-md bg-blue-50 w-36 h-68">
          {/* Close Button */}
          <AiOutlineClose
            className="ml-24 text-2xl text-black cursor-pointer "
            onClick={toggleSidebar}
          />
          <div className="flex flex-col w-full space-y-2 font-semibold ">
          <div
              className="px-4 py-2 transition-colors rounded cursor-pointer text-blue-950 hover:bg-gray-200"
              onClick={toggleSidebar}
            >
              Home
            </div>
            <div
              className="px-4 py-2 transition-colors rounded cursor-pointer hover:bg-gray-200"
              onClick={toggleSidebar}
            >
              Cart
            </div>
            <div
              className="px-4 py-2 transition-colors rounded cursor-pointer hover:bg-gray-200"
              onClick={toggleSidebar}
            >
              Checkout
            </div>
            <div
              className="px-4 py-2 transition-colors rounded cursor-pointer hover:bg-gray-200"
              onClick={toggleSidebar}
            >
              My Account
            </div>
            <div
              className="px-4 py-2 transition-colors rounded cursor-pointer hover:bg-gray-200"
              onClick={toggleSidebar}
            >
              Page
            </div>
            <div
              className="px-4 py-2 transition-colors rounded cursor-pointer hover:bg-gray-200"
              onClick={toggleSidebar}
            >
              Shop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
