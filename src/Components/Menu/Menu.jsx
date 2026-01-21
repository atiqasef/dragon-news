import React, { use, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import userImg from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider'
export default function Menu() {
  const navigate = useNavigate();
  const {user, logOut} = use(AuthContext);
  const handleLogOut = () =>{
    logOut().then(result=>{
      navigate('/auth/login')
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className='flex  justify-between mx-auto items-center w-10/12 pt-10'>
        <div>{user && user.email}</div>
        <div className="nav flex gap-5 items-center text-accent">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="logo flex gap-5">
            <img src={userImg} alt="" />
            {
              user? <button onClick={handleLogOut} className="btn btn-accent text-white px-10">LogOut</button> : <Link to='/auth/login'><div className="btn btn-accent text-white px-10">Login</div></Link>
            }
        </div>
    </div>
  )
}
