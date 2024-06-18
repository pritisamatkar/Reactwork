import { useEffect } from "react";
import {MENU_API} from '../utils/constants';
import { useState } from "react";

const useRestraurantMenu = (resId) =>{
    const[resInfo,setResInfo] = useState(null);

    useEffect( ()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        setResInfo(json.data);
        //console.log("menu",json.data);
    };
    return resInfo;
}

export default useRestraurantMenu;