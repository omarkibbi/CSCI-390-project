
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav>
            <div className="navbar">

                <ul className="NavLeft">
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/albums" onClick={closeMenu}>Albums</Link></li>
                </ul>

                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src="images/logo.png" alt="Daft Punk Logo" />
                    </Link>
                </div>

                <ul className="NavRight">
                    <li><Link to="/songs" onClick={closeMenu}>Songs</Link></li>
                    <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                    <li><Link to="/movie" onClick={closeMenu}>Movie</Link></li>
                </ul>

                <button
                    className="dropdown-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            <ul className={`dropdown-menu${menuOpen ? " open" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/albums" onClick={closeMenu}>Albums</Link></li>
                <li><Link to="/songs" onClick={closeMenu}>Songs</Link></li>
                <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                <li><Link to="/movie" onClick={closeMenu}>Movie</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;