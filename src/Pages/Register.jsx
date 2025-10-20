import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';




const Register = () => {
    
    const {createUser,setUser} = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoUrl,email,password)

        createUser(email,password)
        .then(result => {
            const user = result.user;
            // console.log(user)
            setUser(user);
        })
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className="flex justify-center min-h-screen items-center">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
            <h2 className="font-semibold text-2xl text-center">Register your Account</h2>
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                {/* name  */}
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Enter Name" required />
                {/* photo url  */}
                <label className="label">Photo Url</label>
                <input type="text" name='photo' className="input" placeholder="Enter Photo Url" required />
                {/* email  */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Enter Email" required />
                {/* password  */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Enter Password" required />

                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                <p className="text-center font-semibold mt-3">Already Have An Account? <Link to='/auth/login' className="text-secondary underline">Login</Link></p>
              </fieldset>
            </form>
          </div>
       </div>
    );
};

export default Register;