import {Logo} from "./Logo";
import {TopMenu} from "./TopMenu";
import {UserMenu} from "./UserMenu";


import "../styles/navBar.css";


export function NavBar() {


    let navBarStyle = {backgroundColor: "#203864"};


    return <>
        <nav className="navbar navbar-dark " style={navBarStyle} id="navBar">
            <Logo/>
            <TopMenu/>
            <UserMenu/>
        </nav>

    </>
    
}

