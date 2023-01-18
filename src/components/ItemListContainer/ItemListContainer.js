import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams() 

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        setLoading(true)

        asyncFunction(categoryId).then(products => {
            setProducts(products)
            console.log(products)
        })
        .catch( () => console.log('error'))
        .finally( () => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading){
        return <h2>Cargando...</h2>
    }

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer