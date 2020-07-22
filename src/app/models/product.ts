export class Product {
    public id: number
    public code: string
    public name: string
    public imageUrl: string
    public price: number
    public rating: string
    public available: boolean
    constructor(code: string, name: string, imageUrl: string, price: number, rating: string, available: boolean) {
        this.code = code
        this.name = name
        this.imageUrl = imageUrl
        this.price = price
        this.rating = rating
        this.available = available
    }

}
