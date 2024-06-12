import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-12   flex items-center justify-between ">
      <ul className="flex text-white text-xl font-bold gap-12 w-full bg-black h-full justify-center items-center">
       
       <Link  to='/'><li>Home</li></Link>
       <Link to='/employee-list'> <li >Employee List</li></Link>
       <Link to='/add-employee' ><li >Add Employee</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
