import React from 'react';
import VehicleDetailsSummary from './VehicleDetailsSummary';
import VehicleDetailsRefills from './VehicleDetailsRefills';

export default function VehicleDetails (props) {
    if(props.vehicle === null)
        return null;
    
    return (
        <div className="vehicle-detail-block col-sm-8">
            <VehicleDetailsSummary vehicle={props.vehicle} consumption={props.consumption} />    
            <VehicleDetailsRefills refills={props.vehicle.refills} />
        </div>
    );
}