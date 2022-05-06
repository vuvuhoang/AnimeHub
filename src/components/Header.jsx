import React from 'react';
import logo from "../assets/logo.gif";
import "../styling/Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Nav(props) {

    function openMenu() {
        document.body.classList += " menu--open";
    }
    
    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

    return (
        <nav>
            <div className="nav__container">
                <figure>
                    <img className="logo" src={logo} alt="" />
                </figure>
                <div className="title">
                    <h1>ANIME HUB</h1>
                </div>
                <div className="nav__links">
                    <form className="searchbar" onSubmit={props.HandleSearch}>
                        <FontAwesomeIcon icon="magnifying-glass" />
                        <input 
                            placeholder="Search Anime" 
                            type="text"
                            required
                            value={props.search}
                            onChange={e => props.SetSearch(e.target.value)} 
                            />
                    </form>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </div>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link" onClick={closeMenu}>
                                Home
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href="/books" className="menu__link" onClick={closeMenu}>
                                Anime Lists
                            </a>
                        </li>
                        <li className="menu__list">
                            <form className="searchbar__menu" 
                                onSubmit={props.HandleSearch}
                            >
                                <FontAwesomeIcon icon="magnifying-glass" />
                                <input 
                                placeholder="Search Anime" 
                                type="text"
                                required
                                value={props.search}
                                onChange={e => props.SetSearch(e.target.value)} />
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
