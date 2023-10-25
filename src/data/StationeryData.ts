import { Product } from '../types/Product';
import { CategoryList } from '../types/CategoryType';

export const StationeryData: Product[] = [
    {
        id: 1,
        name: 'Spiral notebook',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-1-1.jpg?alt=media&token=bb28f4e2-90e7-4ec0-9e30-37d10ef26e77&_gl=1*1f93d04*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzMDguNDIuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-1-2.jpg?alt=media&token=3490a911-36d9-42a0-ade7-d1c34cb8bc9b&_gl=1*6vvakd*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzMjAuMzAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-1-3.jpg?alt=media&token=e2559917-d3cc-4f43-9f70-b7a0cafd5555&_gl=1*i2kwmb*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzNDguMi4wLjA.',
        ],
        description:
            'Spiral notebook in A4 format with 200 pages of large squared (Seyès) paper and 4 movable plastic dividers. This allows you to organize it as you wish. The pages have a perforated edge so you can easily tear them out and store them in a 23-ring binder. Thanks to the spiral on the side, the notepad stays open well. The notebook has a flexible plastic cover with a flower print.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 2,
        name: 'Green ballpoint pen',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-12-1.jpg?alt=media&token=5c75c2fc-a3d6-4366-ae6b-63ab5b5a7148&_gl=1*10ft024*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk2MzAuNTIuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-12-2.jpg?alt=media&token=c80efd84-8828-47ca-8e95-7aa92e8d163f&_gl=1*15xlmll*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk2NDEuNDEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-12-2.jpg?alt=media&token=c80efd84-8828-47ca-8e95-7aa92e8d163f&_gl=1*15xlmll*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk2NDEuNDEuMC4w',
        ],
        description:
            'Green ballpoint pen with a metal body. Despite its sturdy appearance, the pen with blue ink writes smoothly.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 3,
        name: 'Spiral A4 notebook',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-3-1.jpg?alt=media&token=78d298bf-677c-48e8-9f96-b852b2d89956&_gl=1*15kd282*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzODAuMzguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-3-2.jpg?alt=media&token=ea3b8d2a-6e8e-4b04-b2b3-1f2308b9d623&_gl=1*pryefb*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzOTAuMjguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-3-3.jpg?alt=media&token=c246455c-4fb4-4654-b38d-3e2e171dc3fb&_gl=1*pulaon*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzOTcuMjEuMC4w',
        ],
        description:
            'Spiral notebook in A4 format with 200 lined pages and 10 adjustable plastic dividers. This allows you to organize it as you wish. The pages have a perforated edge so you can easily detach them and store them in a 23-ring binder. Thanks to the spiral, the notebook stays open well. The spiral notebook has a plastic cover with a green zigzag pattern.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 4,
        name: '3 A5 Notebooks - Lined',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-4-1.jpg?alt=media&token=436dc200-49ac-422a-9a17-b4686ed45436&_gl=1*1svrfyr*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0MDUuMTMuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-4-2.jpg?alt=media&token=5612436c-d1af-4330-ac7f-f585d68cc833&_gl=1*v7hqx0*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0MTUuMy4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-4-3.jpg?alt=media&token=93859127-2bc6-40fe-96d5-5e4a7ec600b0&_gl=1*ak7ihn*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0MjYuNjAuMC4w',
        ],
        description:
            'Set of three A5 notebooks, each with 80 lined pages and rounded corners. The notebooks have a soft cover in different shades of blue and purple and are held together by a cord.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 5,
        name: 'Black notebook',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-2-1.jpg?alt=media&token=3cfbe7fc-6fff-4917-9552-f3937018c4a2&_gl=1*1gsdtv1*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzNTguNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-2-2.jpg?alt=media&token=13553999-98ff-4104-9652-3116d4a7314f&_gl=1*1cetjx0*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzNjcuNTEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-2-3.jpg?alt=media&token=f85123fd-2cc3-42ae-8f30-3054693e2a1f&_gl=1*14t45nd*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTkzNzQuNDQuMC4w',
        ],
        description:
            'This notebook features a sturdy and flexible black synthetic cover. With its 200 lined pages inside, this notebook is perfect for taking notes, making to-do lists, and jotting down important information. Whether at the office, school, or working remotely, this notebook is practical and useful.',
        price: {
            value: 10.95,
            currency: '€',
        },
    },

    {
        id: 6,
        name: 'Embroidered pencil case',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-6-1.jpg?alt=media&token=612d7751-07b6-41f1-83c4-4341c0afbb7d&_gl=1*1ed10dd*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0NzAuMTYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-6-2.jpg?alt=media&token=e5e09416-88ac-495e-9bb2-62506f708728&_gl=1*6jap8u*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0ODEuNS4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-6-3.jpg?alt=media&token=461a76d6-5ba4-463a-9572-64b91f82484e&_gl=1*ixdgfh*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0OTQuNjAuMC4w',
        ],
        description:
            'This green pencil case with white embroidered flowers is made of fabric and fully lined. The case has a single compartment that closes with a zipper. It is large enough to hold your pens and pencils.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },

    {
        id: 7,
        name: 'Black ballpoint pen',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-10-1.jpg?alt=media&token=6bc5feea-a476-4f56-b39e-c9ff99bdf065&_gl=1*o66j4t*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1OTYuMjEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-10-2.jpg?alt=media&token=a66eea98-ca8e-4ce5-9c65-95775668b06c&_gl=1*h4hpod*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk2MDUuMTIuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-10-3.jpg?alt=media&token=5467bc9e-6af3-43c6-991b-f984feb7aa32&_gl=1*1878dhp*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk2MTAuNy4wLjA.',
        ],
        description: 'Black ink ballpoint pen with a matte black body. The pen has a silver clip cap.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 8,
        name: 'Lined A5 Notebook',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-5-1.jpg?alt=media&token=135e677a-3e89-412b-b473-be72a544da57&_gl=1*1nlpdta*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0MzkuNDcuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-5-2.jpg?alt=media&token=074f1dd1-186e-4298-b83c-8ef84debf176&_gl=1*1yq87qp*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0NTAuMzYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-5-3.jpg?alt=media&token=f4902e32-237b-4086-9c28-d4342e796715&_gl=1*1r15l9h*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk0NjAuMjYuMC4w',
        ],
        description:
            'A5-sized notebook with 160 lined pages. The notebook has a kraft paper cover and a closure elastic.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 9,
        name: 'Case 22 x 7',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-7-1.jpg?alt=media&token=0342badf-ccc8-4275-801c-c5cb27491ce6&_gl=1*jpnvxl*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1MDQuNTAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-7-2.jpg?alt=media&token=49969a1c-e185-41a4-8c42-860550eb982a&_gl=1*vsnc3t*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1MTguMzYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-7-3.jpg?alt=media&token=f482e27b-a3b6-45d6-88b6-11668a35a241&_gl=1*uwamsd*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1MjguMjYuMC4w',
        ],
        description: 'Black case to store your stationery.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 10,
        name: 'Ballpoint pens',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-9-1.jpg?alt=media&token=fba61218-8a1c-443e-af74-8ef7795a819f&_gl=1*rx5wl0*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1NzUuNDIuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-9-2.jpg?alt=media&token=fbf6b736-98f6-46a1-a958-f493fd1e7b98&_gl=1*r3tps1*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1ODQuMzMuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-9-2.jpg?alt=media&token=fbf6b736-98f6-46a1-a958-f493fd1e7b98&_gl=1*r3tps1*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1ODQuMzMuMC4w',
        ],
        description:
            'Set of 4 ballpoint pens with blue, green, red, and black ink. Each pen has a screw-on cap at the top that protects the delicate tip.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 11,
        name: '20 C6 Envelopes',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-8-1.jpg?alt=media&token=4c5eca6d-e894-46a3-9983-3cd4c8c55340&_gl=1*15m3bmw*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1MzcuMTcuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-8-2.jpg?alt=media&token=8e66805c-1e02-4989-bddc-49afd005ba09&_gl=1*vp2z67*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1NDguNi4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-8-3.jpg?alt=media&token=8ac3518d-6d11-48af-b9f8-94705f5f7ccc&_gl=1*1a6sxme*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk1NTcuNjAuMC4w',
        ],
        description:
            'Set of 20 C6 size envelopes with self-adhesive closure. When you seal the envelope using the adhesive edge, it is recommended not to touch it for 10 minutes so that the paper can absorb the glue well. This reduces the risk of the envelope reopening.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
    {
        id: 12,
        name: 'Pink ballpoint pen',
        category: CategoryList.stationery,
        images: [
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-11-1.jpg?alt=media&token=fdab254d-0219-40ad-a6dc-3620aea864e4&_gl=1*lrqbts*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk2MTYuMS4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-11-2.jpg?alt=media&token=6fc51731-1d8f-4da2-bdc1-36bc765046d9&_gl=1*bsbpap*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk2MjIuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/krush-3eedb.appspot.com/o/stationery%2Fstationery-11-2.jpg?alt=media&token=6fc51731-1d8f-4da2-bdc1-36bc765046d9&_gl=1*bsbpap*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODI1OTI5MC4zOC4xLjE2OTgyNTk2MjIuNjAuMC4w',
        ],
        description:
            'Pink ballpoint pen with a metal body. Despite its sturdy appearance, the pen with blue ink writes smoothly.',
        price: {
            value: 0.95,
            currency: '€',
        },
    },
];
