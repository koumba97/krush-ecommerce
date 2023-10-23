import { createContext, useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase';
import { ShopObject } from '../data/ShopData';
import { CategoriesData } from '../data/CategoriesData';
import { CategoryType } from '../types/CategoryType';
import { Category } from '../types/Category';

export const CategoriesContext = createContext({
    categoriesMap: {} as ShopObject,
    categoriesList: [] as Category[],
    getProductsByCategory: async (_categoryName: CategoryType): Promise<Product[] | []> => {
        return [];
    },
    getProductById: async (_categoryName: CategoryType, _productId: any): Promise<Product | null> => {
        return null;
    },
});

interface IProp {
    children: any;
}

export const CategoriesProvider = ({ children }: IProp) => {
    const [categoriesMap, setCategoriesMap] = useState<ShopObject>({} as ShopObject);
    const [categoriesList, _setCategoriesList] = useState(CategoriesData);
    //const [productByCategory, setProductByCategory] = useState<Product[]>([]);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', ShopData);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const getProductById = async (categoryName: CategoryType, productId: any): Promise<Product | null> => {
        const categoryMap = await getCategoriesAndDocuments();
        if (categoryMap) {
            console.log(categoryMap[categoryName]);

            const productIdResult: Product = categoryMap[categoryName].find(
                (product: Product) => product.id == productId
            );
            return productIdResult ? productIdResult : null;
        }
        return null;
    };

    const getProductsByCategory = async (categoryName: CategoryType): Promise<Product[] | []> => {
        const categoryMap = await getCategoriesAndDocuments();

        if (categoryMap) {
            const productsByCategory: Product[] = categoryMap[categoryName];
            return productsByCategory ? productsByCategory : [];
        }
        return [];
    };

    const value = { categoriesMap, getProductById, getProductsByCategory, categoriesList };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
