import { ReactElement } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";


export default function NavBar(): ReactElement {
    return (<>
        <nav>
            <div className="container__nav">
                <Link to={"/"} className="nav--logo">AssertionBit</Link>
                <div className="nav--links">
                    <Link to={"/about"}>About me</Link>
                    <Link to={"/cotacts"}>Contacts</Link>
                    <Link to={"/works"}>Works</Link>
                </div>
            </div>
        </nav>   
    </>)
}
