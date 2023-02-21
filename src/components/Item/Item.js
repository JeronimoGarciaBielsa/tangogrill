import { useNavigate } from 'react-router-dom'

const Item = ( {id, name, img, price, stock} ) => {

    const navigate = useNavigate()

    return(
        <div onClick={ () => navigate(`/detail/${id}`)} className="item">
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <p>€ {price}</p>
            <p><span>stock: </span>{stock}</p>
            <button onClick={ () => navigate(`/detail/${id}`)} className="item-button">Ver detalles</button>
        </div>
    )
}

export default Item