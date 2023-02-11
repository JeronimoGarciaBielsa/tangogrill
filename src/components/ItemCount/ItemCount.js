import { useState } from 'react'

const ItemCount = ({ initial = 1, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1){
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    return (
        <div className='itemCount'>
            <h3>{count}</h3>
            <div>
                <button className='button-6' onClick={increment}>+</button>
                <button className='button-6' onClick={decrement}>-</button>
            </div>
            <button className='button-6' onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount