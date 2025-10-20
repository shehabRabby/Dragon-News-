import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
            <h2 className="font-semibold text-2xl text-center">Register your Account</h2>
            <div className="card-body">
              <fieldset className="fieldset">
                {/* name  */}
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Enter Name" />
                {/* photo url  */}
                <label className="label">Photo Url</label>
                <input type="text" name='url' className="input" placeholder="Enter Photo Url" />
                {/* email  */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Enter Email" />
                {/* password  */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Enter Password" />

                <button className="btn btn-neutral mt-4">Register</button>
                <p className="text-center font-semibold mt-3">Already Have An Account? <Link to='/auth/login' className="text-secondary underline">Login</Link></p>
              </fieldset>
            </div>
          </div>
       </div>
    );
};

export default Register;