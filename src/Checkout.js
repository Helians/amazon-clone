import React from 'react';
import './Checkout.css';
import CheckoutItem from './CheckoutItem';

function Checkout() {
    return (
        <div className="checkout">
            <p className="checkout__heading">Shopping Cart</p>
            <div className="checkout__wrapper">
                <div className="checkout__items__list">
                    <CheckoutItem
                        id="1"
                        name="Samsung Galaxy M31 (Space Black, 6GB RAM, 64GB Storage)"
                        price={250}
                        image="https://www.notebookcheck.net/fileadmin/Notebooks/Samsung/Galaxy_A50/4_zu_3_Samsung_Galaxy_A50.png"
                        rating={5}
                        brand="Samsung" />
                </div>
                <div className="checkout__subtotalBox">
                    <div className="checkout__subtotal">
                        <span>Subtotal:</span>
                        <span className="checkout__total"> $ 0</span>
                        <div className="checkout__gift__text">This order contains a gift</div>
                    </div>
                    <button className="checkout__buy__button">Proceed to Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
