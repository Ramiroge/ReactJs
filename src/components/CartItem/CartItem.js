import React from 'react';
import './CartItem.css';

const CartItem = ({ id, nombre, precio, quantity }) => {
    return (
        <div className="cart-item">
            <h4>{nombre}</h4>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
        </div>
    );
}

export default CartItem;
