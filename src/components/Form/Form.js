import { useContext } from "react";
import { NotificationContext } from "../../notification/NotificationService";

const Form = ({ onCreateOrder }) => {

    const setNotification = useContext(NotificationContext)

    const inputsValue = (e) => {

        e.preventDefault();

        const inputName = document.querySelector('#name')
        const inputLastname = document.querySelector('#lastname')
        const inputEmail = document.querySelector('#email')
        const inputPhone = document.querySelector('#phone')

        if(inputName.value === '' || inputLastname.value === '' || inputEmail.value === '' || inputPhone.value === ''){
            setNotification('Debes completar todos los campos', 'error')
            console.log('Debes completar todos los campos')
        }else{
            const dataClient = {name: inputName.value, lastname: inputLastname.value, email: inputEmail.value, phone: inputPhone.value}
            onCreateOrder(dataClient)
        }

    }
    
    return (
        <form>
                <h2 className="tituloProductos">Ingresa tus datos</h2>
                <div>
                    <label for='name'>Nombre</label>
                    <input type="text" id="name"/><br/>
                </div>
                <div>
                    <label for='last-name'>Apellido</label>
                    <input type="text" id="lastname"/><br/>
                </div>
                <div>
                    <label for='email'>Email</label>
                    <input type="email" id="email"/><br/>
                </div>
                <div>
                    <label for='phone'>Teléfono</label>
                    <input type="number" id="phone"/><br/>
                </div>
                <button type="submit" className="btn-checkout" onClick={inputsValue}>Generar Orden</button>
        </form>
    )
}

export default Form