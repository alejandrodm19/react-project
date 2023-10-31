import { Link } from "react-router-dom";
import "./Cripto.css"


const Cripto = ({
  id,
  name,
  priceUSD,
  symbol,
  changePercent24Hr,
  marketcapusd,
  volumeusd24hr,
  vwap24hr,
}) => {
  return (
    <div className="cripto">
      <h2>{name}</h2>
      <div className="info">
        <p>
          <span className="label">Precio: </span>
          {parseFloat(priceUSD).toFixed(4)}
        </p>
        <p>
          <span className="label">Codigo: </span>
          {symbol}
        </p>
        <p>
          <span className="label">Variacion 24Hr: </span>
          <span
            className={
              parseFloat(changePercent24Hr).toFixed(3) > 0
                ? "positive"
                : "negative"
            }
          >
            {parseFloat(changePercent24Hr).toFixed(3)}%
          </span>
        </p>
        <Link to={`/criptomonedas/${id}`}>Ver detalles:</Link>
      </div>
    </div>
  );
};

export default Cripto