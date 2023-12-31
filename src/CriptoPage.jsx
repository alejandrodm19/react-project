import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import dayjs from "dayjs";
import "./CriptoPage.css"

const CriptoPage = () => {
    const params = useParams()

    const API_URL = import.meta.env.VITE_API_URL;

    const [cripto, setCripto] = useState({})
    const [history, setHistory] = useState([])
    
    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then(data => {
          setCripto(data.data.data);
        })
        .catch(e => console.error(e))
        
        
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then(data => {
          setHistory(data.data.data);
        })
        .catch(e => console.error(e))
    }, [])



    


  return (
    <div className="cripto-page-container">
        <div className="info">
            <div className="main-info">
                <span>Rank: {cripto.rank}</span>
                <h1>{cripto.name}</h1>
                <span className="symbol">{ cripto.symbol}</span>  
            </div>
            <div className="details">
                <ul>
                    <li className="detail">
                        <span className="label">Precio:</span>
                        <span> {parseFloat(cripto.priceUsd, 3 )}</span>  
                    </li>          
                    <li className="detail">
                        <span className="label">Market Cap (USD):</span>
                        <span> {parseFloat(cripto.marketCapUsd, 3 )}</span>  
                    </li>      
                    <li className="detail">
                        <span className="label">Volumen: (USD - 24hrs)</span>
                        <span> {parseFloat(cripto.volumeUsd24hr, 3 )}</span>  
                    </li>      
                    <li className="detail">
                        <span className="label">Variacion: (24hrs)</span>
                        <span> {parseFloat(cripto.changePercent24hr, 3 )}</span>  
                    </li>      
                    <li className="detail">
                        <span className="label">Vwap 24hrs.</span>
                        <span> {parseFloat(cripto.vwap24hr, 3 )}</span>  
                    </li>      
                </ul>
            </div>  
        </div>
        <div className="history">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>  
                    </tr>      
                </thead>
                <tbody>
                      {history.reverse().map(({ date, priceUsd, time }) => (
                        <tr key={time}>
                            <td className="label"> { new Date(date).toDateString() }</td>
                            <td className="price"> { parseFloat(priceUsd, 3) }</td>
                        </tr>
                    ))}
                </tbody>  
            </table>      
        </div>  
    </div>
  );
}

export default CriptoPage;