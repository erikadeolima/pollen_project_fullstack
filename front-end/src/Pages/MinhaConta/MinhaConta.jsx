import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MinhaConta.css';
import Line from '../../Components/Line/Line';
import storage from '../../Context/Context';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Input from '../../Components/Input/Input';
import Table from '../../Components/Table/Table';

function MinhaConta({ history }) {
    const [pollenBalanceValue, setPollenBalance] = useState(0);
    const { getUserInfo } = useContext(storage);

    let navigate = useNavigate();

    useEffect(() => {
        const userInfo = getUserInfo();
        console.log(userInfo)
        const { pollenBalance } = userInfo;
        setPollenBalance(pollenBalance);
    }, [pollenBalanceValue, setPollenBalance]);

    useEffect(() => {
        const user = getUserInfo();
        if (user) {
            navigate('/myaccount');
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
            <Table
                page="minha_conta"
            />
            <div className='transfira'>
                <p className='tituloTransfira'>
                    Não vai usar seus pollens? Transfira para outra pessoa! </p>
                <br />
            </div>
            <div className='transfer-data'>
                <div className='emailPresente'>
                    <label htmlFor="emailPresente">Digite o e-mail da pessoa que vai receber os pollens:</label>
                    <Input
                        type="e-mail" name="emailPresente" id="emailPresente"
                    />
                </div>
                <div className='polensEnviar'>
                    <label htmlFor="quantidadePólens">Quantos pollens deseja enviar?</label>
                    <Input
                        type="number" name="quantidadePólens" id="quantidadePólens"
                    />
                </div>

                <div className='menssagem-texto'>
                    <label htmlFor="mensagem">Deixe uma mensagem de carinho!</label>
                    <Input
                        type="textarea" name="mensagem" id="message"
                    />
                </div>
                <div className='btn-enviar'>
                    <PrimaryButton
                        title="minha_conta"
                        btn="Enviar" />
                </div>
            </div>
        </div>
    )
};


export default MinhaConta;
