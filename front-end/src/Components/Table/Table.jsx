import React, { useContext, useEffect } from "react";
import './Table.css';
import storage from "../../Context/Context";

function Table(props) {
    const { orderHistory, getOrderHistory } = useContext(storage);

    useEffect(() => {
        getOrderHistory();
    }, [orderHistory]);

    if (props.page === "minha_conta") {
        return (
            <div>
                <table className='table_account'>
                    <thead>
                        <tr>
                            <td><strong>Data do Pedido</strong></td>
                            <td><strong>Produtos</strong></td>
                            <td><strong>Total do Pedido</strong></td>
                            <td><strong>Status do Pedido</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistory.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.dateOrder}</td>
                                    {order.products
                                        .map((product) => {
                                            return (
                                                <p key={product.id}>({product.quantity}){product.name}</p>)
                                        })}
                                    <td>{order.total}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;