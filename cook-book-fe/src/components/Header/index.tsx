import * as React from 'react';
import './style.css';
import Submenu from "../Submenu";
import classnames from 'classnames';
import {MenuItem, menuItems} from "../../config/menu";

function Header() {
    return (
        <header className="header">
            <nav>
                <div className="header-navbar">
                    <ul>
                        {menuItems.map((item: MenuItem, i: number) =>
                            <li className="navbar-item" key={i}>
                                <div id={`nav_item_${item.label.toLowerCase()}`} className='nav_inner'>
                                    {item.label}
                                    <Submenu submenuItems={item.subItems} />
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="header-search">
                    <form>
                        <input type="search" placeholder="Search recipes" />
                        <input type="submit" />
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;


//                         <li className="navbar-item"><Link to="/recipe">Recipe</Link></li>


// models/menu.ts
// export async function getMenu(){
//     const recipes = await getRecipes()
//
//     return recipes.map
//     return [{
//         label: "Categories",
//         items: [
//             {
//                 name: 'All recipes',
//                 component: '/recipes'
//             },
//             {
//                 name: 'Salads',
//                 component: '/recipes'
//             },
//             {
//                 name: 'Soups',
//                 component: '/recipes'
//             },
//             {
//                 name: 'Add recipe',
//                 component: '/recipes'
//             },
//         ]
//     }]
// }
