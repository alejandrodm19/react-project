import { useEffect } from "react"
import { useState } from "react";
import axios from "axios";

function App() {


    const API_URL = import.meta.env.VITE_API_URL;

    const [cryptos, setCryptos] = useState()

    useEffect(() => {
        axios.get(`${ API_URL }assets`)
            .then((data) => {
                console.log(data)
                setCryptos(data.data.data);
            })
            .catch(() => {
                console.error("Error fetching")
            });
    }, [])

    if (!cryptos) return <span>Cargando...</span>


    return (
    <>
        <h1>Lista de Cryptos</h1>
        
        <ol>
            {
                cryptos.map(({ id, name, priceUsd }) => (
                    <li key={id}>Nombre: {name} Precio: {priceUsd }</li>
                ))
            }        
        </ol>
    
    
    </>
      
    
      
      
  )
}

export default App
