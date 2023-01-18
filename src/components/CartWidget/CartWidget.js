import ImgCartWidget from '../../assets/carrito.png'

const CartWidget = () => {
    return (
        <div style={{ fontSize: '1.3rem'}}>
            <img className="icono" src={ImgCartWidget} alt="Carrito de compras" />
            0
        </div>
    )
}

export default CartWidget