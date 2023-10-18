import { createContext, useState } from 'react';

export const CartContext = createContext({
    cartItems: [] as any[],
});

interface IProp {
    children: any;
}

export const CartProvider = ({ children }: IProp) => {
    const [cartItems, _setCartItems] = useState(['plant-1', 'plant-2']);
    const value = { cartItems };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
