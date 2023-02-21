import { db } from "../firebaseConfig"
import { collection, where, query, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"

export const createAndUploadOrderOnFirestore = ( cart, clearCart, dataOrder ) => {
    return new Promise((resolve, reject) => {
        
        const batch = writeBatch(db)

        const ids = cart.map( prod => prod.id)

        const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

        getDocs(productsRef).then( response => {

            const productsAddedToCartFromFirestore = response

            const { docs } = productsAddedToCartFromFirestore

            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
    
            })

            if(outOfStock.length === 0) {
               
                batch.commit()

                const orderRef = collection(db, 'orders')

                const getOrderAddedId = async () => {
                    
                    const orderAdded = await addDoc(orderRef, dataOrder)

                    const { id } = orderAdded

                    return id
                }

                const orderId = getOrderAddedId()

                resolve(orderId)
                        
                clearCart()

            }else{
                console.error('Hay productos fuera de stock')
            }

        }).catch( error => {
            reject(error)
        })
        
    })
}
