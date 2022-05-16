import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="ui secondary menu">
            <NavLink exact={true} activeClassName="active" className="item" to="/">Home</NavLink>
            <NavLink activeClassName="active" className="item" to="/accordion">Accordion Page</NavLink>
            <NavLink activeClassName="active" className="item" to="/comments">Comment Page</NavLink>
            <NavLink activeClassName="active" className="item" to="/seasons">Seasons</NavLink>
            <NavLink activeClassName="active" className="item" to="/pics">Pics</NavLink>
            <NavLink activeClassName="active" className="item" to="/videos">Videos</NavLink>
            <NavLink activeClassName="active" className="item" to="/translate">Translate</NavLink>
        </div>
    );
};

export default Navbar;