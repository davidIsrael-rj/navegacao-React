import { Link } from 'react-router-dom';
import './Menu.css';
import React from 'react';

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Início</Link>

                </li>
                <li>
                    <Link to={"/about"}>Sobre</Link>

                </li>
                <li>
                    <Link to={"/param/01"}>Parâmetros #01</Link>

                </li>
                <li>
                    <Link to={"/param/02"}>Parâmetros #02</Link>

                </li>
                <li>
                    <Link to={"/par"}>link não existe</Link>

                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu