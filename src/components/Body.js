import React from "react";
import RestraurantCard from "./RestraurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body =()=>{
    const [listOfRestraurants, setListOfRestraurants]= useState(resList);
    console.log(resList);
    return (
        <div className="body">
             <div className="filter"><button className="filter-btn" onClick={()=>{
                const filterList = listOfRestraurants.filter( (res)=> res.info.avgRating > 4.5)
                setListOfRestraurants(filterList);
             } }>Top Rated Restraurants</button></div>
            <div className="res-container">
                {
                    listOfRestraurants.map( restraurant => <RestraurantCard key={restraurant.info.id} resData={restraurant}/>)
                }
               
            </div>
        </div>
       
    )
}

export default Body;