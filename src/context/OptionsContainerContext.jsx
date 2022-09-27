import React, { useState, useEffect ,createContext} from "react";


export const OptionsContainerContext = createContext();

export function OptionsContainerContextProvider({children}){
    const [activeTab, setActiveTab] = useState("1");
    const [exchangeRate, setExchangeRate ] = useState("0")

    useEffect(() => {
        async function fetchData(){
            const result = await fetch("https://s3.amazonaws.com/dolartoday/data.json");
            const exrate = await result.json()
            setExchangeRate(exrate);
            console.log("Actualzando tasas de cambio")
        }
        fetchData();
        setInterval(() => {
            fetchData();   
        }, 600000);
      },[])
      
    let value = {
        activeTab,
        setActiveTab,
        exchangeRate,
        setExchangeRate
    }



    return <OptionsContainerContext.Provider value={value}>
            {children}
        </OptionsContainerContext.Provider>
}