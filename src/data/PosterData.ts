import { Product } from '../types/Product';
import { CategoryList } from '../types/CategoryType';

export const PosterData: Product[] = [
    {
        id: 1,
        name: 'Tokyo Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-1-1.jpg?alt=media&token=f328a814-eac4-455e-b26a-44de3c85f0af&_gl=1*1ruwg07*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI1NDAuMjYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-1-2.jpg?alt=media&token=0af1f03f-68c6-4d56-b837-baa442f4fc8c&_gl=1*ywufo0*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI1NTcuOS4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-1-3.jpg?alt=media&token=3e34e583-0bcf-4cd8-bd1b-dde23a9e6c3b&_gl=1*ssbg0v*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI1NjYuNjAuMC4w',
        ],
        description:
            'Are you in for a lunch treat? This poster will give you some inspiration. A perfect painting to bring colour to your bare kitchen walls and dream away about a meal at a Japanese restaurant.',
        price: {
            value: 10.95,
            currency: '€',
        },
    },
    {
        id: 2,
        name: 'The Orizuru Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-2-1.jpg?alt=media&token=7207be0c-d2be-4b1d-87bb-d9e6583f8f22&_gl=1*4hwitc*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI2MTIuMTQuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-2-2.jpg?alt=media&token=19b6e2a4-f667-4880-9846-8accf6142d48&_gl=1*916u58*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI2MjMuMy4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-2-3.jpg?alt=media&token=2181033d-82d2-4aac-9314-2c4eda5e90cb&_gl=1*112w4xm*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI2MzQuNjAuMC4w',
        ],
        description:
            'A dark beige motif inspired by the Japanese tradition of origami. Orizuru means paper crane and is the most iconic and well-known figure in origami. It is often used as table decor and now as wall decor as well!',
        price: {
            value: 10.95,
            currency: '€',
        },
    },
    {
        id: 11,
        name: 'Good Things Are Coming Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-11-1.jpg?alt=media&token=2265dff1-76fd-4622-9254-90cbf08ddd7e&_gl=1*bllo79*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI5MTEuNDEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-11-2.jpg?alt=media&token=5906a4b7-b123-47cf-8d8f-0d0bb812998d&_gl=1*19ow0bv*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI5MjIuMzAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-11-3.jpg?alt=media&token=88f2e648-b0da-44dc-bf43-97d78bf3ade8&_gl=1*6686qx*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI5NDYuNi4wLjA.',
        ],
        description:
            'Contemporary typography poster in black and white. Good Things Are Coming is an uplifting print that contributes to positive energy and serves as a reminder that good times is soon to come your way! Perfect to combine with other black and white motifs in a gallery wall.',
        price: {
            value: 10.95,
            currency: '€',
        },
    },
    {
        id: 12,
        name: 'Gummy Bear Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-12-1.jpg?alt=media&token=6593691e-1c9c-4359-8d30-7f001a4d765c&_gl=1*1ai4d0v*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI5NTkuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-12-2.jpg?alt=media&token=908bb49e-d0db-40d4-8e9c-911e0674741e&_gl=1*1wlay69*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI5NzYuNDMuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-12-3.jpg?alt=media&token=53e87d4a-b98c-4a24-9bf8-9a80e950eb71&_gl=1*qqn0ns*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI5ODYuMzMuMC4w',
        ],
        description:
            "Who doesn't like gummy bears? Decorate your little one's space with this iconic pink bear illustration that's so sweet you can almost taste it.",
        price: {
            value: 10.95,
            currency: '€',
        },
    },
    {
        id: 3,
        name: 'Sorrento Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-3-1.jpg?alt=media&token=497e8754-608f-4b7c-906c-8f48f4e78051&_gl=1*17s5v14*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI2NDguNDYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-3-2.jpg?alt=media&token=4407b779-d7a7-495b-9511-c732073e9f30&_gl=1*1w7oz0l*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI2NjAuMzQuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-3-3.jpg?alt=media&token=426a8281-729a-487b-8196-bebd70598453&_gl=1*1hg5t1e*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI2NzIuMjIuMC4w',
        ],
        description:
            'Colorful illustration with a beautiful Sorrento, Italy theme. The illustration unites perfectly with text at the top and bottom. Give your home more life with this colorful poster!',
        price: {
            value: 10.95,
            currency: '€',
        },
    },

    {
        id: 5,
        name: 'Stay Groovy Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-5-1.jpg?alt=media&token=09981486-8271-455b-a684-087d26bd2b13&_gl=1*1toxs3n*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3MTMuNDkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-5-2.jpg?alt=media&token=34ee735e-861c-4118-942a-ff1c0d36d1a8&_gl=1*l5sg7v*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3MjMuMzkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-5-3.jpg?alt=media&token=aed2cf85-6369-4f33-9aac-eddb89244e81&_gl=1*1lhz0n7*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3MzQuMjguMC4w',
        ],
        description: 'Remember to stay groovy with this colorful poster with a rainbow in orange, pink and yellow.',
        price: {
            value: 10.95,
            currency: '€',
        },
    },
    {
        id: 6,
        name: 'The Great Wave by Katsushika Hokusai Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-6-1.jpg?alt=media&token=bc3ea497-3470-4dc8-a07f-d2945212a22d&_gl=1*1asc2ve*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3NDUuMTcuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-6-2.jpg?alt=media&token=4c778a6b-d024-43b2-9568-d193bde3e4bf&_gl=1*kw25s0*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3NTQuOC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-6-3.jpg?alt=media&token=480e2964-09ba-4afb-b13b-c8ed39ab6491&_gl=1*kat4a8*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3NjQuNjAuMC4w',
        ],
        description:
            'The Great Wave off Kanagawa is a traditional Japanese Ukyio-e style illustration by the artist Katsushika Hokusai. The print shows a number of boats trying to cross the ocean while encountering large waves.',
        price: {
            value: 10.95,
            currency: '€',
        },
    },
    {
        id: 7,
        name: 'Vogue Men Issue Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-7-1.jpg?alt=media&token=7d592405-db69-424f-b004-6d69e0edcab9&_gl=1*1fqw7j9*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3NzYuNDguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-7-2.jpg?alt=media&token=1d0b3c76-742f-4166-b77d-7274e76d3034&_gl=1*f4c8x*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3OTAuMzQuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-7-3.jpg?alt=media&token=77582328-f855-429d-8cb2-9048ca44a322&_gl=1*19z5k1s*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3OTkuMjUuMC4w',
        ],
        description:
            'A trendy poster of a Vogue cover featuring a vintage illustration. The motif goes in a lovely purple color with fine details and a grainy texture that enhances the retro character. A poster that fits a fashionable home!',
        price: {
            value: 10.95,
            currency: '€',
        },
    },
    {
        id: 4,
        name: 'Flower Love Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-4-1.jpg?alt=media&token=cb402454-65b1-43e1-9fe3-aa7714ae6594&_gl=1*1agfozd*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI2ODMuMTEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-4-2.jpg?alt=media&token=8537b535-6544-4396-ac7c-da1a2df92fcd&_gl=1*1fflymp*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI2OTMuMS4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-4-3.jpg?alt=media&token=18a487de-a7e5-4ea5-98d9-aeeaefb82a8e&_gl=1*vqvpgj*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI3MDIuNjAuMC4w',
        ],
        description:
            'All you need is love! A graphical and retro inspired sweet poster of two flowers coiled up together, all against a checkered background in blue and beige. Why not bring a hint of flower power into your home?',
        price: {
            value: 10.95,
            currency: '€',
        },
    },
    {
        id: 8,
        name: 'La Nuit Étoilée by Vincent van Gogh Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-8-1.jpg?alt=media&token=a0110d89-3dd4-4593-a1c0-f0f576494a30&_gl=1*48oydj*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI4MTAuMTQuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-8-2.jpg?alt=media&token=0d458a89-1ae8-4d21-9e66-cb0e2c246cc3&_gl=1*ibvqjf*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI4MjIuMi4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-8-3.jpg?alt=media&token=50b5e90f-4763-4fdb-9fd4-6378724d6f2b&_gl=1*1af52or*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI4MzEuNjAuMC4w',
        ],
        description:
            "Van Gogh's famous oil painting of a pre-dawn view of a swirling night sky. It brings your home to life. La Nuit Étoilée by Vincent van Gogh Poster has a built-in white border that frames the motif elegantly.",
        price: {
            value: 12.95,
            currency: '€',
        },
    },
    {
        id: 9,
        name: 'Lotus Flowers by Ogawa Kazumasa Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-9-1.jpg?alt=media&token=297378f3-5dcb-40c7-9a49-8f11b37f8fa2&_gl=1*1eaomex*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI4NDEuNTAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-9-2.jpg?alt=media&token=40e59e05-ac70-4515-b86a-a397d7d55545&_gl=1*yivgxo*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI4NTEuNDAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-9-3.jpg?alt=media&token=1db4693e-7144-4d33-ac8c-31354cf6b880&_gl=1*1bddrgq*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI4NjkuMjIuMC4w',
        ],
        description:
            'Beautiful photomechanical print of Lotus Flowers by Ogawa Kazumasa. Green and pink colours are framed by a calm, blue-green background.',
        price: {
            value: 11.95,
            currency: '€',
        },
    },
    {
        id: 10,
        name: 'Bauhaus Geometry Green Poster',
        category: CategoryList.poster,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-10-1.jpg?alt=media&token=168c5c02-13a2-4230-9d58-dedf3453ae48&_gl=1*1mky1yr*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI4ODIuOS4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-10-2.jpg?alt=media&token=d6389881-911b-439f-8608-cfd60e23dfe5&_gl=1*rbikik*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI4OTIuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/poster%2Fposter-10-3.jpg?alt=media&token=fcbf3b78-07a6-485d-85ce-b8f641c25910&_gl=1*qzufdk*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1MjUwNi4zNy4xLjE2OTgyNTI5MDIuNTAuMC4w',
        ],
        description:
            'A green graphic illustration inspired by the art school Bauhaus where brutal, strict och geometric shapes define the artistic movement.',
        price: {
            value: 10.95,
            currency: '€',
        },
    },
];
