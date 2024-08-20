import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-left">
                <Link to='/'>Home</Link>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <Link to='/trainer'>Trainer</Link>
                    </li>
                    <li>
                        <Link to='/pokemon'>Pokemon</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                {/* <a href="/cart" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">0</span>
                </a>
                <a href="/account" className="user-icon">
                <i className="fas fa-user"></i>
                </a> */}
            </div>
        </nav>
        </>
    );
}
export default NavBar;