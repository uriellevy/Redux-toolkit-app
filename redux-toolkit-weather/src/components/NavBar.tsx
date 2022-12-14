import { NavLink, Link } from "react-router-dom";
import classes from "./NavBar.module.scss";
import { BsSun, BsMoonStars } from "react-icons/bs";
import {NavBarConsts} from "../constants/WeatherConsts"
import HamburgerMenu from "./HamburgerMenu";
import UseBoolean from ".././hooks/UseBoolean"

const NavBar = () => {
    const {HOME_PAGE_TITLE, HOME, FAVORITES, GLOBE} = NavBarConsts;
    const [isMenuOpen , {setFalse, setTrue, setToggle}] = UseBoolean(false)

    return (
        <nav className={classes.navbarContainer}>
            <Link className={classes.navLogo} to='/'>
                <BsSun className={classes.logo}/>
                <h1 className={classes.logoTitle}>{HOME_PAGE_TITLE}</h1>
            </Link>

            <HamburgerMenu setToggle={setToggle} setFalse={setFalse} isMenuOpen={isMenuOpen}/>

            <ul className={classes.linksWrapper}>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? `active` : 'inactive')}
                >
                    {HOME}
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    {FAVORITES}
                </NavLink>
                <NavLink
                    to="/globe"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    {GLOBE}
                </NavLink>

            </ul>
        </nav>
    )
}

export default NavBar