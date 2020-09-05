import React from 'react';
import './Checkout.css';
import CheckoutItem from './CheckoutItem';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className="checkout">
            <p className="checkout__heading">Shopping Cart</p>
            <div className="checkout__wrapper">
                <div className="checkout__items__list">
                    {basket.length === 0 ?
                        "Your basket is empty. To buy items, click 'ADD ITEM' next to the item."
                        : basket.map(item => (
                            <CheckoutItem
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                                brand={item.brand} />
                        ))}
                </div>
                <div className="checkout__subtotalBox">
                    <div className="checkout__subtotal">
                        <span>Subtotal:</span>
                        <span className="checkout__total"> $ {basket ?.length === 0 ? 0 : basket ?.reduce((amount, item) => amount + item.price, 0)}</span>
                        <div className="checkout__gift__text">This order contains a gift</div>
                    </div>
                    <button className="checkout__buy__button">Proceed to Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
