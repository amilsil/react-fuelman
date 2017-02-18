import React from 'react';

export default function VehicleDetailsSummary(props) {
    return (
        <div className="vehicle-summary_block">
            <h1>Toyota Corolla</h1>
            <div className="vehicle-mileage">
                <label>MILEAGE</label>
                <span className="value">9.7</span>
                <span className="unit">l/100 km</span>
            </div>
            <div className="vehicle-odometer">
                <label>ODOMETER</label>
                <span className="value">23,455</span>
                <span className="unit">km</span>
            </div>
        </div>
    );
}