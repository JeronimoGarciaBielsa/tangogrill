import DeleteWidget from "../DeleteWidget/DeleteWidget"

const CartItem = ({price, id, name, quantity, img}) => {
    return(
        <div className="cartItem">
            <img src={img} alt={name} />
            <h4>Nombre: {name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: € {price}</p>
            <DeleteWidget id={id}/>
        </div>
    )
}

export default CartItem