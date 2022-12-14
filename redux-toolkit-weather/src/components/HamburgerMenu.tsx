import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./HamburgerMenu.module.scss"
import { NavBarConsts } from ".././constants/WeatherConsts"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { FaHome } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import { MdOutlineSecurityUpdateGood } from "react-icons/md"

interface HamburgerMenuProps {
    isMenuOpen: boolean
    setToggle: () => void
    setFalse: () => void
}

const HamburgerMenu = ({ setFalse, setToggle, isMenuOpen }: HamburgerMenuProps) => {
    const { HOME, FAVORITES, GLOBE } = NavBarConsts;
    const linksWrapperStyle = classes.hamburgerIcon + "" + isMenuOpen ? "" : "none";


    return (
        <div className={classes.hamburgerContainer}>
            <RiMenu3Line className={classes.hamburgerIcon} onClick={setToggle}/>
            <ul className={classes.linksWrapper}>
                <RiCloseLine className={classes.closeBtn} onClick={setFalse}/>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? `active` : 'inactive')}
                >
                    <FaHome />
                    {HOME}
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <MdOutlineSecurityUpdateGood/>
                    {FAVORITES}
                </NavLink>
                <NavLink
                    to="/globe"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <BsGlobe/>
                    {GLOBE}
                </NavLink>
            </ul>
        </div>
    )
}

export default HamburgerMenu