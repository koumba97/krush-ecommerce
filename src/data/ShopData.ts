import { Product } from '../types/Product';
import { CategoryList } from '../types/CategoryType';
import { PlantsData } from './PlantsData';
import { DecorationData } from './DecorationData';

export interface ShopObject {
    title: CategoryList;
    iconClass: string;
    items: Product[];
}
export const ShopData: ShopObject[] = [
    {
        title: CategoryList.plants,
        iconClass: 'las la-leaf',
        items: PlantsData,
    },
    {
        title: CategoryList.decoration,
        iconClass: 'las la-shapes',
        items: DecorationData,
    },
];
