import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default function Places() {
  return (
    <div className="py-10 bg-sky-50">
      <div className="flex items-center justify-between lg:mx-32 md:mx-12 phone:mx-3 header">
        <div className="w-1/2">
          <div className="text-base font-bold text-sky-500 phone:text-xs lg:text-base md:text-base">Our Places</div>
          <div className="font-bold md:text-3xl lg:text-4xl phone:text-lg">Our Popular Packages</div>
        </div>
        <div className="lg:w-1/3 md:w-1/3 phone:w-1/2">
        <div className="flex justify-between w-full font-bold md:text-base lg:text-base phone:text-xs">
          <div>Trending</div>
          <div>Duration</div>
          <div>Types</div>
        </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full pt-16 mx-auto md:gap-y-5 phone:gap-y-5 lg:px-28 md:px-0 justify-evenly">
        <div className="bg-white rounded-xl w-[19.5rem] shadow-md box">
          <div className="w-[19.5rem] border rounded-t-xl  border-gray-900 h-60">
            <div className="flex flex-col gap-y-40 img-text">
              <div className="text-center">
                Luxurious Jodhpur Jaisalmer Tour
              </div>
              <div>
                <hr className="ml-2 w-72" />
                <div className="flex justify-between px-2">
                  <div>
                    <div>5 DAY 4 NIGHT</div>
                    <div>PER PERSON</div>
                  </div>
                  <div>&#36; 259.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center py-2">
            <div className="text-sm font-semibold text-center">
              Delhi -&gt; Agra -&gt; Jaipur -&gt; Jodhpur -&gt; Jaisalmer -&gt;
              Delhi -&gt;
            </div>
            <button className="flex items-center justify-center w-40 px-4 py-2 mx-auto my-2 text-white rounded bg-sky-950 ">
              <span>View More</span>
              <MdArrowRightAlt className="ml-2 transform scale-x-150" />
            </button>
          </div>
        </div>



        <div className="bg-white rounded-xl w-[19.5rem] shadow-md box">
          <div className="w-[19.5rem] border rounded-t-xl  border-gray-900 h-60">
            <div className="flex flex-col gap-y-40 img-text">
              <div className="text-center">
                Luxurious Jodhpur Jaisalmer Tour
              </div>
              <div>
                <hr className="ml-2 w-72" />
                <div className="flex justify-between px-2">
                  <div>
                    <div>5 DAY 4 NIGHT</div>
                    <div>PER PERSON</div>
                  </div>
                  <div>&#36; 259.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center py-2">
            <div className="text-sm font-semibold text-center">
              Jodhpur -&gt; Bikner -&gt; Jaisalmer -&gt;
              Jaipur -&gt;
            </div>
            <button className="flex items-center justify-center w-40 px-4 py-2 mx-auto my-2 text-white rounded mt-7 bg-sky-950 ">
              <span>View More</span>
              <MdArrowRightAlt className="ml-2 transform scale-x-150" />
            </button>
          </div>
        </div>


        <div className="bg-white rounded-xl w-[19.5rem] shadow-md box">
          <div className="w-[19.5rem] border rounded-t-xl  border-gray-900 h-60">
            <div className="flex flex-col gap-y-40 img-text">
              <div className="text-center">
                Luxurious Jodhpur Jaisalmer Tour
              </div>
              <div>
                <hr className="ml-2 w-72" />
                <div className="flex justify-between px-2">
                  <div>
                    <div>5 DAY 4 NIGHT</div>
                    <div>PER PERSON</div>
                  </div>
                  <div>&#36; 259.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center py-2">
            <div className="text-sm font-semibold text-center">
              Delhi -&gt; Agra -&gt; Delhi -&gt; 
            </div>
            <button className="flex items-center justify-center w-40 px-4 py-2 mx-auto my-2 text-white rounded mt-7 bg-sky-950 ">
              <span>View More</span>
              <MdArrowRightAlt className="ml-2 transform scale-x-150" />
            </button>
          </div>
        </div>


        <div className="bg-white rounded-xl w-[19.5rem] shadow-md box">
          <div className="w-[19.5rem] border rounded-t-xl  border-gray-900 h-60">
            <div className="flex flex-col gap-y-40 img-text">
              <div className="text-center">
                Luxurious Jodhpur Jaisalmer Tour
              </div>
              <div>
                <hr className="ml-2 w-72" />
                <div className="flex justify-between px-2">
                  <div>
                    <div>5 DAY 4 NIGHT</div>
                    <div>PER PERSON</div>
                  </div>
                  <div>&#36; 259.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center py-2">
            <div className="text-sm font-semibold text-center">
              Delhi -&gt; Agra -&gt; Jaipur -&gt; Udaipur -&gt;
              Delhi -&gt;
            </div>
            <button className="flex items-center justify-center w-40 px-4 py-2 mx-auto my-2 mt-5 text-white rounded bg-sky-950 ">
              <span>View More</span>
              <MdArrowRightAlt className="ml-2 transform scale-x-150" />
            </button>
          </div>
        </div>

        
      </div>

      
      <button className="flex items-center justify-center w-40 px-4 py-2 mx-auto my-2 mt-16 text-white rounded bg-sky-950 ">
              <span>View More</span>
              <MdArrowRightAlt className="ml-2 transform scale-x-150" />
            </button>
      
    </div>
  );
}
