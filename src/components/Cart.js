import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector( (store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart());
    }
  return (
    <div className=" text-center m-5 p-5">
        <h1 className='text-lg font-bold'>Cart</h1>
        <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white' onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1>Cart is empty. Please add items to cart..!</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
  )
}

export default Cart