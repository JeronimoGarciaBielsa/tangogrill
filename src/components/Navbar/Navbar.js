import CartWidget from "../CartWidget/CartWidget"
import Home from "../Home/Home"
import Buttons from "../Buttons/Buttons"

const Navbar = () => {
    return (
    <nav className="navbar">
        <Home/>
        <Buttons nombre="Parrillas"/>
        <Buttons nombre="Cuchillos"/>
        <h1 className="logo">TG</h1>  {/* Esto será remplazado por un Logo  */}
        <Buttons nombre="Tablas"/>
        <Buttons nombre="Accesorios"/>
        <CartWidget/>
    </nav>
    )
}

export default Navbar