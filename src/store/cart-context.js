import {  createContext } from "react";
import { useEffect, useState, useContext } from 'react';
export const cartContext= createContext();
export const useCart= () => useContext(cartContext);


function CartProvider({children}){
    const [cart, setCart] = useState(()=>{
        const cartLocal= localStorage.getItem("item")
        const convertedCart=JSON.parse(cartLocal)
        return convertedCart ??[];
    });
    useEffect(() => {
        const convertCard= JSON.stringify(cart);
        localStorage.setItem('items',convertCard);
    }, [cart ]);
    const addToCart = (product) => {
          

        
            var existingProduct = cart.find((item) => item._id === product._id);
            if (existingProduct) {
            var updatedCart = cart.map((item) =>
                item._id === product._id
                ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
                : item
            );
            console.log(updatedCart);

            setCart(updatedCart);  // Update the cart with the new state
            } else {
            setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
            }
        
        }; 
    const removeFromCart = (product) => {
            var updateddCart = cart.map((item) =>
            item._id === product._id
                ? { ...item, quantity: item.quantity ? item.quantity - 1 : 0 }
                : item
            );
            updateddCart=updateddCart.filter((item) => item.quantity !== 0);
            setCart(updateddCart);

        };

    return(
        <cartContext.Provider value={{cart ,addToCart,removeFromCart}}>
            {children}

        </cartContext.Provider>
    )
   
}
export default CartProvider;
