import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'

const ItemDetail = ( {id, name, price, stock, img, description} ) => {

    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (qty) => {
        setQuantity(qty)
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
                    <h1>Terminar Compra</h1>
                ) :
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                
            }
        </div>
    )
}

export default ItemDetail