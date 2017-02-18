import React from 'react';
import css from '../../styles/default.less';
import VehiclesList from './VehiclesList';
import VehicleDetails from './VehicleDetails';

export default function VehiclesPage(props) {
    return (
        <div className="row">
            <VehiclesList />
            <VehicleDetails />
        </div>
    );
}