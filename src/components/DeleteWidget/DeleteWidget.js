import deleteImg from '../../assets/delete-button.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const DeleteWidget = ({id}) => {

    const { removeItem } = useContext(CartContext) 

    return(
        <img onClick={() => removeItem(id)} src={deleteImg} alt="Eliminar" />
    )
}

export default DeleteWidget