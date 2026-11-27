import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {

    static async getProducts(){
        const response = await fetch(this.getURL('/products'))
        return response.json();
    }

    static async getProductsById(id:number){
        const response = await fetch(this.getURL(`/products/${id}`))
        return response.json();
    }
}