import React from 'react'
import { PiMailbox } from "react-icons/pi";
export default function Card() {
  return (
    <div className='lg:absolute md:absolute md:mt-40 lg:mt-0'>
      <div className="max-w-xs px-5 py-5 mx-auto text-white rounded-xl bg-sky-500">
      <div className="flex justify-start mb-4 ">
        <PiMailbox className="font-normal text-7xl" />
      </div>
      <h2 className="mb-2 text-2xl font-bold text-start">
        Sign Up For Travel News And Insights
      </h2>
      <p className="mb-4 text-sm font-medium text-justify text-black">
        Sign up for our newsletter to receive the latest travel news, tips, and exclusive offers. Stay updated on exciting destinations and plan your next adventure with United Tours India!
      </p>
      <form className="flex flex-col">
        <div className='mb-2'>Email Address</div>
        <input
          type="email"
          placeholder=""
          className="p-2 mb-4 text-gray-700 rounded-md"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-7/12 p-2 font-medium text-black transition duration-300 bg-white rounded-md hover:bg-sky-600 hover:text-white"
        >
          Subscribe
          <span className="ml-2">→</span>
        </button>
      </form>
    </div>
    </div>
  )
}
