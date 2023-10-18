import { Price } from './Price';

export interface CartItem {
    id: number;
    image: string;
    name: string;
    price: Price;
    amount: number;
}
