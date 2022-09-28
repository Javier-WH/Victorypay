import React, { useState, useEffect ,createContext} from "react";


export const OptionsContainerContext = createContext();


const refreshExchangeTimer = 600000
export function OptionsContainerContextProvider({children}){
    const [activeTab, setActiveTab] = useState("1");
    const [exchangeRate, setExchangeRate ] = useState("0")

    useEffect(() => {
        async function fetchData(){
            try {
                const result = await fetch("https://s3.amazonaws.com/dolartoday/data.json");
                const exrate = await result.json();
                setExchangeRate(exrate);
            } catch (error) {
                console.log("No se ha podido conectar al api de Dollartoday")
            }
           // console.log("Actualzando tasas de cambio")
  
        }
        fetchData();
        setInterval(() => {
            fetchData(); 
        }, refreshExchangeTimer);
      },[])

    let value = {
        activeTab,
        setActiveTab,
        exchangeRate,
        setExchangeRate,
        refreshExchangeTimer
    }



    return <OptionsContainerContext.Provider value={value}>
            {children}
        </OptionsContainerContext.Provider>
}