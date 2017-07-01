/**
 * Created by sa7bi on 01.07.17.
 */
import React, { Component} from 'react'
import Axios from 'axios';

const Product = (props) => {
    "use strict";
    return (
        <div className="card">
            <div className="card-block">
                <h3 className="card-title">{props.name}</h3>
                <p className="card-text">{ props.description}</p>
                <a className="btn btn-primary">Add</a>
            </div>
        </div>
    );
}

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            'products': []
        }
    }
    render(){
        return(
            <div className="col-md-4">
                <h2>List of products</h2>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {
                            this.state.products.map(product => <Product key={product.id} {...product}/>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
    componentDidMount(){
        Axios.get('https://challenge.thimoo.ch/api/products').then(response => {
            this.setState({
                'products': response.data
            })
            console.dir(response.data)
        }).catch(function (error) {
            console.error(error)
        })
    }
}
export default Products;
