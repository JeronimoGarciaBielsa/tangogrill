import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { NotificationContext } from "../../notification/NotificationService"
import Loading from "../Loading/Loading"
import Form from "../Form/Form"
import { createAndUploadOrderOnFirestore } from "../../services/firebase/firestore/orders"

const Checkout = () => {
   
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)
    const [orderId, setOrderId] = useState()

    const createOrder = async (dataClient) => {

        setLoading(true)

        const { name, lastname, email, phone } = dataClient

        try {

            const dataOrder = {
                buyer: {
                    name,
                    lastname,
                    email,
                    phone
                },
                items: cart,
                total
            }

            const orderId = await createAndUploadOrderOnFirestore(cart, clearCart, dataOrder)

            setOrderId(orderId)

            setNotification('Su orden de compra ha sido realizada con éxito', 'success')

        }catch(error){
            console.error(error)
        }finally{
            setLoading(false)
        }
    
    }

    if(loading){
        return (
            <div className="itemListContainer loading">
                <Loading/>
            </div>
        )
    }

    if(orderId){
        return(
            <div className="orderIdContainer">
                <h3 className="tituloProductos">Orden Ejecutada</h3>
                <p>Gracias por la confianza y bienvenido a la familia de TangoGrill.<br/>Dentro de poco estaremos en contacto un usted</p>
                <p>El <strong>Id</strong> de su compra es: <strong>{orderId}</strong></p>
                <button className="btn-checkout" onClick={() => navigate('/')}>Ir al Home</button>
            </div>
        )
    }
    return(
        <div className="checkout">
            <Form onCreateOrder={createOrder}/>
        </div>
    )
}

export default Checkout