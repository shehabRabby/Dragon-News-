import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from "../assets/user.png";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user} = use(AuthContext);

    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-10 text-gray-500 font-normal">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-2">
                <img src={userImg} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
            </div>

        </div>
    );
};

export default Navbar;