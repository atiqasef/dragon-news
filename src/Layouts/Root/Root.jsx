import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Components/Navbar/Navbar';
import LatestNews from '../../Components/LatestNews/LatestNews';
import Menu from '../../Components/Menu/Menu';
import LeftAside from '../../Components/LeftAside/LeftAside';
import RightAside from '../../Components/RightAside/RightAside';
export default function Root() {
   
    return (
        <div>
            <header>
                
                <Navbar></Navbar>
                <LatestNews></LatestNews>
                <Menu></Menu>
              
              
            </header>
            <main className='w-10/12 mt-15 mx-auto grid grid-cols-12 gap-4'>
                <aside className='left-aside col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>


                <aside className='right-aside col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
            <footer></footer>
        </div>
    )
}
