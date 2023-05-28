import './FormEntrega.css';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useContext } from 'react';
import storage from '../../Context/Context';

function FormEntrega() {
    const { register, handleSubmit, setValue, setFocus } = useForm();
    const [loading, setLoading] = useState(false);
    const { deliveryNumber,
        setDeliveryNumber,
        setCepSearch } = useContext(storage);

    const onSubmit = (event) => {
        console.log(event);
    };

    const checkCEP = (event) => {
        const cep = event.target.value.replace(/\D/g, '');
        setLoading(true);

        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(({ data }) => {
            setCepSearch(data);
            setValue('endereco', data.logradouro);
            setValue('bairro', data.bairro)
            setValue('cidade', data.localidade);
            setValue('estado', data.uf);
            setLoading(false);
        }).catch(() => setLoading(false));
    };

    return (
        <form className='formulario-entrega' onSubmit={handleSubmit(onSubmit)}>
            <input className='inputForms' type="text" placeholder='CEP'
                {...register("cep")} onBlur={checkCEP}
            />
            <input className='inputForms' type="text" placeholder='Rua'
                {...register("endereco")}
            />
            <input className='inputForms' type="text" placeholder='Bairro'
                {...register("bairro")}
            />
            <input className='inputForms' type="text" placeholder='Número'
                onChange={(e) => {
                    setDeliveryNumber(e.target.value);
                }}
                value={deliveryNumber}
            />
            <input className='inputForms' type="text" placeholder='Complemento'
                {...register("complemento")}
            />
            <input className='inputForms' type="text" placeholder='Cidade'
                {...register("cidade")}
            />
            <input className='inputForms' type="text" placeholder='Estado'
                {...register("estado")}
            />
        </form>
    );
}
export default FormEntrega;
