import { Category } from '../types/Category';
import { CategoryList } from '../types/CategoryType';

export const CategoriesData: Category[] = [
    {
        id: 1,
        name: CategoryList.plants,
        title: 'Plants',
        iconClass: 'las la-leaf',
        imageUrl:
            'https://images.urbndata.com/is/image/Anthropologie/45544935AA_000_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080',
    },
    {
        id: 2,
        name: CategoryList.decoration,
        title: 'Decoration',
        iconClass: 'las la-shapes',
        imageUrl:
            'https://www.motelamiio.com/out/pictures/generated/product/2/1600_2000_80/motel-a-miio-bola-mix-3216_bearb2.jpg',
    },

    {
        id: 3,
        name: CategoryList.furniture,
        title: 'Furniture',
        iconClass: 'las la-couch',
        imageUrl:
            'https://images.ctfassets.net/ylqmmgjpbpfw/NFR1lEDQZePMfhEvqwrO3/aaac3884c55feb8fdb7f842001ddde4b/Briar-Sectional-Royale-Blush-T2-020-1024x1024.jpg?w=1100&fit=fill&fl=progressive',
    },

    {
        id: 4,
        name: CategoryList.kitchen,
        title: 'Table & Kitchen',
        iconClass: 'las la-utensils',
        imageUrl: 'https://i.pinimg.com/564x/f3/83/5e/f3835e7c4abff06d797ca07ddebaec8d.jpg',
        //"https://format.creatorcdn.com/afd54906-3cb8-4346-bc2b-7d52c1248844/0/0/0/0,0,2000,2500,1600,2500/0-0-0/9acba929-0282-4eaa-a2e9-3887d5530706/1/1/Target-Plastic-Tabletop-Dishes-Table-Setting-Becca-M-Menichetti-Studio-Product-Photography-Prop-Styling-Commercial-Advertising-Accessories-Fitted-Hat-Los-Angeles-002.jpg?fjkss=exp=2004544659~hmac=518ee45875d73dab6f2d4910fb08f47cbb3fa8648613a5245024f87e6971a6bc",
    },
    {
        id: 5,
        name: CategoryList.jewelry,
        title: 'Jewelry',
        iconClass: 'las la-gem',
        imageUrl: 'https://i.pinimg.com/564x/d7/20/c0/d720c04ad098c3dea92db2833f429d11.jpg',
    },
    {
        id: 6,
        name: CategoryList.lamp,
        title: 'Lamp',
        iconClass: 'lar la-lightbulb',
        imageUrl: 'https://www.clearhalo.com/cdn/shop/products/1911954.jpg?v=1628196646',
    },
    {
        id: 7,
        name: CategoryList.poster,
        title: 'Poster',
        iconClass: 'las la-image',
        imageUrl: 'https://i.etsystatic.com/22333159/r/il/c057a7/3376545796/il_1588xN.3376545796_2ket.jpg',
    },
    {
        id: 8,
        name: CategoryList.stationery,
        title: 'Stationery',
        iconClass: 'las la-book',
        imageUrl: 'https://i.pinimg.com/originals/95/d7/26/95d7261547e049ad211b57f10a1574bf.jpg',
    },
];
