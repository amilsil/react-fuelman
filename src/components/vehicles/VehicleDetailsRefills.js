import React, { PropTypes } from 'react';
import VehicleDetailsRefillForm from './VehicleDetailsRefillForm';

export default class VehicleDetailsRefills extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.refills);
    }
    
    refillRow(refill) {
        return (
            <li key={refill.id} className="vehicle-refill_row">
                <span className="refill-date">{refill.date}</span>
                <span className="refill-odometer">{refill.odometer} km</span>
                <span className="refill-amount">{refill.value} l</span>
                <span className="refill-type">{refill.isFullTank? "Full Tank": "Partial"}</span>
            </li>
        );
    }

    render() {
        return (
            <div className="vehicle-refill_block">
                <h2>Recent Refills</h2>

                <VehicleDetailsRefillForm />
                
                <ul className="vehicle-refill_list">
                    {this.props.refills.map(this.refillRow)}
                </ul>
            </div>
        );
    }
}

VehicleDetailsRefills.propTypes = {
    refills: PropTypes.array.isRequired 
};