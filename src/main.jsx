import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cuadricula from "./Cuadricula.jsx";
import "./main.css";
import Page404 from "./404.jsx";
import Home from "./Home.jsx";
import CriptoPage from "./CriptoPage.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App/>}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="/criptomonedas" element={<App/>}>
            <Route index element={<Cuadricula />} />
            <Route path=":id" element={<CriptoPage/>}/>    
        </Route>    
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>

);
