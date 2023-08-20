import { CategoryList } from './CategoryList'
import { Price } from './Price'

export interface Article {
    id: number
    category: CategoryList
    name: string
    images: string[]
    price: Price
    description: string
    bestseller?: boolean
}
