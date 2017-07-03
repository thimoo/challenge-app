import React, {Component} from 'react';
import Navbar from './components/navbar'
import Products from './components/products'
import Form from './components/Form'
import './index.css';
import Store from './store'
window.storage = new Store()

class App extends Component {
    state = {
        orders : [],
        offer : '',
        client : '',
    }
    selectProduct = (clickedProduct) =>{
        let order = this.state.orders.find(order => order.identifier === clickedProduct.id)
        if (order) {
            let orders = this.state.orders
            let index = orders.indexOf(order)

            order.qte += 1
            order.price = clickedProduct.hour_amount * order.qte
            orders[index] = order
            this.setState(prev => {
                orders: orders
            })
        }else {
            this.setState(prevState => ({
                orders: prevState.orders.concat({
                    identifier: clickedProduct.id,
                    product : clickedProduct,
                    qte: 1,
                    price: clickedProduct.hour_amount * 1
                })
            }))
        }
    }

    updateOffer = (newValue) => {
        this.setState(prev => ({
            offer: newValue
        }))
    }
    updateClient = (newValue) => {
        this.setState(prev => ({
            client: newValue
        }))
    }
    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Form selectedProducts={this.state.orders}
                                  updateOffer={this.updateOffer}
                                  offer={this.state.offer}
                                  client={this.state.client}
                                  updateClient={this.updateClient}/>
                        </div>
                        <Products selectProduct={this.selectProduct}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
