import CartItem from "../CartItem/CartItem"

const CartItemList = ({ cart }) => {

    return(
        <div className="cartItemList">
        {
            cart.length === 0 ? (
                <h2 className="emptyCart">El carrito esta vacío</h2>
            ) :

            cart.map( prod => <CartItem key={prod.id} {...prod}/>)
        }
        </div>
    )
}

export default CartItemList