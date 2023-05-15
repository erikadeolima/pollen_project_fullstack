import React, { useContext, useEffect, useState } from 'react';
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
    const { setTotal } = useContext(storage);

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

    let componnent;
    if (modoEntrega === "em_casa") {
        componnent = <FormEntrega />
    } else {
        componnent = <div></div>
    };

    return (
        <div className=' mainContainer'>
            {!cartItens ?
                <div>
                    <div>Não Há itens no carrinho</div>
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
                    {componnent}
                    <PrimaryButton
                        btn="Finalizar"
                        title="meu_carrinho"
                    />
                </div>
            }
        </div >
    )

};

export default MeuCarrinho;