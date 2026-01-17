import React from 'react'
import { NavLink } from 'react-router'
import userImg from '../../assets/user.png'
export default function Menu() {
  return (
    <div className='flex justify-between items-center w-11/12 mt-10'>
        <div></div>
        <div className="nav flex gap-5 items-center text-accent">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="logo flex gap-5">
            <img src={userImg} alt="" />
            <div className="btn btn-accent text-white px-10">Login</div>
        </div>
    </div>
  )
}
