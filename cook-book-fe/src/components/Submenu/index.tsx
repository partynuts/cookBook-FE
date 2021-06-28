import * as React from 'react';
import './style.css';
import * as MenuItems from '../../locales/EN/submenu-items';
import {Link} from "react-router-dom";
import {SubMenuItem} from "../../config/menu";

type Props = {
    submenuItems: SubMenuItem[];
}

function Submenu({ submenuItems}: Props) {
    return (
        <ul id="nav_submenu" className="nav__submenu">
            {submenuItems?.map(item => {
                console.log("ITEM SUB", item)
                return <>
                    <li className="nav__submenu-item ">
                        <div style={{color: "darkolivegreen"}}><Link to={'/recipe'}>{item.name}</Link></div>
                    </li>
                </>
            }
            )}
        </ul>
    )
}

export default Submenu;
