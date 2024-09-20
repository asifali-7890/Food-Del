import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const getTotalCartAmount = () => {
        let totalPrice = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                const itemInfo = food_list.find((product) => product._id === item)
                totalPrice += itemInfo.price * cartItems[item];
            }
        }
        return totalPrice;
    }

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems(prev => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeCartItem = (itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }


    const context_value = {
        food_list,
        addToCart,
        removeCartItem,
        cartItems,
        setCartItems,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={context_value}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
