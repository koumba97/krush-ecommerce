export enum CategoryList {
    plants = 'plants',
    decoration = 'decoration',
    furniture = 'furniture',
    kitchen = 'kitchen',
    jewelry = 'jewelry',
    lamp = 'lamp',
    poster = 'poster',
    stationery = 'stationery',
}

export type CategoryType =
    | CategoryList.plants
    | CategoryList.decoration
    | CategoryList.furniture
    | CategoryList.kitchen
    | CategoryList.jewelry
    | CategoryList.lamp
    | CategoryList.poster
    | CategoryList.stationery;
