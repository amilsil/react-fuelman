import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>React Redux Starter</h1>
                <p>React stuff</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn  more</Link>
            </div>
        );
    }
}

export default HomePage;