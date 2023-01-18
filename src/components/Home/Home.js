import ImgHome from '../../assets/casa.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
            <img onClick={() => navigate('/')} className="icono" src={ImgHome} alt="Home" />
        </div>
    )
}

export default Home