import ImgCartWidget from '../../assets/carrito.png'

const CartWidget = ({totalQuantity}) => {

    return (
        <div className='cartWidget'>
            <img className="icono" src={ImgCartWidget} alt="Carrito de compras" />
            <p>{totalQuantity}</p>
        </div>
    )
}

export default CartWidget