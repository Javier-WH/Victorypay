import { ImUser } from "react-icons/im";
import "../styles/userMenu.css";

export function UserMenu(){
    let userName = "Michael Schumajer Meteoro"

    return <div id="userMenu-container">
        <label htmlFor="" id="userMenu-name">{userName}</label>
        <ImUser id="userMenu-img" size= '30px' color="white"/>
    </div>
}