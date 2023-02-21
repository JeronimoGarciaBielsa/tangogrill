import ImgCartWidget from '../../assets/carrito.png'
import { useNavigate } from 'react-router-dom'

const CartWidget = ({totalQuantity}) => {

    const navigate = useNavigate()

    return (
        <div className='cartWidget'>
            <img onClick={() => navigate('/cart')} className="icono" src={ImgCartWidget} alt="Carrito de compras" />
            <p>{totalQuantity}</p>
        </div>
    )
}

export default CartWidget