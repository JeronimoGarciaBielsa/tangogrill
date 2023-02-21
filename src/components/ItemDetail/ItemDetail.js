import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../notification/NotificationService"
import { useNavigate } from "react-router-dom"

const ItemDetail = ( {id, name, price, stock, img, description} ) => {

    const navigate = useNavigate()

    const { addItem, isInCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        
        addItem({id, name, price, quantity, img})
        setNotification(`Agregó al carrito ${quantity} ${name}`)
    }

    return(
        <div className="itemDetail">
            <img src={img} alt={name} />
            <div className="itemDetailDescription">
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>€ {price}</h3>
                <p>stock: {stock}</p>
            </div>
            {
                isInCart(id) ? (
                    <button className="btn-checkout" onClick={() => navigate('/cart')}>Ir al Carrito</button>
                ) :
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                
            }
        </div>
    )
}

export default ItemDetail