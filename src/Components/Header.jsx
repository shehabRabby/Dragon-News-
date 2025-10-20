import React from "react";
import logoImg from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-5 space-y-2">
      <img src={logoImg} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      {/* date-fns  */}
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE, MMMM dd , yyyy")}
      </p>
    </div>
  );
};

export default Header;
