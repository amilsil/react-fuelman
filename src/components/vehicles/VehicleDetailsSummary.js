import React from 'react';

export default function VehicleDetailsSummary(props) {
    return (
        <div className="vehicle-summary_block">
            <h1>{props.vehicle.name}</h1>
            <div className="vehicle-mileage">
                <label>MILEAGE</label>
                <span className="value">{props.consumption}</span>
                <span className="unit">l/100 km</span>
            </div>
        </div>
    );
}