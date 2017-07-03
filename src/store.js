/**
 * Created by sa7bi on 01.07.17.
 */

class Store{
    constructor(){
        this.offer = 'A new offer'
        this.client = 'Sahbi'
        this.orders = []
    }

    addProduct(product,quantity){
        let order = {product: product, qte: quantity}
        this.orders.push(order)
    }
}

export default Store;
