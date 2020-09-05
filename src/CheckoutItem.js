import React from 'react';
import './CheckoutItem.css';
import { useStateValue } from './StateProvider';

function CheckoutItem({ id, name, brand, image, rating, price }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        const action = {
            type: "REMOVE_FROM_BASKET",
            id
        }

        dispatch(action);

    }
    return (
        <div className="checkoutItem">
            <div className="checkoutItem__image__container">
                <img className="checkoutItem__image" src={image} />
            </div>
            <div className="checkoutItem__details__container">
                <p className="checkout__item__name">{name}</p>
                <button className="checkoutItem__remove__item" onClick={removeFromBasket}>Remove Item</button>
            </div>
            <div className="checkoutItem__price">$ {price}</div>
        </div>
    )
}

export default CheckoutItem;
