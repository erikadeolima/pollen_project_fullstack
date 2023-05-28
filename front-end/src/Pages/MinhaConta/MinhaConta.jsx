import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MinhaConta.css';
import Line from '../../Components/Line/Line';
import storage from '../../Context/Context';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Table from '../../Components/Table/Table';

function MinhaConta() {
    const [receivingEmail, setReceivingEmail] = useState('');
    const [pollensDonation, setPollensDonation] = useState(0);
    const [messageDonation, setMessageDonation] = useState('');
    const { getUserInfo, getOrderHistory, ordersHistory, pollenBalanceValue, setPollenBalance } = useContext(storage);


    let navigate = useNavigate();

    useEffect(() => {
        const userInfo = getUserInfo();
        if (userInfo) {
            navigate('/myaccount');
            const { pollenBalance } = userInfo;
            setPollenBalance(pollenBalance);
            getOrderHistory();
        } else {
            navigate('/');
        }
    }, []);

    return (
        <div className='mainContainer minha_conta'>
            <div className='titulo'>
                <h3 className='tituloPolens'>
                    {`Você tem ${pollenBalanceValue} pollens acumulados.`}
                </h3>
            </div>
            <Line />
            <br />
            <p className='tituloPedidos'>
                Veja aqui o seu histórico de pedidos
            </p>
            <br />
            {ordersHistory && ordersHistory.length > 0 ? <Table
                page="minha_conta"
                orderHistory={ordersHistory}
            /> : <div></div>}
            <div className='transfira'>
                <p className='tituloTransfira'>
                    Não vai usar seus pollens? Transfira para outra pessoa! </p>
                <br />
            </div>
            <div className='transfer-data'>
                <div className='emailPresente'>
                    <label htmlFor="emailPresente">Digite o e-mail da pessoa que vai receber os pollens:</label>
                    <input
                        className="inputFormsSm"
                        type="e-mail"
                        name="emailPresente"
                        id="emailPresente"
                        onChange={(e) => setReceivingEmail(e.target.value)}
                        value={receivingEmail}
                    />
                </div>
                <div className='polensEnviar'>
                    <label htmlFor="quantidadePólens">Quantos pollens deseja enviar?</label>
                    <input
                        className="inputFormsSm"
                        type="number"
                        name="quantidadePólens"
                        id="quantidadePólens"
                        onChange={(e) => setPollensDonation(e.target.value)}
                        value={pollensDonation}
                    />
                </div>

                <div className='menssagem-texto'>
                    <label htmlFor="mensagem">Deixe uma mensagem de carinho!</label>
                    <textarea
                        className="inputFormsSm"
                        type="textarea"
                        name="mensagem"
                        id="message"
                        onChange={(e) => setMessageDonation(e.target.value)}
                        value={messageDonation}
                    />
                </div>
                <div className='btn-enviar'>
                    <PrimaryButton
                        title="minha_conta"
                        btn="Enviar"
                        donationInfo={{ pollensDonation, receivingEmail, messageDonation }}
                    />
                </div>
            </div>
        </div >
    )
};


export default MinhaConta;
