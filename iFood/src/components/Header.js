import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const {loggedInUser} =useContext(UserContext) 

  const onlinestatus = useOnlineStatus();
  const[btnNameReact ,SetbtnNameReact]=useState("Login")
  return (
    <div className="flex justify-between bg-blue-50 shadow-lg sticky top-0 z-10">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status {onlinestatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            {loggedInUser}
          </li>
          <li>Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? SetbtnNameReact("Logout")
                : SetbtnNameReact("Login");
            }}
          >
            {btnNameReact}
            {console.log(btnNameReact)}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
