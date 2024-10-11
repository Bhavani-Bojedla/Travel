import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import image_1 from "../../assets/Images/logo.webp";
import Card from "./Card";
export default function Footer() {
  return (
    <div className="pt-10 bg-slate-200">
    <div className="w-full lg:ml-32 md:ml-2 bg-slate-200">
    <Card/>
    </div>
    <footer className="w-full pb-2 text-center text-white bg-blue-950">
        
      {/* Upper Section with Contact Info */}
      <div className="flex p-2 lg:items-end lg:flex lg:flex-row md:flex md:flex-row phone:justify-center phone:items-center lg:justify-end md:justify-between phone:flex phone:flex-col md:px-5 text-blue-950 bg-slate-200 ">
        <div className="flex items-center lg:mx-5 phone:mr-16">
          <GiRotaryPhone className="text-5xl text-blue-950" />
          <div className="ml-3 text-left">
            <h4 className="font-bold">Contact</h4>
            <p>+12 3456789012</p>
          </div>
        </div>
        <div className="flex items-center lg:mx-5">
          <TfiEmail className="text-4xl text-blue-950" />
          <div className="ml-3 text-left">
            <h4 className="font-bold ">Mail Address</h4>
            <p>francetourism@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center lg:mx-5">
          <FaMapMarkerAlt className="text-4xl text-blue-950" />
          <div className="ml-3 text-left">
            <h4 className="font-bold">Location</h4>
            <p className="text-sm">
              Lorem ipsum is simply dummy
              <br />
              test of the printing
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex w-full lg:px-10 md:pl-28 ">
        <div className="lg:w-1/3 md:w-1/3"></div>
        <div className="items-end justify-between lg:flex-row lg:flex md:flex md:flex-col md:justify-end">
          <div className="lg:w-[30rem] md:w-[27rem] phone:w-[22rem] phone:px-2">
            <div className="mb-5 mt-7">
              <img
                src={image_1} // Add the logo URL here
                alt="United Tours India Logo"
                className="w-40"
              />
            </div>

            <p className="text-sm lg:text-left md:text-left phone:text-justify">
              United Tours India is your trusted travel partner, offering
              expertly
              <br />
              curated tours across Rajasthan, Agra, and beyond. We specialize in
              <br />
              providing unique cultural experiences, from historical
              explorations
              <br />
              to vibrant festival celebrations. Our dedicated team ensures
              <br />
              seamless travel arrangements, personalized itineraries, and top-
              <br />
              notch service at every step. Whether you're seeking budget-
              <br />
              friendly packages or luxurious tours, we cater to all your travel
              <br />
              needs. Let us turn your holiday dreams into unforgettable
              <br />
              memories!
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex lg:justify-around phone:px-2 md:justify-between md:px-16 md:py-10 lg:py-0 md:mt-3 lg:w-7/12 md:w-full ">
          <div className="mb-12 text-left">
            <h4 className="mb-2 text-xl font-bold">Quick Links</h4>
            <ul className="list-none ">
              <li>
                <a className="text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    About Us
                  </span>
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    Destination
                  </span>
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>
                  <span className="ml-2 cursor-pointer hover:underline-offset-2 hover:underline">
                    Cuisines
                  </span>{" "}
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    Blogs
                  </span>
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-16 text-left mb-7">
            <h4 className="mb-2 text-xl font-bold">Activities</h4>
            <ul className="list-none">
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    Historical Place
                  </span>
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    Shopping Fun
                  </span>
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>
                  <span className="ml-2 cursor-pointer hover:underline-offset-2 hover:underli4e">
                    Holi Celebration
                  </span>{" "}
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    Pushkar Fair
                  </span>
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    Indian Wedding
                  </span>
                </a>
              </li>
              <li>
                <a className="mb-1 text-sm text-white ">
                  <span className="hover:no-underline">&mdash; </span>{" "}
                  <span className="ml-2 cursor-pointer hover:underline-offset-4 hover:underline">
                    Diwali Celebration
                  </span>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
     
     
      <div className="flex items-center justify-center w-full mb-20 lg:gap-4 lg:mt-2 lg:pr-48 ">
        {/* Instagram Icon */}
        <div className="relative flex items-center justify-center w-16 h-16 cursor-pointer group">
          <div className="absolute inset-0 flex items-center justify-center p-2 rounded-full">
            <div className="w-full h-full border-2 border-transparent rounded-full group-hover:border-sky-500"></div>
          </div>
          <div className="z-10 flex items-center justify-center w-10 h-10 border-2 border-white rounded-full group-hover:border-sky-500">
            <FaInstagram className="text-2xl text-white group-hover:text-sky-500" />
          </div>
        </div>

        {/* Facebook Icon */}
        <div className="relative flex items-center justify-center w-16 h-16 cursor-pointer group">
          <div className="absolute inset-0 flex items-center justify-center p-2 rounded-full">
            <div className="w-full h-full border-2 border-transparent rounded-full group-hover:border-sky-500"></div>
          </div>
          <div className="z-10 flex items-center justify-center w-10 h-10 border-2 border-white rounded-full group-hover:border-sky-500">
            <FaFacebookF className="text-2xl text-white group-hover:text-sky-500" />
          </div>
        </div>

        {/* Threads Icon */}
        <div className="relative flex items-center justify-center w-16 h-16 cursor-pointer group">
          <div className="absolute inset-0 flex items-center justify-center p-2 rounded-full">
            <div className="w-full h-full border-2 border-transparent rounded-full group-hover:border-sky-500"></div>
          </div>
          <div className="z-10 flex items-center justify-center w-10 h-10 border-2 border-white rounded-full group-hover:border-sky-500">
            <FaInstagram className="text-2xl text-white group-hover:text-sky-500" />
          </div>
        </div>

        {/* YouTube Icon */}
        <div className="relative flex items-center justify-center w-16 h-16 cursor-pointer group">
          <div className="absolute inset-0 flex items-center justify-center p-2 rounded-full">
            <div className="w-full h-full border-2 border-transparent rounded-full group-hover:border-sky-500"></div>
          </div>
          <div className="z-10 flex items-center justify-center w-10 h-10 border-2 border-white rounded-full group-hover:border-sky-500">
            <FaYoutube className="text-2xl text-white group-hover:text-sky-500" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="border-gray-300 " />
      <div className="flex items-center justify-between w-full text-sm md:h-8 phone:flex-col-reverse lg:flex-row md:flex-row lg:h-8 lg:px-40 md:px-10 phone:px-1 align-center ">
        <p className="lg:ml-20 ">&copy; 2024 United Tours India. All Rights Reserved.</p>
        <div className="flex gap-x-4 phone:mb-3 lg:mb-0 md:mb-0">
          <a  className="text-white">Support</a>
          <span className="text-white">|</span>
          <a  className="text-white">Privacy</a>
          <span className="text-white">|</span>
          <a className="text-white">Terms & Conditions</a>
        </div>
      </div>
    </footer>
    </div>
  );
}
