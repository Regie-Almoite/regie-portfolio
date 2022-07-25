import React, { useState } from "react";
const Navbar = () => {
    let [active, setActive] = useState(false);

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <h1 className="nav-brand">R.A.</h1>
                <ul className={`nav-list ${active ? "active" : ""}`}>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#header"
                            onClick={() => setActive(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#about"
                            onClick={() => setActive(false)}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#projects"
                            onClick={() => setActive(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#contact"
                            onClick={() => setActive(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div
                    className={`hamburger ${active ? "active" : ""}`}
                    onClick={() => setActive(!active)}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
