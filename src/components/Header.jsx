import { useState } from "react";
import { useAuth } from '../App';
// import searchIcon from '../../public/assets/baseline-search-24px.svg';
import UserAccountButton from "./UserAccountButton";
import CreateAccountButton from "./CreateAccountButton";

export default function Header(props) {
    const { loggedIn, setLoggedIn } = useAuth();

    return (
        <div className="header-desktop">
            <div className="logo">
                <img src="../../../public/assets/logo.svg" width='163px' alt='logo'/>
            </div>
            <div className="search-box">
                {/* <img src={searchIcon} /> */}
                <img src='../../../public/assets/baseline-search-24px.svg' />
                <input placeholder='Search for your favourite groups in ATG' />
            </div>
            <div>
                {loggedIn ? <UserAccountButton username={props.username}/> : <CreateAccountButton />}
            </div>
        </div>
    )
}