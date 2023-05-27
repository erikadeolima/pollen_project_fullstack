import React from "react";
import './Table.css';

function Table({ orderHistory }) {

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
                <tbody>{orderHistory.map((order) =>
                    <tr key={order.id}>
                        <td>{new Date(order.orderDate).toLocaleDateString('en-GB')}</td>
                        {order.products
                            .map((product) => {
                                return (
                                    <p key={product.id}>({product.OrdersProducts.quantity}) - {product.name}</p>)
                            })}
                        <p></p>
                        <td>{order.totalPollens}</td>
                        <td>{order.status}</td>
                    </tr>
                )
                }</tbody>
            </table>
        </div>
    );
}

export default Table;