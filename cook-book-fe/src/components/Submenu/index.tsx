import * as React from 'react';
import './style.css';
import {Link} from "react-router-dom";
import {SubMenuItem} from "../../config/menu";

type Props = {
    submenuItems: SubMenuItem[];
}

function Submenu({submenuItems}: Props) {
    return (
        <ul id="nav_submenu" className="nav__submenu">
            {submenuItems?.map((item: SubMenuItem, i: number) =>
                <li className="nav__submenu-item " key={i}>
                    <div style={{color: "darkolivegreen"}}><Link to={item.url}>{item.name}</Link></div>
                </li>
            )}
        </ul>
    )
}

export default Submenu;
