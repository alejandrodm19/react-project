import { useEffect } from "react"
import { useState } from "react";
import Cripto from "./Cripto";
import "./Cuadricula.css"

import axios from "axios";


function Cuadricula() {


    const API_URL = import.meta.env.VITE_API_URL;

    const [criptos, setCriptos] = useState()

    useEffect(() => {
        axios.get(`${ API_URL }assets`)
            .then((data) => {
                console.log(data)
                setCriptos(data.data.data);
            })
            .catch(() => {
                console.error("Error fetching")
            });
    }, [])

    if (!criptos) return <span>Cargando...</span>


    return (
      <div className="app-container">
        <h1>Lista de Cryptos</h1>

        <div className="cripto-container">
          {criptos.map(
            ({
              id,
              name,
              priceUsd,
              symbol,
              changePercent24Hr,
              marketcapusd,
              volumeusd24hr,
              vwap24hr,
            }) => (
              <Cripto
                key={id}
                name={name}
                priceUSD={priceUsd}
                symbol={symbol}
                changePercent24Hr={changePercent24Hr}
                marketcapusd={marketcapusd}
                volumeusd24hr={volumeusd24hr}
                vwap24hr={vwap24hr}
                id={id}
              />
            )
          )}
        </div>
      </div>
    );
}

export default Cuadricula;
