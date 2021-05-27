import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">React News App Demo Project by NL</Link>
                </div>
            </nav>
        )
    }
}

export default Header;