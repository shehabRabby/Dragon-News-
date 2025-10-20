import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../HomeLayout/LeftAside';
import RightAside from '../HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
               <section className='w-11/12 mx-auto my-5'>
                 <LatestNews></LatestNews>
               </section>

               <nav className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
               </nav>

            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main-nav col-span-6 mx-8'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                   <RightAside></RightAside>
                </aside>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;