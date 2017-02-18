import React from 'react';

export default function VehicleDetailsRefillForm(props) {
    return (
        <div className="vehicle-refill_form">
            <span className="refill-date">
                <input type="date" />
            </span>
            <span className="refill-odometer">
                <input type="text" placeholder="Odometer" />
            </span>
            <span className="refill-amount">
                <input type="text" placeholder="litres" />
            </span>
            <span className="refill-type">
                <select>
                    <option>FULL TANK</option>
                    <option>PARTIAL</option>
                </select>
            </span>
        </div>
    );
}