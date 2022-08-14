import React from 'react';
import "../Styles/sidebar.css";
import HamburgerMenu from '../Assets/Icons/Hambuger.svg';
import McDonald from '../Assets/Images/McDonalds.jpg';
import SelectorIcon from "../Assets/Icons/Selector.svg";
import Profile from './Profile';

export const SideBar = () : JSX.Element=> {
  return (
    <div className="sidebar-container smartWage-align-vertical-space">
        <header className="smartWage-align-horizontal sw-pt-40">
            <img src={HamburgerMenu} className="sidebar-menu sw-icon sw-mr-20" alt="menu" />
            <p className="sidebar-title smartWage-typography-title">Smartwage</p>
        </header>
        <div className="bottom-sidebar-content">
            <Profile profilePic={McDonald} SelectorIcon={SelectorIcon}/>
        </div>
    </div>
  )
}