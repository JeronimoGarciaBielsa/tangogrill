import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../notification/NotificationService"

const ItemDetail = ( {id, name, price, stock, img, description} ) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        
        setQuantity(parseInt(quantity))
        
        addItem({id, name, price, quantity})
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
                quantity > 0 ? (
                    <h3>Terminar Compra</h3>
                ) :
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                
            }
        </div>
    )
}

export default ItemDetail