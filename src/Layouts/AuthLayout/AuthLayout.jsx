import React from 'react'
import Menu from '../../Components/Menu/Menu'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className='bg-base-200 h-screen'>
        <header><Menu></Menu></header>
       <main>
        <Outlet></Outlet>
       </main>

    </div>
  )
}
