import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { getProductById } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"
import { useTitle } from '../../hooks/useTitle'

const ItemDetailContainer = () => {
    
    const {id} = useParams() 

    useTitle('Detalles del producto', [])

    const getProductWithId = () => getProductById(id) 

    const { data: product, error, loading } = useAsync(getProductWithId, [])

    if(loading){
        return (
            <div className="itemListContainer loading">
                <Loading/>
            </div>
        )
    }

    if(error) {
        return (
            <div className="itemDetailContainer">
                <h1 className='tituloProductos'>Hubo un error al cargar el producto</h1>
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