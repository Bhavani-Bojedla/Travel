import React from 'react'
import Navbar from '../Navbar/Navbar'
import Activity from '../Page1/Activity'
import About from '../Page 2/About'

export default function Home() {
  return (
    <div className='w-full h-40'>
        <div className='w-full h-[115vh] -mt-12  bg-cover bg-home '>
            <Navbar/>
        </div>
       <Activity/>
       <About/>
    </div>
  )
}
