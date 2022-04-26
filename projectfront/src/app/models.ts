export interface AuthToken{
    token:string;
}
export interface Product{
    id: number;
    name: string;
    description: string;
    cost: number;
    category: object;
}