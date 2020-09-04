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

function Header() {
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
                <div className="header__option">
                    <span className="header__option-first">Hello,</span>
                    <span className="header__option-second">Himanshu</span>
                </div>
                <div className="header__option">
                    <span className="header__option-first">Returns</span>
                    <span className="header__option-second">& order</span>
                </div>
                <Link to="/checkout">
                <div className="header__option__cart">
                    <span><ShoppingCartIcon className="header__option__cart-first"/></span>
                    <span className="header__option__cart-second">0</span>
                </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
