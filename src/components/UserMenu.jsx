import { useState } from "react";
import { ImUser } from "react-icons/im";
import "../styles/userMenu.css";

export function UserMenu() {
    let userName = "Michael Schumajer Meteoro";
    const [screenWidth, setScreenWidth] = useState(window.outerWidth);

    function handleResize() {
        let sw = window.outerWidth;
        setScreenWidth(sw);
    }
    window.addEventListener('resize', handleResize)

    if (screenWidth >= 1024) {
        return <div id="userMenu-container">
            <label htmlFor="" id="userMenu-name">{userName}</label>
            <ImUser id="userMenu-img" size='30px' color="white" />
        </div>
    }else{
        return <div id="userMenu-container">
        <ImUser id="userMenu-img" size='30px' color="white" />
    </div>
    }

}