import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';




const Register = () => {
    
    const {createUser,setUser,updateUser} = use(AuthContext)
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {


        e.preventDefault();
        // console.log(e.target)
        const form = e.target;


        const name = form.name.value;
        if(name.length < 5){
          setNameError("Name should be more than five character");
          return;
        }else{
          setNameError("");
        }


        const photoUrl = form.photo.value;


        const email = form.email.value;
         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailPattern.test(email)) {
           setEmailError("Enter a valid email in the format: example@domain.com");
           return;
         } else {
           setEmailError("");
         }


        const password = form.password.value;
        // console.log(name,photoUrl,email,password)
        if (password.length < 6) {
          setPasswordError("Password must be at least 6 characters long");
          return;
        } else {
          setPasswordError("");
        }

        


        createUser(email,password)
        .then(result => {
            const user = result.user;
            // console.log(user)
            updateUser({displayName:name, photoURL:photoUrl})
            .then(()=>{
              setUser({...user,displayName:name, photoURL:photoUrl});
              navigate("/")
            })
            .catch((error)=>{
              console.log(error);
              setUser(user)
            })
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
               
                {nameError && <p className='text-red-600'>{nameError}</p>}

                {/* photo url  */}
                <label className="label">Photo Url</label>
                <input type="text" name='photo' className="input" placeholder="Enter Photo Url" required />
                {/* email  */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Enter Email" required />
                 {emailError && <p className="text-red-600">{emailError}</p>}

                {/* password  */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Enter Password" required />
                {passwordError && <p className="text-red-600">{passwordError}</p>}

                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                <p className="text-center font-semibold mt-3">Already Have An Account? <Link to='/auth/login' className="text-secondary underline">Login</Link></p>
              </fieldset>
            </form>
          </div>
       </div>
    );
};

export default Register;