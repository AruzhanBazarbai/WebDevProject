export interface AuthToken{
    token:string;
}
export interface Product{
    id: number;
    name: string;
    description: string;
    cost: number;
    category: number;
    img: string;
    category_id: number;
}