import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/commentpage">Comment Page</Link>
                    </li>
                    <li>
                        <Link to="/seasons">Seasons</Link>
                    </li>
                    <li>
                        <Link to="/pics">Pics</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;