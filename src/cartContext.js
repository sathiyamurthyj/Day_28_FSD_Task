import {createContext, useEffect, useState} from "react";
import data from "./data";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    // update cart items based on data from data.js file and adds default qty of 1
    function updateProducts () {
        const cartData = data.map((ele)=>({...ele, quantity: 1}));
        setCartItems(cartData);  
    }
    // initial loading of cartItems
    useEffect(()=>{
        updateProducts();
    },[]);
    // handles item removal from cart
    const removeFromCart = (item)=>{
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if(isItemInCart) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        }        
    }
    // calculates total price of cart
    const getCartTotal = () => {
        const cartTotal = cartItems.reduce((total, item) => total+(item.price*item.quantity),0);
        console.log(cartTotal);
        return cartTotal
    }
    // updates item quantity based on selection
    const updateItemQuantity = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if(isItemInCart) {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id?{...cartItem, quantity: item.quantity}: cartItem));
        } 
    }

    return (
        <CartContext.Provider value={{cartItems,removeFromCart,updateItemQuantity,getCartTotal}}>{children}</CartContext.Provider>
    )

}