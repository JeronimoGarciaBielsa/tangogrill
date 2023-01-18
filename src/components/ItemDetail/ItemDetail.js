import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'

const ItemDetail = ( {id, name, price, stock, img, description} ) => {

    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))
    }

    return(
        <div className="itemDetail">
            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>€ {price}</p>
                <p>stock: {stock}</p>
            </div>
            <ItemCount stock={stock} onConfirm={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail