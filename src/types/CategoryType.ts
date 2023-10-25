export enum CategoryList {
    plants = 'plants',
    decoration = 'decoration',
    furniture = 'furniture',
    kitchen = 'kitchen',
    jewelry = 'jewelry',
    lighting = 'lighting',
    poster = 'poster',
    stationery = 'stationery',
}

export type CategoryType =
    | CategoryList.plants
    | CategoryList.decoration
    | CategoryList.furniture
    | CategoryList.kitchen
    | CategoryList.jewelry
    | CategoryList.lighting
    | CategoryList.poster
    | CategoryList.stationery;
