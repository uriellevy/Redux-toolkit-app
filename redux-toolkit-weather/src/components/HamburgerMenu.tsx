import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./HamburgerMenu.module.scss"
import { NavBarConsts } from ".././constants/WeatherConsts"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { FaHome } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import { MdOutlineSecurityUpdateGood } from "react-icons/md"
import UseOutsideClick from "../hooks/UseOutsideClick"

interface HamburgerMenuProps {
    isMenuOpen: boolean
    setToggle: () => void
    setFalse: () => void
}

const HamburgerMenu = ({ setFalse, setToggle, isMenuOpen }: HamburgerMenuProps) => {
    const { HOME, MAPS, GLOBE } = NavBarConsts;
    const linksWrapperStyle = classes.hamburgerIcon + "" + isMenuOpen ? "" : "none";
    const ref = UseOutsideClick(setFalse);
    const openSettingsHandler = (event:any) => {
        setToggle();
        event.stopPropagation();
    };


    return (
        <div className={classes.hamburgerContainer} ref={ref}>
            {isMenuOpen ?
                <ul className={classes.linksWrapper}>
                    <RiCloseLine className={classes.closeBtn} onClick={setFalse}  />
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? `active` : 'inactive')}
                    >
                        <FaHome />
                        {HOME}
                    </NavLink>
                    <NavLink
                        to="/maps"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <MdOutlineSecurityUpdateGood />
                        {MAPS}
                    </NavLink>
                    <NavLink
                        to="/globe"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <BsGlobe />
                        {GLOBE}
                    </NavLink>
                </ul>
                :
                <RiMenu3Line className={classes.hamburgerIcon} onClick={openSettingsHandler} />
            }
        </div>
    )
}

export default HamburgerMenu