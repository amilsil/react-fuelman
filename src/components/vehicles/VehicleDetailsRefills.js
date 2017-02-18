import React from 'react';
import VehicleDetailsRefillForm from './VehicleDetailsRefillForm';

export default function VehicleDetailsRefills(props) {
    return (
        <div className="vehicle-refill_block">
            <h3>Recent Refills</h3>
            <VehicleDetailsRefillForm />
            
            <ul className="vehicle-refill_list">
                <li className="vehicle-refill_row">
                    <span className="refill-date">Yesterday</span>
                    <span className="refill-odometer">23,098 km</span>
                    <span className="refill-amount">34.5l</span>
                    <span className="refill-type">Full Tank</span>
                </li>
                <li className="vehicle-refill_row">
                    <span className="refill-date">14th, Feb</span>
                    <span className="refill-odometer">22,576 km</span>
                    <span className="refill-amount">38.5l</span>
                    <span className="refill-type">Full Tank</span>
                </li>
            </ul>
        </div>
    );
}