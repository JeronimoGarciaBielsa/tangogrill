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

    const removeItem = (id) => {
        
        const cartUpdated = cart.filter(prod => prod.id !== id)

        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        
        let accu = 0

        cart.forEach( prod => {

            accu += prod.quantity
        })

        return accu

    }

    const getTotal = () => {

        let total = 0

        cart.forEach( prod => {
            total += prod.quantity * prod.price
        })

        return total
    }

    const totalQuantity = getTotalQuantity()

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, isInCart, totalQuantity, total, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}