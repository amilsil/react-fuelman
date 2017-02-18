import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CounterPage from './components/counter/CounterPage';
import VehiclesPage from './components/vehicles/VehiclesPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={VehiclesPage} />
        <Route path="about" component={AboutPage} />
        <Route path="counter" component={CounterPage} />
    </Route>
);