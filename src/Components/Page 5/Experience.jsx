import React from "react";
import image_1 from "../../assets/Images/ExpPic1.png";
import image_2 from "../../assets/Images/ExpPic2.png";
import image_3 from "../../assets/Images/ExpPic3.png";
import image_4 from "../../assets/Images/ExpPic4.png";
import image_5 from "../../assets/Images/ExpPic5.png";
import image_6 from "../../assets/Images/ExpPic6.png";
import image_7 from "../../assets/Images/image-6.jpeg";
export default function Experience() {
  return (
    <div className="py-10 bg-sky-50">
      <div className="text-center ">
        <div className="font-bold text-sky-500">Experience</div>
        <div className="text-2xl font-bold">
          Experience The Tourist Paradise
        </div>
      </div>

      <div className="flex flex-wrap justify-center mx-auto mt-10 lg:px-36 md:px-20 lg:gap-x-5 phone:gap-x-5 phone:gap-y-10 md:gap-x-10 md:gap-y-10">
        <div className="flex flex-col box-1 gap-y-3">
          <div className="flex flex-col items-center justify-center w-40 text-base font-bold text-center bg-white shadow-md h-36 rounded-xl">
            <img src={image_1} className="w-20 h-20 "></img>
            Shopping Fun
          </div>
          <div className="flex flex-col items-center justify-center w-40 text-sm font-bold text-center bg-white shadow-md h-36 rounded-xl">
            <img src={image_2} className="w-20 h-20 "></img>
            Festival Celebration
          </div>
          <div className="flex flex-col items-center justify-center w-40 text-sm font-bold text-center bg-white shadow-md h-36 rounded-xl">
            <img src={image_3} className="w-20 h-20 "></img>
            Complementary Food
          </div>
        </div>
        <div className="flex flex-col items-center justify-center box-2 lg:gap-y-1 md:gap-y-1 ">
          <img src={image_7} className="rounded-lg lg:h-[14rem] lg:w-96 md:h-[14rem] phone:mb-10 lg:mb-0 md:mb-0  md:w-96 phone:h-40 phone:w-48"></img>
          <img src={image_7} className="rounded-lg lg:h-[14rem] lg:w-96  md:h-[14rem] phone:mb-12 lg:mb-0 md:mb-0 md:w-96 phone:h-40 phone:w-48"></img>
        </div>
        {/* <div className="py-5 text-center text-white rounded-lg md:px-3 phone:px-1 lg:px-3 bg-blue-950 lg:w-97 md:w-97 phone:w-40 box-3">
          <div className="text-3xl font-semibold">Pushkar Fair Visit</div>
          <div className="mt-8 md:text-justify phone:text-start lg:text-justify">
            The Pushkar Fair brings together tradition, culture, and excitement
            in one location. Picture yourself walking through an enormous
            fairground packed with thousands of camels adorned in the brightest
            colors and decorative gear you've ever laid eyes on. Camels aren't
            the only main attraction here, the fair teems with folk music, dance
            shows, carnival rides, and colorful booths selling everything from
            jewelry to handicrafts. This shows that Rajasthan is at its best
            rich, lively, and brimming with energy. Hence, from camel races to
            cultural parades, you'll get to watch a spirit and thrill that's
            challenging to describe.
          </div>
        </div> */}
         <div className="py-5 text-center text-white rounded-lg md:px-3 phone:px-2 lg:px-3 bg-blue-950 lg:w-97 md:w-97 phone:w-40 box-3">
          <div className="font-semibold md:text-3xl phone:text-lg lg:text-3xl">Pushkar Fair Visit</div>
          <div className="text-justify md:mt-8 phone:mt-4 lg:mt-8 phone:text-xs lg:text-base md:text-base ">
            The Pushkar Fair brings together tradition, culture, and excitement
            in one location. Picture yourself walking through an enormous
            fairground packed with thousands of camels adorned in the brightest
            colors and decorative gear you've ever laid eyes on. Camels aren't
            the only main attraction here, the fair teems with folk music, dance
            shows, carnival rides, and colorful booths selling everything from
            jewelry to handicrafts. This shows that Rajasthan is at its best
            rich, lively, and brimming with energy. Hence, from camel races to
            cultural parades, you'll get to watch a spirit and thrill that's
            challenging to describe.
          </div>
        </div>
        <div className="flex flex-col box-4 gap-y-3">
          <div className="flex flex-col items-center justify-center w-40 text-base font-bold text-center bg-white shadow-md h-36 rounded-xl">
            <img src={image_4} className="w-20 h-20 "></img>
            Pushkar Fair Visit
          </div>
          <div className="flex flex-col items-center justify-center w-40 text-sm font-bold text-center bg-white shadow-md h-36 rounded-xl">
            <img src={image_5} className="w-20 h-20 "></img>
            Indian Wedding Experience
          </div>
          <div className="flex flex-col items-center justify-center w-40 text-sm font-bold text-center bg-white shadow-md h-36 rounded-xl">
            <img src={image_6} className="w-20 h-20 "></img>
            Village Tour
          </div>
        </div>
      </div>
    </div>
  );
}
