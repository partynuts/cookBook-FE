import * as React from 'react';
import {ChangeEvent, FormEvent, useState} from 'react';
import {useHistory} from "react-router-dom";

import Submenu from "../Submenu";
import {MenuItem, menuItems} from "../../config/menu";
import './style.css';

const Header = () => {
    const [searchParam, setSearchParam] = useState<string | undefined>();
    let history = useHistory();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParam(e.target.value)
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        history.push(`/recipes?search=${searchParam}`)
    };

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
                    <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                        <input
                            type="search"
                            placeholder="Search recipes"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        />
                        <input type="submit" />
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;
