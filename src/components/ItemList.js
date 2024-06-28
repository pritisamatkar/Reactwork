import React from 'react'
import {CDN_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) => {

  const dispatch = useDispatch();

   const handleAddItem = (item) =>{
    //dispatch action 
      dispatch(addItem(item));
   }
  return (
    <div>
        { items.map( item => 
        <div data-testid="foodItems" key ={item.card.info.id}>
            <div className='p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between'>
              
             <div className='w-9/12'>
                <div className='py-2'>  
                        <span className='pr-4 font-bold text-lg'>{item.card.info.name}</span> 
                    
                        <p className='font-bold text-sm'> ₹- {item.card.info.price / 100 || item.card.info.defaultPrice/100}</p>
                        <p className='text-sm'>{ <span>{item.card.info.description}</span>}</p>
                </div>
             </div>
             <div className='w-3/12 relative'>
                <div className=' absolute top-0 left-14 right-14'>
                    <button onClick={() =>handleAddItem(item)} className='px-2 my-2 bg-green-200 shadow-lg rounded-md'> Add + </button>
                </div>
              <img className=" w-48 p-4 object-contain rounded-lg"  src={ CDN_URL + item.card.info.imageId}/> 
             </div>
            </div>
        
        </div>
    )} 
    </div>
  )
}

export default ItemList;