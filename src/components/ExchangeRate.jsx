import { ExchangeCard } from "./ExchangeCard";
import { OptionsContainerContext } from "../context/OptionsContainerContext";
import { useContext } from "react";

export function ExchangeRateFrame() {

    const { exchangeRate } = useContext(OptionsContainerContext);

    let dolarToday = {
        name: "DolarToday",
        rate: exchangeRate.USD.dolartoday,
        icon: "DT"
    }
    let cucuta = {
        name: "Cucuta",
        rate: exchangeRate.USD.efectivo_cucuta,
        icon: "CCT"
    }
    let sicad1 = {
        name: "Sicad1",
        rate: exchangeRate.USD.sicad1,
        icon: "BCV"
    }
    let sicad2 = {
        name: "Sicad2",
        rate: exchangeRate.USD.sicad2,
        icon: "BCV"
    }
    let efectivo = {
        name: "Efectivo",
        rate: exchangeRate.USD.efectivo,
        icon: "EFC"
    }


    return <>
        <ExchangeCard data={dolarToday} />
        <ExchangeCard data={cucuta} />
        <ExchangeCard data={sicad1} />
        <ExchangeCard data={sicad2} />
        <ExchangeCard data={efectivo} />
    </>
}


