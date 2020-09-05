import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    // will return state,dispatch
    const [{ basket, user }] = useStateValue();

    const login = () => {
        auth.signOut();
    }
    
    return (
        <nav className="header">
            <div className="header__left">
                <Link to="/"><span className="header__navbar__sprit header__logo"></span></Link>
            </div>
            <div className="header__searchbar__container">
                <input className="header__searchbar" />
                <button className="header__search__button"><SearchIcon /></button>
            </div>
            <div className="header__right">
                <Link className="header__option__link" to="/login" onClick={login}>
                    <div className="header__option">
                        <span className="header__option-first">Hello,{user ? user.email : ""}</span>
                        <span className="header__option-second">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__option-first">Returns</span>
                    <span className="header__option-second">& order</span>
                </div>
                <Link className="header__option__link" to="/checkout">
                    <div className="header__option__cart">
                        <span><ShoppingCartIcon className="header__option__cart-first" /></span>
                        <span className="header__option__cart-second">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
