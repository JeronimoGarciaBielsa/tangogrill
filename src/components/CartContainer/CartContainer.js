import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import CartItemList from "../CartItemList/CartItemList"

const CartContainer = () => {

    const { cart, total, totalQuantity, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    return(
        <div className="cartContainer">
            <h1 className="tituloProductos">Carrito de compras</h1>
            <CartItemList cart={cart}/>
            {
                cart.length === 0 ? (
                    <button className="btn-checkout" onClick={() => navigate('/')}>Ir al Home</button>
                ) : 
                    <>
                        <div className="totalContainer">
                            <h4 className="total">Total = € {total}</h4>
                            <h4 className="total totalQuantity">Cantidad total de productos =  {totalQuantity}</h4>
                        </div>
                        <div className="buttonsContainer">
                            <button className="btn-checkout" onClick={() => navigate('/checkout')}>Checkout</button>
                            <button className="btn-checkout" onClick={() => clearCart()}>Vaciar Carrito</button>
                        </div>
                    </>
                
            }
        </div>
    )
}

export default CartContainer