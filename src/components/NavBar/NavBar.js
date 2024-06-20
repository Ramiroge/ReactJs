import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Get Real Chocolates</h3>
            </Link>
            <div className='Categorias'>
                <NavLink to={`/categoria/Amargos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Amargos</NavLink>
                <NavLink to={`/categoria/Tradicionales`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Con Leche</NavLink>
                <NavLink to={`/categoria/Veganos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Veganos</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar