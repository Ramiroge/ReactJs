import './ItemDetail.css';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ nombre, cacao, leche, imagen, categoria, precio, stock, id }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, nombre, precio };
        addItem(item, quantity);
    };

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{nombre}</h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className='ItemImage' />
            </picture>
            <section>
                <p className='Info'>Categoria: {categoria}</p>
                <p className='Info'>Cacao: {cacao}</p>
                <p className='Info'>Leche: {leche}</p>
                <p className='Info'>Precio: ${precio}</p>
            </section>
            <footer className='ItemFooter'>
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar mi compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
}

export default ItemDetail;
