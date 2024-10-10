import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import image_1 from '../../assets/Images/AboutPic1.png';
import image_2 from '../../assets/Images/AboutPic2.png';
import image_3 from '../../assets/Images/AboutPic3.png';
export default function About() {
  return (
    <>
    <div className="px-5 bg-sky-50 lg:hidden md:hidden">
      <div className="font-bold text-sky-500 bg-sky-50">About Us</div>

      <div className="text-xl font-semibold">
        Plan Your Dream Holiday With United Tours India
      </div>
      </div>
    <div className="items-center justify-between w-full pb-5 mx-auto lg:flex md:flex lg:flex-row md:flex-row phone:flex-col-reverse phone:flex md:pt-5 phone:pt-3 lg:pt-10 lg:px-36 phone:px-6 md:px-20 lg:pl-44 bg-sky-50">
      <div className="lg:w-120 md:w-96 page2-left ">
        <div className="font-bold text-sky-500 phone:hidden lg:block md:block">About Us</div>

        <div className="mb-2 font-semibold phone:hidden lg:block md:block phone:text-2xl lg:text-4xl md:text-2.5xl">
          Plan Your Dream Holiday With United Tours India
        </div>

        <div className="mb-3 text-justify lg:text-base md:text-base phone:text-sm">
          At United Tours India, we bring your travel dreams to life with
          carefully crafted packages. Whether it’s exploring the rich heritage
          of Rajasthan, experiencing the magic of Agra, or celebrating vibrant
          festivals like Holi and Diwali, we offer personalized experiences to
          suit every traveler. Let us take care of the details while you enjoy a
          hassle-free, unforgettable journey through India’s most iconic
          destinations. Start planning your perfect holiday today!
        </div>

        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="flex items-center page2-box">
            <FaCircleCheck className="text-sm md:mr-2 phone:mr-2 lg:mr-1 md:h-[0.8rem] phone:h-5 phone:w-5 md:w-5 lg:h-10 text-sky-500" />
            <div className="lg:text-sm md:text-sm phone:text-xs">
              Personalized travel experiences for all.
            </div>
          </div>
          <div className="flex items-center page2-box">
            <FaCircleCheck className="text-sm md:mr-2 phone:mr-2 lg:mr-1 md:h-5 md:w-5 lg:h-10 phone:h-6 phone:w-6 text-sky-500" />
            <div className="lg:text-sm md:text-sm phone:text-xs">
              Seamless travel arrangements and comfort.
            </div>
          </div>
          <div className="flex items-center page2-box">
            <FaCircleCheck className="text-sm md:mr-2 phone:mr-2 lg:mr-1 md:h-[0.85rem] md:w-4 phone:h-5 phone:w-[1.2rem] lg:h-10 lg:w-5 text-sky-500" />
            <div className="lg:text-sm md:text-sm phone:text-xs">Expert guides and local insights.</div>
          </div>
          <div className="flex items-center page2-box">
            <FaCircleCheck className="text-sm md:mr-2 phone:mr-2 lg:mr-1 md:h-7 md:w-5 lg:h-10 phone:h-5 phone:w-6 text-sky-500" />
            <div className="lg:text-sm md:text-sm phone:text-xs">
              Affordable packages with unique offerings.
            </div>
          </div>
        </div>

        <hr className="mb-5 border-t-4" />

        <button className="flex items-center px-4 py-2 text-white rounded bg-sky-950 ">
          <span>View More</span>
          <MdArrowRightAlt  className="ml-2 transform scale-x-150" />
        </button>
      </div>

      <div className="lg:ml-5 md:ml-5 md:w-54 lg:w-6/12 phone:w-72 lg:flex md:block phone:flex phone:justify-around phone:items-center page2-right">
        
        <img src={image_1} className="object-cover lg:h-96 lg:mt-0 md:mt-5 md:h-48 phone:h-40"></img>
        
        <div className="flex flex-col items-center justify-center  bg-white rounded-lg shadow-md lg:ml-5 md:ml-14 md:py-2 lg:mt-0 md:mt-10 lg:w-28 md:w-28 phone:w-24 md:h-[19rem] phone:h-[13rem] lg:h-96">
          
          <div className="flex flex-col items-center">
            <img src={image_2} className="object-cover md:mr-5 phone:mr-5 lg:h-20 md:h-14 phone:h-10"></img>
            <div className="lg:font-bold md:font-bold phone:font-semibold lg:pr-5 md:pr-6 phone:pr-5 phone:text-sm md:text-xl lg:text-2xl">678K+</div>
            <div className="font-semibold md:ml-2 phone:ml-3 lg:text-base phone:text-xs md:text-base">Global <br/> Tourist Travel</div>
          </div>
          
          <hr className="border-t-2 md:my-3 lg:my-3 lg:w-28 md:w-24 phone:w-20 phone:my-1" />
          
          <div className="flex flex-col items-center "> 
            <img src={image_3} className="object-cover md:mr-5 phone:mr-5 lg:h-20 md:h-14 phone:h-10"></img>
            <div className="lg:font-bold md:font-bold md:text-xl lg:text-2xl phone:text-sm md:pr-8 phone:pr-5 lg:pr-10">89+</div>
            <div className="font-semibold md:pl-4 lg:pl-4 lg:text-base phone:ml-5 phone:text-xs md:text-base">Travel Location</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
