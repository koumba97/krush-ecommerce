import { Product } from '../types/Product';
import { CategoryList } from '../types/CategoryType';

export const PlantsData: Product[] = [
    {
        id: 1,
        name: 'Zamioculcas',
        category: CategoryList.plants,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-1-1.jpg?alt=media&token=d22fc2af-0ed3-4c95-9839-8c780e67e5a8&_gl=1*1snx1qe*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc3MjQuNTcuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-1-2.jpg?alt=media&token=c37ab3f4-3bc4-4b4d-a876-d915c1c83442&_gl=1*10g7mno*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc3NDIuMzkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-1-3.jpg?alt=media&token=6f99c5e5-d983-4e70-9351-0696f9cd1e61&_gl=1*1089nz8*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc3NDkuMzIuMC4w',
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
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-2-1.jpg?alt=media&token=fe668010-84be-4e89-ab48-6a6999e1349f&_gl=1*1m8pt1t*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc3NjYuMTUuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-2-2.jpg?alt=media&token=c3375eed-85dc-4e97-9408-8ed99deb3bfe&_gl=1*p4izsu*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc3NzcuNC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-2-3.jpg?alt=media&token=24235e8e-0930-4e6c-9142-3c18e2d89be5&_gl=1*13jnfk3*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc3OTAuNjAuMC4w',
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
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-3-1.jpg?alt=media&token=5b92c690-4d51-46c8-96e5-3c8dfb0c41c5&_gl=1*zlj69x*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc4MTAuNDAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-3-2.jpg?alt=media&token=8bf72337-80ad-4471-b7f0-17ee4d1341e0&_gl=1*j0aufr*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc4MjEuMjkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-3-3.jpg?alt=media&token=a93a28fd-8de7-4b5d-b6cd-e313c8ea370b&_gl=1*jbx3ee*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc4MzAuMjAuMC4w',
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
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-4-1.jpg?alt=media&token=26f8279a-6ad2-4bf1-99a9-a3ceaf356fc5&_gl=1*e1vfoq*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc4NDguMi4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-4-2.jpg?alt=media&token=54e6ccb0-2e4d-4b55-904f-aab9583b01f1&_gl=1*1y1kl8z*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc4NjEuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-4-3.jpg?alt=media&token=36256013-14a2-473f-96d4-f32ca93d853a&_gl=1*47cp52*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc4NzMuNDguMC4w',
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
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-5-1.jpg?alt=media&token=b6635b83-7f38-4fa9-970d-13bb4088c957&_gl=1*sjq2zr*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc4OTAuMzEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-5-2.jpg?alt=media&token=b074064f-7cc8-423e-9daf-b1ea013bdc69&_gl=1*1xgrski*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc5MDAuMjEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-5-3.jpg?alt=media&token=42f9e90a-445d-448e-abc6-fb3002a4ac14&_gl=1*1bznu7a*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc5MTAuMTEuMC4w',
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
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-6-1.jpg?alt=media&token=b38088b0-1b91-44fe-8761-104b9af67ded&_gl=1*v2qvfv*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc5MjcuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-6-2.jpg?alt=media&token=420d5f01-7356-44d5-ad24-2c47f7e0e7e7&_gl=1*1u7vp1n*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc5MzguNDkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-6-3.jpg?alt=media&token=04d3f6b8-4dd2-45a4-8f36-217e43531c69&_gl=1*15m1q4t*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc5NDguMzkuMC4w',
        ],
        description: '1 Pilea - Diamètre du pot : 12 cm - Hauteur de la plante : Environ 20 cm (pot inclus)',
        price: {
            value: 32.9,
            currency: '€',
        },
    },
    {
        id: 7,
        name: 'Azalée Aimée',
        category: CategoryList.plants,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-7-1.jpg?alt=media&token=c25d9ebf-1ce7-47d9-9848-d9d73dc3e02a&_gl=1*x1t166*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc5NjMuMjQuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-7-2.jpg?alt=media&token=81d5d431-9538-4cad-9f18-87f7753026c8&_gl=1*5e0me8*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc5NzguOS4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-7-3.jpg?alt=media&token=c34199e5-87af-4bb9-b7fc-acb0eb674e72&_gl=1*50oymx*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc5OTIuNjAuMC4w',
        ],
        description: 'Diamètre du pot : 24 cm - Hauteur : Entre 120 et 130 cm (pot inclus)',
        price: {
            value: 69.9,
            currency: '€',
        },
    },
    {
        id: 8,
        name: 'Strelitzia Rosalie',
        category: CategoryList.plants,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-8-1.jpg?alt=media&token=fbe76c29-e353-4f68-9811-d861a248c7e1&_gl=1*p2codh*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgwMTAuNDIuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-8-2.jpg?alt=media&token=163c7235-1cbc-41ef-95a7-f635e2650d0b&_gl=1*1fecs4*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgwMjMuMjkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-8-3.jpg?alt=media&token=25877f81-32ce-4014-9d33-7c5e83739444&_gl=1*12qvfk1*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgwMzUuMTcuMC4w',
        ],
        description: 'Diamètre du pot : 14 cm - Hauteur : Entre 35 et 40 cm (pot inclus).',
        price: {
            value: 199.9,
            currency: '€',
        },
        bestseller: true,
    },
    {
        id: 9,
        name: 'Ondine',
        category: CategoryList.plants,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-9-1.jpg?alt=media&token=1334e12b-5b46-4ed9-b42b-9d70136c9a67&_gl=1*8wvqlp*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgwNTMuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-9-2.jpg?alt=media&token=4c363098-1d45-48ab-9d60-e50a7e0391ca&_gl=1*191w86w*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgwNjMuNTAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-9-3.jpg?alt=media&token=a6006d89-4aeb-4aa1-b03b-86507067b7f5&_gl=1*19f8iro*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgwNzcuMzYuMC4w',
        ],
        description: 'Diamètre du pot : 24 cm - Hauteur : Entre 110 et 120 cm (pot inclus)',
        price: {
            value: 59.9,
            currency: '€',
        },
    },
    {
        id: 10,
        name: 'Pothos Patrick',
        category: CategoryList.plants,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-10-1.jpg?alt=media&token=dc977861-e428-4566-855d-e5d511267b8a&_gl=1*of3n4c*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgwOTUuMTguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-10-2.jpg?alt=media&token=bb097a3c-b7fa-4865-809f-e0859babc643&_gl=1*1nzl2fu*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgxMDMuMTAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-10-3.jpg?alt=media&token=ad91d017-ad47-4769-8b20-474f22913d28&_gl=1*cbd7qw*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgxMTAuMy4wLjA.',
        ],
        description:
            'Diamètre du pot : 14 cm - Hauteur : Entre 35 et 45 cm (pot inclus) - Selon la saison, la plante peut être livrée avec des fruits verts ou orange.',
        price: {
            value: 35.9,
            currency: '€',
        },
        bestseller: true,
    },
    {
        id: 11,
        name: 'Cactus',
        category: CategoryList.plants,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-11-1.jpg?alt=media&token=a91b38b6-f94c-4897-929e-e60c4f24d50e&_gl=1*xv1huv*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgxMjMuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-11-2.jpg?alt=media&token=a942de1c-e957-4834-9360-090a532aff44&_gl=1*i4yefq*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgxMzAuNTMuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-11-3.jpg?alt=media&token=fb7d48e5-3033-47af-a8a8-c52c0e4df9e1&_gl=1*d57bpe*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgxMzYuNDcuMC4w',
        ],
        description: 'Diamètre du pot : 24 cm - Hauteur : Entre 85 et 105 cm (pot inclus)',
        price: {
            value: 29.9,
            currency: '€',
        },
    },
    {
        id: 12,
        name: 'Ficus Cloé',
        category: CategoryList.plants,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-12-1.jpg?alt=media&token=d418344a-b256-472a-97f8-39d09673ab35&_gl=1*15xgmrz*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgxNTAuMzMuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-12-2.jpg?alt=media&token=f55b12de-5526-416f-acb5-7d4775beecef&_gl=1*pt68yo*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgxNTguMjUuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/plants%2Fplant-12-3.jpg?alt=media&token=4ccad7c3-40cd-4cd4-8901-44eb1443a3f2&_gl=1*18sexo4*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDgxNjcuMTYuMC4w',
        ],
        description: '1 Pilea - Diamètre du pot : 12 cm - Hauteur de la plante : Environ 20 cm (pot inclus)',
        price: {
            value: 29.9,
            currency: '€',
        },
    },
];
