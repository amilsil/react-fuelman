import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <IndexLink className="navbar-brand" to="/">Fuelman</IndexLink>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><IndexLink to="/" activeclassNameName="active">Home</IndexLink></li>
                        <li><Link to="/about" activeclassNameName="active">About</Link></li>
                        <li><Link to="/counter" activeclassNameName="active">Counter</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;