import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Nav = () => {

    return (
        <nav className={`nav-container`}>
            <NavLink className="nav-logo" to='/'>
                <h1 className="logo-title">logo</h1>
            </NavLink>

            <ul className="sdsadsa">
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
                    to="/mostPopular"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    others
                </NavLink>

            </ul>
        </nav>
    )
}

export default Nav