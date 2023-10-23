import { CategoryList } from './CategoryType';
import { Price } from './Price';

export interface Product {
    id: number;
    category: CategoryList;
    name: string;
    images: string[];
    price: Price;
    description: string;
    bestseller?: boolean;
}
