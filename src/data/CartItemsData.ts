import { CartItem } from '../types/CartItem';

export const CartItemsData: CartItem[] = [
    {
        id: 1,
        name: 'Zamioculcas',
        image: 'https://bergamotte.imgix.net/fu085rvfvyiukcdflo9kk3nr8nyf?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
        price: {
            value: 74.9,
            currency: '€',
        },
        amount: 2,
    },
    {
        id: 4,
        name: 'Calamondin',
        image: 'https://bergamotte.imgix.net/pinwsfpdmu9ri96j9f8wdlukdqs8?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
        price: {
            value: 44.9,
            currency: '€',
        },
        amount: 1,
    },
];
