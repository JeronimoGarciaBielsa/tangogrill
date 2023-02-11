import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(prod => id === prod.id)

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)){

            setCart(prev => [...prev, productToAdd])

        }else {
            console.error('Producto ya agregado')
        }

    }

    const getTotalQuantity = () => {
        
        let accu = 0

        cart.forEach( prod => {

            accu += prod.quantity
        })

        return accu

    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{addItem, isInCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )

}