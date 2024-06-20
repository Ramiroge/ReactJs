import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    isInCart: () => {},
    totalQuantity: 0,
    total: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            let quantity = 0;
            let totalPrice = 0;

            cart.forEach(item => {
                quantity += item.quantity;
                totalPrice += item.quantity * item.precio;
            });

            setTotalQuantity(quantity);
            setTotal(totalPrice);
        };

        calculateTotal();
    }, [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('El producto ya fue agregado');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};
