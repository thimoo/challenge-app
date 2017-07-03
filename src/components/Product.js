/**
 * Created by sa7bi on 01.07.17.
 */
import React, { Component} from 'react'

class Product extends Component {
    render(){
        return (
            <div className="product card">
                <div className="card-block">
                    <h3 className="card-title">{this.props.product.name}</h3>
                    <p className="card-text">{ this.props.product.description}</p>
                    <p className="card-text price">{ this.props.product.hour_amount}</p>
                    <button className="btn btn-primary" onClick={() => this.props.selectProduct(this.props.product)}>Add</button>
                </div>
            </div>
        );
    }
}
export default Product;
