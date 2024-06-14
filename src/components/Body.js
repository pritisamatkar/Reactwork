import React from "react";
import RestraurantCard from "./RestraurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//custom hook


const Body =()=>{
    const [listOfRestraurants, setListOfRestraurants]= useState([]);
   // console.log(resList);
    const [searchText,setSearchText] = useState("");
   const [filteredRestraurant,setFilteredRestraurant] = useState([]);
    useEffect( ()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestraurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return listOfRestraurants.length === 0 ? <Shimmer/> :  (
        <div className="body">
             <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={ () =>{
                        console.log(searchText);
                      const filteredRestraurant =  listOfRestraurants.filter( (res) => 
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                      );
                      setFilteredRestraurant(filteredRestraurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                const filterList = listOfRestraurants.filter( (res)=> res.info.avgRating > 4.5)
                setFilteredRestraurant(filterList);
             } }>Top Rated Restraurants</button></div>
            <div className="res-container">
                {
                    filteredRestraurant.map( restraurant => 
                   <Link key={restraurant.info.id} to={"/restrarants/" + restraurant.info.id }><RestraurantCard resData={restraurant}/></Link> 
                    )
                }
               
            </div>
        </div>
       
    )
}

export default Body;