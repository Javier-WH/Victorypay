import "../styles/exchangeCard.css";
import dolartodaylogo from "../svg/dolartodaylogo.svg";

export function ExchangeCard({rate, name, icon}){
    
    return <div className="exchangeCard">
        <div className="exchangeCard-message">Bolivares por Dolar</div>
        <div className="exchangeCard-value">{rate}</div>
        <div className="exchangeCard-name-container">
            <img src={dolartodaylogo} alt="" className="exchangeCard-logo" />
            <div className="exchangeCard-name">{name}</div>
        </div>
    </div>
}