import { Link } from "react-router-dom";
import "./Home.css"


const Home = () => {
    return (
    <div className="home-container">
        <h1 className="title">Bienvenido CryptoMarket</h1>
        <p className="subtitle">Conoce las 100 Criptos mas usadas</p>
        <Link to="/criptomonedas" className="link">Ver Criptomonedas</Link>   
    
    
    </div>
  )
}

export default Home;