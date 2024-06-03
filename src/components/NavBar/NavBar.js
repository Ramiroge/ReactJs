import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>nombre</h3>
            <div>
                <button>Amargos</button>
                <button>Con Leche</button>
                <button>Veganos</button>
                <button>Sin Azucar</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar