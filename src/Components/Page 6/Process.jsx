import React from 'react'
import image_1 from "../../assets/Images/ProcesPic1.jpg";
import image_2 from "../../assets/Images/ProcesPic2.jpg";
export default function Process() {
  return (
    <div className="py-10 bg-slate-200">
      <div className="text-center ">
        <div className="font-bold text-sky-500">How To Proces</div>
        <div className="text-2xl font-bold">
          Experience The Tourist Paradise
        </div>
        <img src={image_1} className='flex justify-center mx-auto mt-10'></img>
        <div className='flex mx-auto mt-3 font-bold lg:text-lg md:text-base phone:text-xs lg:px-28 md:px-10 phone:px-5 justify-evenly'>
            <div>Select Budget</div>
            <div>Select Destination</div>
            <div>Select Hotel</div>
            <div>Select SightSeeing</div>
        </div>
      </div>

    </div>
  ) 
}
