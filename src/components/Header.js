import React, { useState } from "react";
//named export
import {LOGO_URL} from "../utils/constants";
import {Link}  from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =()=>{
    const [btnNameReact,SetBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li> 
                        online Status: { onlineStatus ? "✅ ": "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
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