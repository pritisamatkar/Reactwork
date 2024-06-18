import React from "react";
import {CDN_URL} from "../utils/constants";

const restStyle = {
    backgroundColor: "#f0f0f0"
}

const RestraurantCard =(props) =>{
   const  {resData} = props;
   const {name, cuisines, avgRating, costForTwo,cloudinaryImageId} = resData?.info;
  
    return  (
    <div className="p-4 m-4 w-[250px] rounded-lg" style={{ backgroundColor: "#F0F0F0"}}>
    <img src={CDN_URL + cloudinaryImageId} className="res-logo rounded-lg" alt="res-logo" />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} </h4>
        <h4>{costForTwo} </h4>
    </div>
    )
}

export default RestraurantCard;