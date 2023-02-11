import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import Loading from "../Loading/Loading"

const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams() 

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        setLoading(true)

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        })
        .catch( () => console.log('error'))
        .finally( () => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading){
        return (
            <div className="itemListContainer loading">
                <Loading/>
            </div>
        )
    }

    return (
        <div className="itemListContainer">
            <h1 className="tituloProductos">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer