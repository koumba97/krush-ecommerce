import { CategoryType } from './CategoryType';

export interface Category {
    id: number;
    name: CategoryType;
    title: string;
    imageUrl: string;
    iconClass: string;
}
