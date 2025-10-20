import React, { use, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error,setError] = useState("");

  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogin = (event) => {
    event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      // console.log(email,password)
    
     signIn(email, password)
       .then((result) => {
        //  console.log("Logged in user:", result.user);
         navigate(`${location.state ? location.state : "/"}`)
       })
       .catch((error) => {
        //  alert("Login error:", error.message);
        setError(error.code)
       });
    
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
        <h2 className="font-semibold text-2xl text-center">
          Login your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              required
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            {/* password  */}
            <label className="label">Password</label>
            <input
              required
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {
              error && <p className="text-red-600">{error}</p>
            }

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="text-center font-semibold mt-3">
              Don't Have An Account?{" "}
              <Link to="/auth/register" className="text-secondary underline">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
