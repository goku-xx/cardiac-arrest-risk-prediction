import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Cardiac Risk Predictor</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/history" className="hover:underline">History</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
