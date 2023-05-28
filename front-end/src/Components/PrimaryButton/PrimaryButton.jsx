import React, { useState, useContext } from "react";
import './PrimaryButton.css';
import { Link } from "react-router-dom";
import { requestUpdate } from '../../api/requests';
import storage from "../../Context/Context";


function PrimaryButton(props) {
    const [error, setError] = useState(false);
    const { pollenBalanceValue, setPollenBalance } = useContext(storage);

    const updatePollensBalance = (pollenBalance) => {
        requestUpdate('/myaccount', { pollenBalance })
            .then((data) => setPollenBalance(data))
            .catch(() => setError(true));
    };

    return (
        <div className="primaryButton">
            <Link><button
                onClick={() => {
                    if (props.title === "minha_conta") {
                        const { pollensDonation, receivingEmail, messageDonation } = props.donationInfo;
                        const newPollenBalance = pollenBalanceValue - pollensDonation;
                        updatePollensBalance(newPollenBalance);
                    }
                    if (props.title === "meu_carrinho") {
                        alert('Seu pedido estará disponível em até 5 dias.')
                    }
                }}>{props.btn}</button></Link>
        </div>
    );
}

export default PrimaryButton;