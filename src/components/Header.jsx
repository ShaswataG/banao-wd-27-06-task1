import { useState } from "react";
import { useAuth } from '../App';
import searchIcon from '../assets/search.svg';
import logo from '../assets/logo.svg';
import UserAccountButton from "./UserAccountButton";
import CreateAccountButton from "./CreateAccountButton";

export default function Header(props) {
    const { loggedIn, setLoggedIn } = useAuth();

    return (
        <div className="header-desktop">
            <div className="logo">
                <img src={logo} width='163px' alt='logo'/>
            </div>
            <div className="search-box">
                <img src={searchIcon} />
                <input placeholder='Search for your favourite groups in ATG' />
            </div>
            <div>
                {loggedIn ? <UserAccountButton username={props.username}/> : <CreateAccountButton />}
            </div>
        </div>
    )
}