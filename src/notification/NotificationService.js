import { useState, createContext } from "react";

const Notification = ( {message} ) => {

    if(!message){
        return null
    }

    return(
        <div className='notification'>
            {message}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const [message, setMessage] = useState('')

    const setNotification = (message) => {

        setMessage(message)
    
        setTimeout(() => {
            setMessage('')
        }, 3000);
    }

    return(
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} />
            {children}
        </NotificationContext.Provider>
    )
}