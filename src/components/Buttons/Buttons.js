import { useNavigate } from 'react-router-dom'

const Buttons = ({nombre}) => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(`/category/${nombre.toLowerCase()}`)} className="button btn">{nombre}</button>
    )
}

export default Buttons