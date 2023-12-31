import { Product } from '../types/Product';
import { CategoryList } from '../types/CategoryType';
import { PlantsData } from './PlantsData';
import { DecorationData } from './DecorationData';
import { FurnitureData } from './FunitureData';
import { KitchenData } from './KitchenData';
import { LightingData } from './LightingData';
import { PosterData } from './PosterData';
import { StationeryData } from './StationeryData';

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
    {
        title: CategoryList.furniture,
        iconClass: 'las la-couch',
        items: FurnitureData,
    },
    {
        title: CategoryList.kitchen,
        iconClass: 'las la-utensils',
        items: KitchenData,
    },
    {
        title: CategoryList.lighting,
        iconClass: 'lar la-lightbulb',
        items: LightingData,
    },
    {
        title: CategoryList.poster,
        iconClass: 'las la-image',
        items: PosterData,
    },
    {
        title: CategoryList.stationery,
        iconClass: 'las la-book',
        items: StationeryData,
    },
];
