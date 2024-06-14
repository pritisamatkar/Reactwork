import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestraurantMenu from '../utils/useRestraurantMenu';

export const RestraurantMenu = () => {

const {resId} = useParams();
//custom hook
const resInfo  = useRestraurantMenu(resId);

 
if(resInfo=== null) return <Shimmer/>;
const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

const { itemCards } = 
resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
console.log("itemCards",itemCards);

  return (
    <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
       
        <ul>
            { itemCards?.map( item => <li key={item.card.info.id}>{item.card.info.name}  -  Rs.{item.card.info.price/100  || item.card.info.defaultPrice/100} /-</li>)}
           
        </ul>
    </div>
   
  )
}

export default RestraurantMenu;