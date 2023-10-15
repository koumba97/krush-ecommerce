import { createContext, useState } from 'react';
import { ProductsData } from '../data/ProductsData';
import { Product } from '../types/Product';

export const ProductsContext = createContext({
    products: [] as Product[],
});

interface IProp {
    children: any;
}

export const ProductsProvider = ({ children }: IProp) => {
    const [products, _setProducts] = useState(ProductsData);
    const value = { products };
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
