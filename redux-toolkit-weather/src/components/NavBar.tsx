import { NavLink, Link } from "react-router-dom";
import classes from "./NavBar.module.scss";
import { BsSun, BsMoonStars } from "react-icons/bs";
import {NavBarConsts} from "../constants/WeatherConsts"

const NavBar = () => {
    const {HOME_PAGE_TITLE, HOME, FAVORITES, GLOBE} = NavBarConsts;

    return (
        <nav className={classes.navbarContainer}>
            <Link className={classes.navLogo} to='/'>
                <BsSun className={classes.logo}/>
                <h1 className={classes.logoTitle}>{HOME_PAGE_TITLE}</h1>
            </Link>

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