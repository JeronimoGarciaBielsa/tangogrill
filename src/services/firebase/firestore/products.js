import { getDocs, getDoc, doc, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'

export const getProducts = (categoryId) => {
    return new Promise( (resolve , reject) => {

        const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId)) 
        : collection(db, 'products')

        getDocs(collectionRef).then( response => {
            const productsAdapted = response.docs.map( doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
                
            })
            resolve(productsAdapted)
            
        }).catch( error => {
            reject(error)
        })

    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {

        const docRef = doc(db, 'products', id)

        getDoc(docRef).then( doc => {
            const data = doc.data()
            const productAdapted = {id: doc.id, ...data}
            resolve(productAdapted)
        }).catch( error => {
            reject(error)
        })

    })
}