/**
 * Created by sa7bi on 01.07.17.
 */
import React, { Component} from 'react'
import Axios from 'axios';
import Product from './Product'

class Products extends Component {
    state = {
        products: []
    }
    render(){
        let products = this.state.products.map(product =>
                <Product key={product.id} product={product} selectProduct={this.props.selectProduct}/>
        )
        return(
            <div className="col-md-4">
                <h2 className="text-center">List of products</h2>
                <ul className="list-group list-group-flush">
                    {products}
                </ul>
            </div>
        );
    }
    componentDidMount(){
        Axios.get('https://challenge.thimoo.ch/api/products').then(response => {
            this.setState({
                'products': response.data
            })
        }).catch(function (error) {
            console.error(error)
        })
    }
}
export default Products;
