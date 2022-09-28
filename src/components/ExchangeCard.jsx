import "../styles/exchangeCard.css";
import dolartodaylogo from "../svg/dolartodaylogo.svg";
import dolarBill from "../svg/dollarBill.svg";
import cucuta from "../svg/cucuta.svg";
import BCV from "../svg/bcvLogo.svg"

export function ExchangeCard({ data }) {
    let { rate, name, icon } = data;

    return <div className="exchangeCard">
        <div className="exchangeCard-message">Bolivares por Dolar</div>
        <div className="exchangeCard-value">{rate}</div>
        <div className="exchangeCard-name-container">
            <img src={getIcon(icon)} alt="" className="exchangeCard-logo" />
            <div className="exchangeCard-name">{name}</div>
        </div>
    </div>
}


function getIcon(icon) {

    switch (icon) {
        case "DT":
            return dolartodaylogo
        case "CCT":
            return cucuta
        case "BCV":
            return BCV
        default:
            return dolarBill
    }

}