import { Category } from './category';
import { Value } from './value';
export declare type DictionaryUID = string | number;
export interface CategoryContainer {
    [key: number]: Category;
}
export declare type ValueContainer = Value[];
export interface DictionaryParserResult {
    categories: {
        [key: number]: Category;
    };
    values: Value[];
    counts: {
        categories: number;
        values: number;
    };
}
export interface CategoryObject {
    id: number;
    name: string;
    description?: string;
    children?: number[];
    parent?: number;
}
