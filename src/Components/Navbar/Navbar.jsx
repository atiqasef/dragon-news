import React from 'react'
import logo from '../../assets/logo.png'
import { format, compareAsc } from "date-fns";
export default function Navbar() {
  return (
    <div className='w-11/12 mx-auto'>
         <div className='flex flex-col justify-center items-center gap-5'>
                        <img src={logo} alt="" />
                        <p className='text-accent'>Journalism Without Fear or Favour</p>
                        <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
                    </div>
    </div>
  )
}
