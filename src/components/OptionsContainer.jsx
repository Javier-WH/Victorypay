import { useContext } from "react";
import { OptionsContainerContext } from "../context/OptionsContainerContext"
import "../styles/optionsContainer.css"

import {ExchangeRateFrame} from "./ExchangeRate"


export function OptionsContainer() {

    const { activeTab } = useContext(OptionsContainerContext);
    
    return <div id="options-container">
            {getFrame(activeTab)}
    </div>
}

function getFrame(num) {
   
    switch (num) {
        case "1": //pagos
            return <h1>Pagos</h1>
        case "2": //estadisticas
            return <h1>Estadisticas</h1>
        case "3": //tasa de cambio
            return <ExchangeRateFrame/>
        case "4": //Configuracion
            return <h1>Configuracion</h1>
        case "5"://ayuda
            return <h1>ayuda</h1>
        default:
            return <h1>Desconocido</h1>  
    }
}