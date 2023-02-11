import TG from '../../assets/tangogrill.png'
import Buttons from "../Buttons/Buttons"

const Footer = () => {

    return(
        <div className="footer">
            <img className="tg" src={TG} alt="TangoGrill" />
            <div className="botones">
                <div>
                    <Buttons nombre='Parrillas'/>
                    <Buttons nombre='Cuchillos'/>
                    <Buttons nombre='Tablas'/>
                    <Buttons nombre='Accesorios'/>
                </div>
                <p>© 2023 TangoGrill</p>
            </div>
            <img className="tg" src={TG} alt="TangoGrill" />
        </div>
    )
}

export default Footer