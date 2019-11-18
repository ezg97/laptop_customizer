import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem'

class Cart extends Component {
    
    render() {

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
      
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartItem
                selected={this.props.selected}
                USCFormat={this.props.USCFormat}
                />
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.USCFormat.format(total)}
                </div>
                </div>
          </section>
        ); 
    }
}

export default Cart;