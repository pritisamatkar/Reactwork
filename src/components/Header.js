import React, { useState } from "react";
//named export
import {LOGO_URL} from "../utils/constants";
import {Link}  from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =()=>{
    const [btnNameReact,SetBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between border-grey-200  border-b-2 ">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"> 
                        online Status: { onlineStatus ? "✅ ": "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button type="button" className="loginBtn"  onClick={()=>{
                        btnNameReact === "Login"
                         ? SetBtnNameReact("Logout") 
                         : SetBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;