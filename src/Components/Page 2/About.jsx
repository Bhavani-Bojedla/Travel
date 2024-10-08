import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";

export default function About() {
  return (
    <div className="flex items-center justify-between w-full px-40 pt-10 pb-5 mx-auto pl-36 bg-sky-50">
      <div className="w-120 page2-left">
        <div className="mb-2 font-bold text-sky-500">About Us</div>

        <div className="mb-4 text-4xl font-semibold">
          Plan Your Dream Holiday With United Tours India
        </div>

        <div className="mb-5 text-justify">
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
            <FaCircleCheck className="h-10 mr-1 text-sm text-sky-500" />
            <div className="text-sm">
              Personalized travel experiences for all.
            </div>
          </div>
          <div className="flex items-center page2-box">
            <FaCircleCheck className="h-10 mr-1 text-sm text-sky-500" />
            <div className="text-sm">
              Seamless travel arrangements and comfort.
            </div>
          </div>
          <div className="flex items-center page2-box">
            <FaCircleCheck className="h-10 mr-1 text-sm text-sky-500" />
            <div className="text-sm">Expert guides and local insights.</div>
          </div>
          <div className="flex items-center page2-box">
            <FaCircleCheck className="h-10 mr-1 text-sm text-sky-500" />
            <div className="text-sm">
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

      <div className="w-1/2 pl-10 page2-right">
        <div className="w-full bg-cover h-72 bg-home"></div>
      </div>
    </div>
  );
}
