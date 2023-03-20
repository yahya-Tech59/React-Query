import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="text-center">
      <Link to="/" className="text-blue-900 underline pl-1 pr-1">
        Home
      </Link>
      <Link to="/profile" className="text-blue-900 underline pr-1">
        Profile
      </Link>
      <Link to="/contact" className="text-blue-900 underline">
        Contact
      </Link>
    </div>
  );
};
