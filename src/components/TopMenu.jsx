import { useState } from "react";
import { useContext } from "react";

import { OptionsContainerContext } from "../context/OptionsContainerContext"
import "../styles/topMenu.css";


export function TopMenu() {

    const { setActiveTab } = useContext(OptionsContainerContext);
    const [screenWidth, setScreenWidth] = useState(window.outerWidth);

    function handleResize() {
        let sw = window.outerWidth;
        setScreenWidth(sw);
    }
    window.addEventListener('resize', handleResize)



    function setTab(e) {
        let tabs = document.getElementsByClassName("nav-link");
        let tabNumber = e.target.id.replace("tab", "");
        setActiveTab(tabNumber);

        for (let tab of tabs) {
            tab.classList.remove("active");
        }
        e.target.classList.add("active");
        document.getElementById("menu-toggle").checked = false
    }
    //flex-column
    if (screenWidth >= 1024) {
        return <>
    
            <ul className="nav nav-tabs" id="topMenu" onClick={setTab}>
                <li className="nav-item">
                    <div className="nav-link active" id="tab1">Pagos</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" id="tab2">Estadísticas</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" id="tab3">Tasa de Cambio</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" id="tab4">Configuración</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" id="tab5">Ayuda</div>
                </li>
            </ul>
        </>
    } else {
        return <div id="menu-mobil-container">
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu" onClick={setTab}>
                <li className="nav-item">
                    <div className="nav-link active" id="tab1"> Pagos</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" id="tab2">Estadísticas</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" id="tab3">Tasa de Cambio</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" id="tab4">Configuración</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" id="tab5">Ayuda</div>
                </li>
            </ul>
        </div>

    }
}



