import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold my-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 justify-start text-sky-500"><FaFacebook></FaFacebook>Facebook</button>
          <button className="btn join-item bg-base-100 justify-start text-blue-600"><FaTwitter></FaTwitter> Twiter</button>
          <button className="btn join-item bg-base-100 justify-start text-red-500"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
