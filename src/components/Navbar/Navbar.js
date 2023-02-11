import { useContext } from "react"
import CartWidget from "../CartWidget/CartWidget"
import Home from "../Home/Home"
import Buttons from "../Buttons/Buttons"
import { CartContext } from "../../context/CartContext"

const Navbar = () => {

const { totalQuantity } = useContext(CartContext)

    return (
    <nav className="navbar">
        <Home/>
        <Buttons nombre="Parrillas"/>
        <Buttons nombre="Cuchillos"/>
        <h1 className="logo">TG</h1>  {/* Esto será remplazado por un Logo  */}
        <Buttons nombre="Tablas"/>
        <Buttons nombre="Accesorios"/>
        <CartWidget totalQuantity={totalQuantity}/> 
    </nav>
    )
}

export default Navbar