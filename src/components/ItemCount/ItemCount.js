import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(prev => prev + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(prev => prev - 1)
        }     
    }

    return(
        <div>          
            <div>
                <h4>{quantity}</h4>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default ItemCount