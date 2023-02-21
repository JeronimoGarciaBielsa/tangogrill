import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import Loading from "../Loading/Loading"
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from "../../services/firebase/firestore/products"
import { useTitle } from "../../hooks/useTitle"

const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams()
    
    const tituloPestaña = !categoryId ? 'Todos los productos' : categoryId.charAt(0).toUpperCase().concat(categoryId.substring(1,categoryId.length))

    useTitle(tituloPestaña, [categoryId])
    
    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if (loading){
        return (
            <div className="itemListContainer loading">
                <Loading/>
            </div>
        )
    }

    if(error) {
        return (
            <div className="itemDetailContainer">
                <h1 className='tituloProductos'>Hubo un error al cargar los productos</h1>
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