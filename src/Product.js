import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import { initialState } from './reducer';

function Product({ id, name, brand, price, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        const action = {
            type: "ADD_TO_BASKET",
            item: {
                id,
                name,
                brand,
                price,
                image,
                rating
            }
        }
        dispatch(action);
    }

    return (
        <div className="product">
            <div className="product__image__container">
                <img className="product__image" src={image} />
            </div>
            <div className="product__details">
                <p className="product__name">{name}</p>
                <span className="product__brand__name">by {brand}</span>
                <p className="product__price">$ {price}</p>
                <div className="product__rating">
                    {Array(rating).fill(0).map(r => (
                        <StarIcon className="product__rating__star" />
                    ))}
                </div>
            </div>
            <div className="product__button__wrapper">
                <button className="product__button" onClick={addToBasket}>Add Item</button>
            </div>
        </div>
    )
}

export default Product;
