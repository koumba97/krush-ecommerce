import { Product } from '../types/Product';
import { CategoryList } from '../types/CategoryType';

export const FurnitureData: Product[] = [
    {
        id: 1,
        name: 'Ceramic Side Table',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-1-1.jpg?alt=media&token=d3209e17-238c-49d3-b5d6-e85251cb25f8&_gl=1*1m5zfq2*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzU5NjYuNDQuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-1-2.jpg?alt=media&token=730ca866-1535-4f05-a54e-64e524514aaf&_gl=1*1g2kdhx*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzU5ODAuMzAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-1-3.jpg?alt=media&token=9095409b-825b-477e-a8d0-a5bc3ea1e9be&_gl=1*a9paph*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzU5OTEuMTkuMC4w',
        ],
        description:
            'Add originality to your home with the Otam Ceramic Round Side Table. Its artisan design makes it an exclusive decorative accessory if you are looking to fill your home with character and distinction. It is made of high quality ceramic with a matte finish. This side table will become an essential element for your living room, dining room or bedroom thanks to its functionality. Let your imagination run wild and discover all the possibilities you can achieve with a side table with these characteristics.',
        price: {
            value: 88.95,
            currency: '€',
        },
    },
    {
        id: 2,
        name: 'Dining Chair',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-2-1.jpg?alt=media&token=d732e37d-2194-4af5-877f-f622bbfff5bf&_gl=1*1jv3koj*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYwMTUuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-2-2.jpg?alt=media&token=d86145a4-ed7b-40c3-9525-f6ed14d1aa45&_gl=1*1obrqiy*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYwMjQuNTEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-2-3.jpg?alt=media&token=0711b257-4bf8-4c73-aaa0-9b53d2e7b8dd&_gl=1*4ihdsf*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYwMzQuNDEuMC4w',
        ],
        description:
            'Complete the decoration of your dining room and enjoy good times in meeting with your family and friends with our Wendell Dining Chair. We present you the perfect combination of comfort and functionality. Wendell is made of recycled polypropylene, a material that is resistant and robust. A modern design chair with curved lines on its back and seat, making it a comfortable and fully ergonomic chair.',
        price: {
            value: 66.95,
            currency: '€',
        },
    },
    {
        id: 3,
        name: 'Wood coffee table',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-9-1.jpg?alt=media&token=0fc72af3-9c63-48d8-a020-4e74536f1f08&_gl=1*1p6ue3x*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYyNjkuNi4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-9-2.jpg?alt=media&token=263731b6-8e01-4184-a0c5-a800967fee3d&_gl=1*1pgjn11*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYyNzkuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-9-3.jpg?alt=media&token=bb7d0913-66a0-4de3-86d3-2a6f15605d5f&_gl=1*1ihq6nj*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYyODkuNTAuMC4w',
        ],
        description:
            'At SKLUM we love knowing that we fill the corners of thousands and thousands of homes with style and glamour, which is why we thought of bringing you the Mango Wood Coffee Table Dalen. A designer piece of furniture, made of bleached mango wood, a resistant and durable material, ideal for daily use. It has an original shape that will undoubtedly fill the rooms of your home with life. Dalen comes with studs for its legs, which guarantee greater support on any type of floor, protecting from unwanted scratches and marks.',
        price: {
            value: 369.95,
            currency: '€',
        },
    },
    {
        id: 4,
        name: 'Side Table',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-10-1.jpg?alt=media&token=ebbc0ddb-1217-4a97-948d-402d84a5f9e0&_gl=1*1g1s5g*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzMDguMzEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-10-2.jpg?alt=media&token=07254a14-1468-483a-8805-e1ebfcc37089&_gl=1*dsmm11*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzMjAuMTkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-10-3.jpg?alt=media&token=123f06a5-a353-41c8-b715-dd2c9a73faec&_gl=1*lqr4r8*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzMjguMTEuMC4w',
        ],
        description:
            "With the Side Table Olinka you will be able to complete your decoration and it will be perfect in any space in your home. It stands out for its much-needed shapes, structure and functionality, it will make your home a practical and comfortable space on a day-to-day basis. Olinka is made of MDF, a material characterised by its strength and durability. Its versatility stands out because you can place it in living rooms and dining rooms, adding a dynamic feel due to its wavy shapes or for the children's room with its playful colours.",
        price: {
            value: 36.95,
            currency: '€',
        },
    },
    {
        id: 5,
        name: 'Chenille Armchair',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-8-1.jpg?alt=media&token=dcde3e9e-e4ba-48d3-94c4-cb6faf6be925&_gl=1*e7xgqi*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYyMzUuNDAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-8-2.jpg?alt=media&token=4c8df1a9-30e5-4ab2-b86c-ddff6919cbfe&_gl=1*14zzmr0*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYyNDYuMjkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-8-3.jpg?alt=media&token=eb51ad77-fc70-499a-9f0b-21f82ee2bfc4&_gl=1*1l0lg2q*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYyNTcuMTguMC4w',
        ],
        description:
            "With the Clovys Chenille Armchair, give your room that minimalist touch you've always been looking for. Its metal legs add the perfect touch of elegance and sophistication to complement your home. Moreover, it comes with felt pads, providing greater protection against potential scratches on your floor. Clovys showcases an exceptional vintage style with its golden feet and polyester upholstery with a chenille finish. A unique piece with great versatility, as you can place it in your living room, bedroom, office, or that enigmatic corner of the house that we so eagerly want to highlight.",
        price: {
            value: 74.9,
            currency: '€',
        },
    },

    {
        id: 6,
        name: 'Braided leather chair',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-11-1.jpg?alt=media&token=065a4e97-fd6a-4b52-a3da-89eb01ede719&_gl=1*hc8mi*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzNDQuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-11-2.jpg?alt=media&token=0a0ecaf3-3232-42e1-9bba-197b81fbc15f&_gl=1*41iumf*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzNTEuNTMuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-11-3.jpg?alt=media&token=0a91ae57-f9f8-4532-a85c-b7d1fe30207b&_gl=1*1fs6149*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzNTguNDYuMC4w',
        ],
        description:
            'The armchairs are seats that complete the decoration in the living room, office or bedroom, giving a very personal touch to the room. This is the Zaid Wood and Leather accent chair, an extra seat that will not go unnoticed in the home. Zaid stands out for the combination of its materials , mindi wood in the structure to provide firmness and robustness to the armchair, and leather on the back and seat, with a braided finish, to achieve greater resistance to the piece. Get ready to enjoy your moments of relaxation to the fullest with Zaid adding a touch of sophistication and elegance to the decoration of your favourite corner.',
        price: {
            value: 74.9,
            currency: '€',
        },
    },
    {
        id: 7,
        name: 'Metal Cabinet',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-3-1.jpg?alt=media&token=64a39d4b-0e49-4a07-8580-0d367e5e631f&_gl=1*1l0nsu0*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYwNDcuMjguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-3-2.jpg?alt=media&token=87715e55-a90a-4bfd-852a-8434aff11057&_gl=1*1503h86*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYwNTYuMTkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-3-3.jpg?alt=media&token=00df0ee9-3258-4664-a8c5-ee4585c77037&_gl=1*nt77le*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYwNjUuMTAuMC4w',
        ],
        description:
            'If you are looking for a stylish and functional piece of furniture with storage, we present our Pohpli 2-Door Cabinet. Made of metal, it will give your rooms an industrial and modern touch. It consists of two large storage sides where we can organize all kinds of documents and personal items. Our dresser will help you make your day to day more bearable and organized.',
        price: {
            value: 179.95,
            currency: '€',
        },
    },

    {
        id: 8,
        name: 'Steel Coffee Table',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-5-1.jpg?alt=media&token=4ce668ec-fd93-4293-baa6-e8c9a38fa1b4&_gl=1*818sjl*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYxMTAuMjguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-5-2.jpg?alt=media&token=bc9e5a68-43fa-47b2-9d88-40da473308f1&_gl=1*3jyf3s*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYxMjEuMTcuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-5-3.jpg?alt=media&token=af0b723e-3091-4dc6-b591-799c991e8ebd&_gl=1*13shwld*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYxMzUuMy4wLjA.',
        ],
        description:
            'Add to the decoration of your living room or dining room that original touch you were looking for. The Azuara Steel Coffee Table is your key piece. Its high quality stainless steel structure in gold color combines perfectly with the marble effect on its top, giving the whole set a vintage style that is so current right now. Its sturdy structure is supported by rubber blocks that accompany its legs to avoid damaging the floor and to be able to move it to show it off in every corner of your home. Azuara, is a coffee table that stands out for its original shapes and its special touch of color, will brighten and bring light to the room.',
        price: {
            value: 199.95,
            currency: '€',
        },
    },
    {
        id: 9,
        name: 'Metal Table Cabinet',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-6-1.jpg?alt=media&token=434cb11f-16b8-4ac7-8b7e-1aee0d1f4110&_gl=1*eg316h*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYxNTAuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-6-2.jpg?alt=media&token=f2f88464-fb11-4ff6-88d8-8e2f5361364d&_gl=1*1eh47iq*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYxNjQuNDYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-6-3.jpg?alt=media&token=2d878f65-5e2d-4352-b712-ea00837b5d25&_gl=1*3beqq9*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYxNzguMzIuMC4w',
        ],
        description:
            'The Kazuo Metal Table Cabinet is the perfect complement to help you keep your work area clean and tid. It presents a modern and functional design, with five drawers so you can organize your day to day at the office. Its manufacture in steel, in an industrial styl, gives us that touch that we like so much, thus giving the room a modern and original touch. Thanks to its design, the desk organiser is ideal for use both in the office and at home. It does not have railing.',
        price: {
            value: 74.95,
            currency: '€',
        },
    },
    {
        id: 10,
        name: 'Shoe Rack',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-7-1.jpg?alt=media&token=d40274e1-1a90-48ed-8d1d-e498c306f6c5&_gl=1*1q9r8nz*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYxODkuMjEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-7-2.jpg?alt=media&token=07cd44b0-112f-496a-a7f3-22e22dfef001&_gl=1*rrseef*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYyMDQuNi4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-7-3.jpg?alt=media&token=2d486505-7bf7-471c-8d9f-f06343ab896d&_gl=1*7sevxs*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYyMTUuNjAuMC4w',
        ],
        description:
            'For some people, order and organization is a philosophy of life. With the Bardott Bamboo Wooden Shoe Rack you can achieve functionality and a very natural air thanks to its bamboo manufacture. Perfect to place in the hall or in the bedroom and have all your shoes classified perfectly, whatever the decorative style that predominates in your home. Without a doubt, it is an essential element in the organization of your home.',
        price: {
            value: 54.95,
            currency: '€',
        },
    },

    {
        id: 11,
        name: 'Scand Nordic chair',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-12-1.jpg?alt=media&token=7a818157-1a59-47eb-b178-884c37567351&_gl=1*1yim8i1*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzNjYuMzguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-12-2.jpg?alt=media&token=10d8f0e8-0a9d-422f-b908-c7df785e74b6&_gl=1*p8hj09*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzNzUuMjkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-12-3.jpg?alt=media&token=185a769f-d0f3-41a1-9d41-c7b548e14594&_gl=1*1djt3rq*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYzODMuMjEuMC4w',
        ],
        description:
            'The Scand Nordic chair is inspired by some interior design icons that, over time, have become an emblematic piece in the Nordic style. It is a simple, practical and very ergonomic seat, which adapts perfectly to your body. The backrest, made of polypropylene plastic, a versatile and tenacious material, is available in a wide variety of colours with which you can add a touch of freshness and originality to your room. Its legs, made of beech wood, are very robust and resistant, supporting up to 110 kg, and they come with anti-slip and anti-scratch studs, which will allow you to use it on any type of floor. Its use is exclusively for interiors, being ideal for dining rooms, kitchens, among others.',
        price: {
            value: 74.9,
            currency: '€',
        },
    },
    {
        id: 12,
        name: 'Velvet Sofa',
        category: CategoryList.furniture,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-4-1.jpg?alt=media&token=6d18e864-bbb5-4e99-8acb-1031d03e809d&_gl=1*1qox15c*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYwNzguNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-4-2.jpg?alt=media&token=dc6b0240-4362-4f44-a478-21c566b856f7&_gl=1*9x7ofu*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYwODkuNDkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/furniture%2Ffurniture-4-3.jpg?alt=media&token=fd3c98b2-6bc1-428f-808e-4bc361faa6c7&_gl=1*jvqrqg*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODE3NTM4Ny4zNC4xLjE2OTgxNzYxMDEuMzcuMC4w',
        ],
        description:
            'Bring character , originality and comfort to your home with the Jehrd Essentials 3-seater Velvet Reclining Sofa. It combines a pleasant velvet upholstery together with metal legs, it has the quilted detail on the backrest that provides a vintage air. Thanks to its soft foam padding it becomes a totally comfortable sofa. It is perfect for homes with reduced spaces, since it allows you to quickly recline its backrest thanks to its Clic Clac system. A very practical and reliable system, as the sofa will continue to be comfortable in all its variables. The armrests are removable.',
        price: {
            value: 299.95,
            currency: '€',
        },
    },
];
