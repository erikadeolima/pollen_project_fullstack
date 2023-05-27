import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Logo/logo-polen.png';
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
    return (
        <header>
            <div>
                <Link to="/home">
                    <img className="logo" src={logo} alt="Logo do site. Uma moeda amarela com a letra P e algumas abelhas" />
                </Link>
                <Link to="/home" className='removeStyle'>
                    <h1 className='nameSiteHeader'>PollenPoints</h1>
                </Link>
            </div>
            <div className='menu-itens'>
                <Link to="/about" className='removeStyle'>
                    <p>Sobre Nós</p>
                </Link>
                <Link to="/myaccount" className='removeStyle'>
                    <p>Minha Conta</p>
                </Link>
                <Link to="/checkout" className='removeStyle'>
                    <p>Meu Carrinho</p>
                </Link>
                <Link to="/"
                    onClick={() => localStorage.removeItem("userInfo")}
                    className='removeStyle'>
                    <p>Logout</p>
                </Link>
            </div>
        </header>
    );
}

export default Header;