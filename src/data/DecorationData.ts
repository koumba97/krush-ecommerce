import { Product } from '../types/Product';
import { CategoryList } from '../types/CategoryType';

export const DecorationData: Product[] = [
    {
        id: 1,
        name: 'Ceramic vase',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-1-1.jpg?alt=media&token=1e820efd-eeb2-402c-b3c8-6ba5a96a3c2d&_gl=1*u8rjl*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcwNzYuMzAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-1-2.jpg?alt=media&token=86f73ed4-81cc-4b82-90bf-b3e5869ffa7e&_gl=1*sw21b*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcxMzQuNDUuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-1-3.jpg?alt=media&token=1da4abf4-2824-476b-9ba6-5fe760996e26&_gl=1*115jk23*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcxNDYuMzMuMC4w',
        ],
        description:
            "Complete the decoration of your home providing distinction and elegance with the Lorik ceramic vase. Its design is perfect for a hall, dining table or chest of drawers, giving it a unique touch with personality. You can place flowers to give a natural and colorful air to the room and decorate any corner. Thanks to its unique and avant-garde shape, it will become the center of attention. Don't let it escape, with Lorik you can become a sophisticated interior designer.",
        price: {
            value: 50.9,
            currency: '€',
        },
    },
    {
        id: 2,
        name: 'Candle Goblin',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-2-1.jpg?alt=media&token=aafd0629-a7c6-4bf9-accb-bf26c15cb14c&_gl=1*q7bwr7*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc1NDIuNTEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-2-2.jpg?alt=media&token=c5ad2c44-c48e-4493-bb1a-bfbcf0999c58&_gl=1*q29328*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc1MzMuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-2-3.jpg?alt=media&token=d2c31a1c-4a50-4a81-90e3-97f220f3a441&_gl=1*15ner6b*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc1MjEuMTAuMC4w',
        ],
        description:
            'With the Goblin Candle you will be able to give your room a casual and elegant touch. Different from the classic design of decorative candles, Goblin is perfect for decorating any corner of the house, be it in a corner of the living room, in the hall, or on the bedroom table. With its so original design, where its square shape is formed by a set of small balls in pastel tones, which are in pure trend. Its 20-hour duration and its manufacture in totally natural and unscented soy and bee wax make it unique. It is perfect to decorate your home or to give as a gift on a special date.',
        price: {
            value: 9.95,
            currency: '€',
        },
    },

    {
        id: 3,
        name: 'Wall Mirror',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-3-1.jpg?alt=media&token=cf5fa461-bbfc-4186-9dab-123c9fc6b9b9&_gl=1*m7jtg7*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc1MTIuMTkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-3-2.jpg?alt=media&token=6e6e05ca-fa1f-4508-b569-ec26ec1b2101&_gl=1*1u8f0z*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc1MDIuMjkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-3-3.jpg?alt=media&token=f3016c6b-e7be-4a4f-9f55-5c83eb9056d8&_gl=1*1a7dd1u*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc0OTAuNDEuMC4w',
        ],
        description:
            'The beauty of asymmetric elements in interior decoration can give a lot of play. An example of this is the Metal Flora Wall Mirror, whose irregular shape stands out from the other elements in the room, breaking with the established. Made with a gold metal frame, it is a mirror that will not go unnoticed in living rooms, halls and dressing rooms. A unique piece that brings light and warmth to the environment, fitting in with any predominant decorative style. We recommend cleaning with a damp cloth avoiding the use of chemical products. This product does not include the screws for anchoring or fastening to the wall.',
        price: {
            value: 119.95,
            currency: '€',
        },
    },
    {
        id: 4,
        name: 'Candle Holders ',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-4-1.jpg?alt=media&token=694b6441-a32c-45f0-9f9a-b5685be8bd44&_gl=1*15aopqs*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc0NzEuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-4-2.jpg?alt=media&token=822bb3be-7e2e-45ae-8f07-b77d615b9a79&_gl=1*j66jnt*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc0NjAuMTAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-4-3.jpg?alt=media&token=4fbcd398-b751-46b8-a105-f799d74ad915&_gl=1*1b8l520*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc0NDkuMjEuMC4w',
        ],
        description:
            'The Set of 3 Nalyna Glass Candle Holders is a simple, original and functional accessory with which you can place your candles with personality. Made of glass, it stands out for its daring and original geometric shapes. With Nalyna you are going to revolutionize your home, being the ideal accessory to place in your living room, bedroom or hall. We recommend cleaning it with a damp cloth, avoiding the use of chemical products.',
        price: {
            value: 39.95,
            currency: '€',
        },
        bestseller: true,
    },

    {
        id: 5,
        name: 'Face Vase',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-5-1.jpg?alt=media&token=e3f934b9-aec2-4a9e-8843-02aad0c1d992&_gl=1*1kk7ist*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc0MzQuMzYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-5-2.jpg?alt=media&token=fc320e1e-4458-4969-bf83-c9689190e5ed&_gl=1*5jnf7u*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc0MjQuNDYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-5-3.jpg?alt=media&token=d8f37bd9-b9ac-4520-9430-f6e724d1203f&_gl=1*p3htjp*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDc0MTAuNjAuMC4w',
        ],
        description:
            "The Zagir Ceramic Vase is an accessory that will fill the room with personality and originality. With this simple and versatile accessory you will be able to complete the decoration in an original and elegant way. It is made of ceramic, a material that not only gives it elegance and sophistication, but also makes it resistant and compact. We must highlight its peculiar and daring shape that reminds us of a person's profile. Don't hesitate any longer and get Zagir an unbeatable accessory from our catalogue. For proper maintenance we recommend cleaning with a damp cloth, avoiding the use of chemical products.",
        price: {
            value: 35.9,
            currency: '€',
        },
        bestseller: true,
    },

    {
        id: 6,
        name: 'Candle Holder',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-6-1.jpg?alt=media&token=65bc85f8-2da5-4639-8506-438458dc47b8&_gl=1*1hhm7n7*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDczOTUuNi4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-6-2.jpg?alt=media&token=7e66618d-bad6-40cd-a46b-370d5bc2d177&_gl=1*izu5f2*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDczNzkuMjIuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-6-3.jpg?alt=media&token=62ca3ec6-8c6a-4d8a-b516-7a6054936359&_gl=1*15fbcwe*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDczNjYuMzUuMC4w',
        ],
        description:
            'Versatile, original and functional are 3 characteristics that define the Olcani Glass Candle Holder. Its modern design leaves no one indifferent, since its elegant curves together with its glass material make it a highly decorative accessory. The Candle Holders have become fashionable elements, since with the passage of time there are of all types and shapes, adapting perfectly to any type of decorative style. By adding a candle, Olcani can also illuminate any corner of the room, giving personality and character to the home. Place several candle holders and create your own composition.',
        price: {
            value: 11.95,
            currency: '€',
        },
    },
    {
        id: 7,
        name: 'Candle Kurly',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-7-1.jpg?alt=media&token=604eb8bf-a8c9-4ed3-ab67-1ee304bb11b3&_gl=1*c895lv*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDczNTIuNDkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-7-2.jpg?alt=media&token=1ae73c60-83d3-4559-ab68-b581ef22b323&_gl=1*18sf0jb*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDczNDEuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-7-3.jpg?alt=media&token=54f25568-0d3b-4c0b-9942-91e4103a8002&_gl=1*1vutdo5*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDczMjcuNC4wLjA.',
        ],
        description:
            'With the Candle Kurly  you will be able to give your room a casual and elegant touch. Different from the classic design of decorative candles and with a duration of 5 hours, Kurly is perfect to decorate any corner of the house, whether in a corner of the living room, in the hall, or on the bedroom table, always accompanied by a candle holder suitable for its size. With its spiral-shaped design and its perfectly combinable colours, it will give a warmer and more welcoming tone to your home. Made with beeswax and soy, totally natural and unscented , it is perfect to give on a special date as it is a detail that will never go out of style.',
        price: {
            value: 5.95,
            currency: '€',
        },
    },
    {
        id: 8,
        name: 'Round Mirror',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-8-1.jpg?alt=media&token=31cda158-8a9f-4235-984d-afb7de2ec01c&_gl=1*1dvfle0*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3OTMzNy4zNS4xLjE2OTgxNzk5OTguMzkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-8-2.jpg?alt=media&token=0438b9b4-3ece-4c02-b8cb-ac39c2f46618&_gl=1*rrsq9e*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDczMDguMjMuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-8-3.jpg?alt=media&token=2aefe9b2-944b-44e4-bc4d-fcf3e25b6241&_gl=1*cxbep*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyOTYuMzUuMC4w',
        ],
        description:
            'Mirrors are decorative elements that multiply the light and give spaciousness to the rooms. The MDF Round Wall Mirror Siloh  is a piece made with a plywood and MDF frame in the Nordic style, which would fit in with different decorative styles such as natural, boho or Mediterranean. Place it in bathrooms, hallways, living rooms or bedrooms, it will provide light and subtly stand out without overloading the decoration of your home.',
        price: {
            value: 94.95,
            currency: '€',
        },
    },
    {
        id: 9,
        name: 'Magazine Rack',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-9-1.jpg?alt=media&token=cb7a94be-5402-48a5-8442-4053f19f65a5&_gl=1*1gvuzgy*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyODMuNDguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-9-2.jpg?alt=media&token=fa6e166f-04e9-4946-a23b-3fd9ac26f746&_gl=1*oz3w9*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyNzEuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-9-3.jpg?alt=media&token=9154cfba-1ed4-4ca7-82e1-7b2ff663fea8&_gl=1*1iv7hyy*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyNTcuMi4wLjA.',
        ],
        description:
            "Vintage style stands out for its character and personality, which is why the Mateus metal magazine rack is a very functional and versatile decorative accessory, as it will help you keep your rooms clean and tidy. Made of golden steel, it brings a touch of glamour that will not leave anyone indifferent. It is perfect for an office, office, waiting room or living room, bringing beauty to your rooms. If you love magazines, and you do not know where to store them? Don't think twice and get Mateus.",
        price: {
            value: 35.9,
            currency: '€',
        },
        bestseller: true,
    },

    {
        id: 10,
        name: 'Bookends',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-10-1.jpg?alt=media&token=a0c326df-9dc9-4bb3-8826-cec7a5cf8970&_gl=1*1d05ky4*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcxNTQuMjUuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-10-2.jpg?alt=media&token=6524878f-9b5b-4755-9a42-bbfbae36b798&_gl=1*18kpmb9*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcxNjUuMTQuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-10-3.jpg?alt=media&token=f4d8b21c-4522-4a58-9c0c-d24fa668d7bb&_gl=1*1itc85v*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcxNzQuNS4wLjA.',
        ],
        description:
            'Do you like different? Be bold with the Set of 2 Sayre Ceramic Bookends. With its peculiar shape that reminds us of a rock, we find a very good decision for the bravest. Give that different touch that your home needs and be the envy of your guests. Its modern design made of ceramic provides resistance to the piece, it is undoubtedly the best option. You can also use it as decoration, including it in some corner of the house, either in the dining room or in the living room.',
        price: {
            value: 16.95,
            currency: '€',
        },
    },
    {
        id: 11,
        name: 'Table Clock',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-11-1.jpg?alt=media&token=fee4ed02-5cab-4cc2-a7a7-17d720477046&_gl=1*akmoo6*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcxOTkuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-11-2.jpg?alt=media&token=184ac8b4-8d16-4310-acad-b14d6172d231&_gl=1*12a565p*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyMTIuNDcuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-11-3.jpg?alt=media&token=9e981b6c-3df2-446b-bcf2-ccec209d49ca&_gl=1*11si1fh*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyMTkuNDAuMC4w',
        ],
        description:
            'Made of iron , which makes it a resistant accessory, and combined with the gold-tone hands, it becomes a vintage style element. Anuket will fill the corner of the room where you decide to put it with vitality and elegance , whether in the hall, decorating a shelf in the living room or in the bedroom. For its operation, 1 AA model battery will be necessary (not included).',
        price: {
            value: 17.95,
            currency: '€',
        },
    },
    {
        id: 12,
        name: 'Dried Branches',
        category: CategoryList.decoration,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-12-1.jpg?alt=media&token=20ae424b-31b4-4359-9c36-59a8d6ae7253&_gl=1*y9kyj6*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyMjcuMzIuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-12-2.jpg?alt=media&token=4abb1359-0dd0-49a9-999c-837525f9a29d&_gl=1*1dhdyhj*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyMzcuMjIuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/decoration%2Fdecoration-12-3.jpg?alt=media&token=83926fc5-44c7-4d05-a5eb-8756c6afcd33&_gl=1*18hwzud*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE0MjY2My4zMy4xLjE2OTgxNDcyNDcuMTIuMC4w',
        ],
        description:
            'With the Pack of 4 Bopay Decorative Dried Branches with a metallic effect and a golden colour, you will be able to create a sophisticated environment combining the simplicity of nature and the beauty of modernity. Its reverse heart shape and the detail of the folds make this set of four dry branches turn that corner of the house that normally goes unnoticed into a corner with a lot of style and strong personality. Dare with Bopay and feel the explosion of the perfect mix, letting the natural trend into your home!',
        price: {
            value: 6.95,
            currency: '€',
        },
    },
];
