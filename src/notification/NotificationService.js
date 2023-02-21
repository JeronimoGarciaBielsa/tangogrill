import { useState, createContext } from "react";

const Notification = ( {message, typeMessage} ) => {

    const notificationClassName = typeMessage === 'error' ? 'notificationError' : 'notification'

    if(!message){
        return null
    }

    return(
        <div className={notificationClassName}>
            {message}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const [message, setMessage] = useState('')
    const [typeMessage, setTypeMessage] = useState('success')

    const setNotification = (message, typeMessage) => {

        setMessage(message)

        setTypeMessage(typeMessage)
       
        setTimeout(() => {
            setMessage('')
        }, 3000);
    }

    return(
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} typeMessage={typeMessage}/>
            {children}
        </NotificationContext.Provider>
    )
}