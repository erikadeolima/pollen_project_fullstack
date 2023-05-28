import React, { useState } from 'react';
import storage from './Context';
import { requestData } from '../api/requests';

function Provider({ children }) {

  const [ordersHistory, setOrdersHistory] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [pollenBalanceValue, setPollenBalance] = useState(0);

  const getUserInfo = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    return user;
  };

  const getOrderHistory = async () => {
    const data = await requestData('/myaccount')
      .then((data) => {
        return data
      });
    setOrdersHistory(data);
  };

  const getProducts = async () => {
    const products = await requestData('/home');
    setProducts(products);
  };

  const getCartItem = () => {
    const cartItens = JSON.parse(localStorage.getItem('cart'));
    return cartItens;
  };

  const saveCartItem = (item) => {
    localStorage.setItem('cart', JSON.stringify(item));
  };

  const setUserInfo = (userInfo) => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const newItem = (item) => {
    const getCartProducts = getCartItem() || [];
    const itemAlreadySave = getCartProducts.find(
      (productItem) => productItem.id === item.id,
    );
    if (getCartProducts.length === 0) {
      setCart([item]);
      return saveCartItem([item]);
    };

    if (itemAlreadySave) {
      getCartProducts.forEach((arrayItem) => {
        if (arrayItem.id === item.id) {
          arrayItem.quantity = item.quantity;
          arrayItem.subTotal = item.subTotal;
        }
      });
      setCart(getCartProducts);
      saveCartItem(getCartProducts);
    } else {
      getCartProducts.push(item);
      setCart(getCartProducts);
      saveCartItem(getCartProducts);
    }
  };



  const context = {
    ordersHistory,
    setOrdersHistory,
    products,
    total,
    setTotal,
    cart,
    setCart,
    getUserInfo,
    getOrderHistory,
    getProducts,
    getCartItem,
    saveCartItem,
    setUserInfo,
    newItem,
    setPollenBalance,
    pollenBalanceValue
  };

  return (
    <storage.Provider
      value={context}
    >
      {children}
    </storage.Provider>
  );
};

export default Provider;