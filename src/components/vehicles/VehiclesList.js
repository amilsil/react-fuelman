import React from 'react';

export default function VehiclesList(props) {
    return (
        <div className="vehicle-list-block col-sm-4">
            <ul className="vehicle-list">
                <li><a href="#">Ford Fiesta</a></li>
                <li className="selected"><a href="#">Toyota Corolla</a></li>
                <li><a href="#">Honda Civic</a></li>
                <li><a href="#">Audi Rx8</a></li>
                <li><a href="#">Mitsubhishi Challenger</a></li>
                <li className="vehicle-list_new"><a href="#">New...</a></li>
            </ul>
        </div>
    );
}