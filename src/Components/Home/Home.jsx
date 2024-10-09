import React from "react";
import Navbar from "../Navbar/Navbar";
import Activity from "../Page1/Activity";
import About from "../Page 2/About";
import Destinations from "../Page 3/Destinations";

export default function Home() {
  return (
    <>
      <div className="w-full  lg:h-[125vh] md:h-[73.2vh] phone:h-[35.8vh] lg:bg-cover md:bg-cover phone:bg-cover bg-home ">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="font-semibold text-white md:text-xs phone:text-small lg:text-lg lg:mt-36 md:mt-16 phone:mt-2 lg:ml-98 md:ml-53 phone:ml-22 ">
          Exclusive & Memorable
        </div>
        <div className="flex items-center justify-center font-bold text-white lg:mt-8 md:mt-0 md:ml-8 lg:ml-0 phone:ml-0 md:text-4xl phone:text-xl lg:text-6xl phone:text-3xl">
          UNITED TOURS INDIA
        </div>
        <div className="font-semibold text-white md:text-xs  lg:mt-1 md:mt-1 phone:text-small lg:ml-140 md:ml-[29rem] phone:ml-[13.2rem] lg:text-lg">
          Explore India With Us
        </div>
      </div>
      <Activity />
      <About />
      <Destinations />
    </>
  );
}
