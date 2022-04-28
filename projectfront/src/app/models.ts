export interface AuthToken{
    token:string;
}
export interface Product{
    id: number;
    name: string;
    description: string;
    cost: number;
    img: string;
    category_id: number;
}

export interface City{
    id: number;
    name: string;
}