export interface product {
    id: number,
    created_at: string,
    name: string,
    price: number,
    description: string,
    user_id: string,
    category: string,
    tag: string,
    vector: number[],
}