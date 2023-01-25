import { getProductById } from "../../asyncMock"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const {id} = useParams() 
    
    console.log(id)
    useEffect( () => {
        setLoading(true)
        getProductById(id)
            .then(product => {
            setProduct(product)
        })
            .catch( error => {
                console.log(error)
            })
            .finally( () => {
            setLoading(false)
        })
    }, [id])

    if(loading){
        return (
            <div className="itemListContainer loading">
                <Loading/>
            </div>
        )
    }

    return(
        <div className="itemDetailContainer">
            <h1 className="tituloProductos">Detalle de Producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer