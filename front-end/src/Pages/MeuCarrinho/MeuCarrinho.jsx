import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MeuCarrinho.css';

import CardCartProduct from '../../Components/CardCartProduct/CardCartProduct';
import FormEntrega from '../../Components/FormEntrega/FormEntrega';
import Line from '../../Components/Line/Line';
import storage from '../../Context/Context';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

function MeuCarrinho() {
    const [modoEntrega, setModoEntrega] = useState('');
    const storageCart = JSON.parse(localStorage.getItem('cart'));
    const [cartItens, setCartItens] = useState(storageCart);
    const { total, setTotal, getUserInfo } = useContext(storage);
    const [logged, setLogged] = useState(false);

    const handleDesejaReceberEmCasaChange = (e) => {
        const value = e.target.value;
        setModoEntrega(value);
    };

    useEffect(() => {
        if (!storageCart) {
            return setTotal(0)
        }
        else {
            const totalValue = storageCart.reduce((acc, crr) => {
                const { subTotal } = crr;
                return (acc + subTotal);
            }, 0);
            setTotal(totalValue);
        }
    }, [cartItens, setTotal, storageCart]);

    useEffect(() => {
        const userInfo = getUserInfo();
        if (userInfo) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, [logged]);

    let FormEntregaComponnent;
    if (modoEntrega === "em_casa") {
        FormEntregaComponnent = <FormEntrega />
    } else {
        FormEntregaComponnent = <div></div>
    };

    return (
        <div className='mainContainer'>
            {!cartItens ?
                <div className='warning_text'>
                    <div className='empty_cart'>Não há itens no carrinho</div>
                </div>
                :
                <div>
                    <div className='photoAndTxtContainer'>
                        {cartItens.map((item) => (
                            < CardCartProduct
                                key={item.id}
                                src={item.src}
                                name={item.name}
                                pollens={item.pollens}
                                quantity={item.quantity}
                                subTotal={item.subTotal}
                            />
                        ))}
                    </div>
                    <Line />
                    {!logged ? <div>
                        <Link to="/" className='warning_text'>
                            <h1 className=''>Faça seu loggin para concluir sua compra!</h1>
                        </Link>
                    </div> : <div>
                        <div className='caixa-selecao'>
                            <h2>Envio</h2>
                            <input
                                type="radio"
                                name="envio"
                                value={"no_bees"}
                                onChange={handleDesejaReceberEmCasaChange}
                            />
                            Desejo Retirar no escritório do Bees
                            <br />
                            <input
                                type="radio"
                                name="envio"
                                value={"em_casa"}
                                onChange={handleDesejaReceberEmCasaChange}
                            />
                            Desejo Receber em Casa
                        </div>
                        {FormEntregaComponnent}
                        <PrimaryButton
                            btn={`Total: ${total} pollens   -  Finalizar`}
                            title="meu_carrinho"
                        /></div>}
                </div>
            }
        </div >
    )
};

export default MeuCarrinho;