/**
 * Created by sa7bi on 01.07.17.
 */
import React, {Component} from 'react'

class Order extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.order.product.name}</td>
                <td>{this.props.order.qte}</td>
                <td>{this.props.order.price}</td>
            </tr>
        );
    }
}
export default Order;
