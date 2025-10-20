import React from 'react';
import { NavLink } from 'react-router';
import userImg from "../assets/user.png";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=" "></div>
            <div className="nav flex gap-10 text-gray-500 font-normal">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-2">
                <img src={userImg} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>

        </div>
    );
};

export default Navbar;