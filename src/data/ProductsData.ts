import { Product } from '../types/Product';
import { CategoryList } from '../types/CategoryType';

export const ProductsData: Product[] = [
    {
        id: 1,
        name: 'Zamioculcas',
        category: CategoryList.plants,
        images: [
            'https://bergamotte.imgix.net/fu085rvfvyiukcdflo9kk3nr8nyf?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/brxui5n2zmlla6mdnw38ixr78o1p?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/yor7z0p2mne5rpxir9ipeoenx7o2?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
        ],
        description: 'Diamètre du pot : 24 cm - Hauteur : Entre 120 et 130 cm (pot inclus)',
        price: {
            value: 74.9,
            currency: '€',
        },
    },
    {
        id: 2,
        name: 'Anthurium',
        category: CategoryList.plants,
        images: [
            'https://bergamotte.imgix.net/1l66nto9bui42u06eb0a3rna76pk?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/khq92wvhstgjd94vnea1gujdkwac?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/r5wk762u8d97twmk6eiz049wu67y?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
        ],
        description: 'Diamètre du pot : 14 cm - Hauteur : Entre 35 et 40 cm (pot inclus).',
        price: {
            value: 35.9,
            currency: '€',
        },
        bestseller: true,
    },
    {
        id: 3,
        name: 'Pachira',
        category: CategoryList.plants,
        images: [
            'https://bergamotte.imgix.net/jl4g00cfnd59sbakuxczxqkr7ojz?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/t3v10kql4bf5t2ez5a1rhwznr47y?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/ozj1b6f5zgutaau0bz2ox5bl9xoa?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
        ],
        description: 'Diamètre du pot : 24 cm - Hauteur : Entre 110 et 120 cm (pot inclus)',
        price: {
            value: 89.9,
            currency: '€',
        },
    },
    {
        id: 4,
        name: 'Calamondin',
        category: CategoryList.plants,
        images: [
            'https://bergamotte.imgix.net/pinwsfpdmu9ri96j9f8wdlukdqs8?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/19vb5142fvzsnqfvnza8v91sqe9p?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/66s9opk0t9jtb5qrmyiizzvds27l?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
        ],
        description:
            'Diamètre du pot : 14 cm - Hauteur : Entre 35 et 45 cm (pot inclus) - Selon la saison, la plante peut être livrée avec des fruits verts ou orange.',
        price: {
            value: 44.9,
            currency: '€',
        },
        bestseller: true,
    },
    {
        id: 5,
        name: 'Cactus',
        category: CategoryList.plants,
        images: [
            'https://bergamotte.imgix.net/l6myhpvtgp2fd3qe73ygphs8nnaa?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/9e2vva7179k84kaotsfdnov1q3s5?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/8yw1krjvioi2oww17wmdi3g5vpok?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
        ],
        description: 'Diamètre du pot : 24 cm - Hauteur : Entre 85 et 105 cm (pot inclus)',
        price: {
            value: 69.9,
            currency: '€',
        },
    },
    {
        id: 6,
        name: 'Pilea',
        category: CategoryList.plants,
        images: [
            'https://bergamotte.imgix.net/8ujxvcijvyzprhjnkyhd7g2je37v?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/9od79q12eu87eo6n98l98zx7kwx3?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
            'https://bergamotte.imgix.net/dfj9yzf849jn7k9gy2pc2u2sn7o2?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=4%3A5&w=2048',
        ],
        description: '1 Pilea - Diamètre du pot : 12 cm - Hauteur de la plante : Environ 20 cm (pot inclus)',
        price: {
            value: 32.9,
            currency: '€',
        },
    },
];
