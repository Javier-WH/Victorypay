import React, { useState,createContext} from "react";


export const OptionsContainerContext = createContext();

export function OptionsContainerContextProvider({children}){
    const [activeTab, setActiveTab] = useState("1");
    let value = {
        activeTab,
        setActiveTab
    }

    return <OptionsContainerContext.Provider value={value}>
            {children}
        </OptionsContainerContext.Provider>
}