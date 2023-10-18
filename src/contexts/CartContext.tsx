import { createContext, useEffect, useState } from 'react';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { Price } from '../types/Price';

const addCartItem = (cartItems: CartItem[], productToAdd: Product, amount: number): CartItem[] => {
    const itemIsInCart = cartItems.find((item) => item.id === productToAdd.id);

    if (itemIsInCart) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ? { ...cartItem, amount: cartItem.amount + amount } : cartItem
        );
    } else {
        const newCartItem: CartItem = {
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            image: productToAdd.images[0],
            amount: amount,
        };
        return [...cartItems, newCartItem];
    }
};

const calculateItemsAmount = (cartItems: CartItem[]): number => {
    let itemsAmount = 0;
    cartItems.map((item) => {
        itemsAmount += item.amount;
    });

    return itemsAmount;
};

const calculateSubTotal = (cartItems: CartItem[]): Price => {
    let subTotalValue = 0;
    cartItems.map((item) => {
        subTotalValue += item.price.value * item.amount;
    });

    return { value: Number(subTotalValue.toFixed(2)), currency: '€' };
};

export const CartContext = createContext({
    cartItems: [] as CartItem[],
    cartItemsAmount: 0,
    addItemToCart: (_productToAdd: Product, _amount: number) => {},
    subTotal: {} as Price,
});

interface IProp {
    children: any;
}

export const CartProvider = ({ children }: IProp) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartItemsAmount, setCartItemsAmount] = useState(calculateItemsAmount(cartItems));
    const [subTotal, setSubTotal] = useState({ value: 0, currency: '€' });

    const addItemToCart = (productToAdd: Product, amount: number) => {
        setCartItems(addCartItem(cartItems, productToAdd, amount));
    };

    useEffect(() => {
        setCartItemsAmount(calculateItemsAmount(cartItems));
        setSubTotal(calculateSubTotal(cartItems));
    }, [cartItems]);

    const value = { cartItems, cartItemsAmount, addItemToCart, subTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
