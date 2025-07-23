import { ProductType } from "./ProductType";

export interface categoryType {
    id: string,
    name_uz: string,
    name_ru: string,
    createdAt: string,
    updatedAt: string,
    Product: ProductType[]
}