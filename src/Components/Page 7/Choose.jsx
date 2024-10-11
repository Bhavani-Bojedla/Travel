import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import image_1 from "../../assets/Images/ProcesPic2.jpg";
import image_2 from "../../assets/Images/ChoosePic1.png";
import image_3 from "../../assets/Images/ChoosePic2.png";
import image_4 from "../../assets/Images/ChoosePic3.png";
export default function Choose() {
  return (
    <>
      <div className="px-5 pt-5 bg-slate-200 lg:hidden">
        <div className="font-bold text-sky-500">WHY CHOOSE US</div>

        <div className="text-xl font-semibold">
          Get The Best Travel Experience With United Tours India
        </div>
      </div>
      <div className="items-center justify-center w-full pb-5 mx-auto lg:flex md:flex lg:flex-row md:flex-col-reverse phone:flex-col-reverse phone:flex md:pt-5 phone:pt-3 lg:pt-10 lg:px-36 phone:px-6 md:px-20 lg:pl-40 bg-slate-200">
        <div className="lg:w-[34rem] md:w-full md:mt-5 page2-left ">
          <div className="font-bold text-sky-500 phone:hidden lg:block md:hidden">
            WHY CHOOSE US
          </div>

          <div className="mb-2  font-bold phone:hidden lg:block md:hidden phone:text-2xl lg:text-3xl md:text-2.5xl">
            Get The Best Travel <br /> Experience With United Tours India
          </div>

          <div className="mb-3 font-medium text-justify lg:text-base md:text-base phone:text-sm">
            At United Tours India, we prioritize your comfort, ensuring every
            detail is perfect. With us, you get personalized travel plans
            tailored to your needs. Our knowledgeable guides and well-planned
            itineraries guarantee a hassle-free experience. We offer competitive
            prices while maintaining high standards of service. Choose us for a
            memorable journey filled with rich cultural experiences, luxurious
            comfort, and unforgettable memories.
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col items-start mr-10">
              <svg className="w-20 h-20">
                <circle
                  cx="50%"
                  cy="50%"
                  r="25"
                  stroke="#3b82f6"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="150"
                  strokeDashoffset="12"
                  strokeLinecap="round"
                  transform="rotate(85 35 38)"
                />
                <text
                  x="43%"
                  y="55%"
                  textAnchor="middle"
                  dy=".3em"
                  className="text-sm font-bold fill-blue-500"
                >
                  92%
                </text>
              </svg>
              <div className="mt-2 font-bold">Organised Group Tour</div>
            </div>
            <div className="flex flex-col items-start">
              <svg className="w-20 h-20">
                <circle
                  cx="50%"
                  cy="50%"
                  r="25"
                  stroke="#3b82f6"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="150"
                  strokeDashoffset="15.7"
                  strokeLinecap="round"
                  transform="rotate(85 35 38)"
                />
                <text
                  x="43%"
                  y="55%"
                  textAnchor="middle"
                  dy=".3em"
                  className="text-sm font-bold fill-blue-500"
                >
                  90%
                </text>
              </svg>
              <div className="mt-2 font-bold">Single Customized Trip</div>
            </div>
          </div>
        </div>

        <div className=" md:w-full lg:w-8/12 md:mr-14 phone:w-72 lg:flex lg:flex-row lg:justify-between md:flex md:justify-between phone:flex phone:flex-col phone:pr-5 phone:items-center page2-right">
          <img
            src={image_1}
            className="object-cover lg:h-80 lg:mt-0 md:mt-5 md:h-72 phone:h-60"
          ></img>

          <div className="flex flex-col items-center justify-between w-full divide-y-2 divide-gray-400 ml-7 divide-dashed">
            <div className="flex items-center justify-between w-full py-4">
              <div>
                <img src={image_2} className="w-16 h-16" />
              </div>
              <div className="ml-2 lg:w-80 md:w-80 phone:w-52">
                <div className="text-lg font-bold text-sky-950">Tour Guide</div>
                <div className="ml-1 text-sm font-medium">
                  Our experienced tour guides offer in-depth knowledge and
                  insights, ensuring you don't miss a thing. Enjoy a seamless
                  journey with their expert assistance.
                </div>
              </div>
            </div>

            <div className="flex items-center w-full py-4 justify-evenly">
              <div>
                <img src={image_3} className="w-16 h-16" />
              </div>
              <div className="ml-2 lg:w-80 md:w-80 phone:w-52">
                <div className="text-lg font-bold text-sky-950">
                  Friendly Price
                </div>
                <div className="ml-1 text-sm font-medium">
                  We offer budget-friendly travel packages without compromising
                  on quality. Get the best value for your money with
                  unforgettable experiences.
                </div>
              </div>
            </div>

            <div className="flex items-center w-full py-4">
              <div>
                <img src={image_4} className="w-16 h-16" />
              </div>
              <div className="ml-2 lg:w-80 md:w-80 phone:w-52">
                <div className="text-lg font-bold text-sky-950">
                  Luxurious Tours
                </div>
                <div className="font-medium md:text-sm lg:text-sm phone:text-sm">
                  Indulge in the finest travel experiences with our luxury tour
                  packages. Enjoy premium accommodations, exclusive activities,
                  and first-class comfort.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
