import React from "react";
import RestraurantCard from "./RestraurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{
    const [listOfRestraurants, setListOfRestraurants]= useState([]);
    //console.log(resList);

    useEffect( ()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestraurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return listOfRestraurants.length === 0 ? <Shimmer/> :  (
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