/**
 * Created by sa7bi on 01.07.17.
 */
import React, {Component} from 'react'
import Order from './order'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            offer : '',
            client: '',
            products: []
        }
    }

    render() {
        return (
            <div>
                <form className="form card">
                    <h1 className="card-header">New offer</h1>
                    <div className="card-body container">
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Offer</label>
                            <div className="col-10">
                                <input type="text" className="form-control form-control-lg"
                                       placeholder="Give it a name"
                                       value={this.props.offer}
                                       onChange={ event => this.props.updateOffer(event.target.value)}
                                       />
                            </div>

                        </div>
                        <hr/>
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Client</label>
                            <div className="col-10">
                                <input type="text" className="form-control form-control-lg"
                                       placeholder="Client's name"
                                       value={this.props.client}
                                       onChange={ event => this.props.updateClient(event.target.value)}/>
                            </div>
                        </div>
                        <hr/>
                        <table className="table">
                            <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.selectedProducts.map(order =>
                                    <Order key={order.identifier} order={order}/>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        )
    }
}
export default Form;
