import { createContext, useEffect, useState } from 'react';
import { ProductsData } from '../data/ProductsData';
import { Product } from '../types/Product';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase';
import { ShopData } from '../data/ShopData';

export const ProductsContext = createContext({
    products: [] as Product[],
});

interface IProp {
    children: any;
}

export const ProductsProvider = ({ children }: IProp) => {
    const [products, _setProducts] = useState(ProductsData);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', ShopData);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = { products };
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
