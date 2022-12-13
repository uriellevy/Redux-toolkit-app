import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.scss";


const NavBar = () => {

    return (
        <nav className={classes.navbarContainer}>
            <NavLink className={classes.navLogo} to='/'>
                <h1 className={classes.logoTitle}>logo</h1>
            </NavLink>

            <ul className={classes.linksWrapper}>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? `active` : 'inactive')}
                >
                    home
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    favorites
                </NavLink>
                <NavLink
                    to="/globe"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    globe
                </NavLink>

            </ul>
        </nav>
    )
}

export default NavBar