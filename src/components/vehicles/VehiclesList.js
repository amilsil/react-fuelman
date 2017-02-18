import React, { PropTypes } from 'react';
import VehiclesListFormNew from './VehiclesListFormNew';

export default class VehiclesList extends React.Component {
    constructor(props) {
        super(props);

        this.vehicleRow = this.vehicleRow.bind(this);
    }

    vehicleRow (vehicle) { 
        let className = "";
        if(this.props.selectedIndex === vehicle.id){
            className = "selected";
        }
        return (
            <li key={vehicle.id} className={className}>
                <a href="#"><big>{vehicle.name.substring(0,1)}</big>{vehicle.name}</a>
            </li>
          );
    }

    render() {
        return (
            <div className="vehicle-list-block col-sm-4">
                <ul className="vehicle-list">
                    {this.props.vehicles && this.props.vehicles.map(this.vehicleRow)}
                </ul>
                <div className="vehicle-form-new">
                    <VehiclesListFormNew createVehicle={this.props.createVehicle} />
                </div>
            </div>
        );
    }
}

VehiclesList.propTypes = {
    selectedIndex: PropTypes.number.isRequired,
    vehicles: PropTypes.array.isRequired,
    createVehicle: PropTypes.func.isRequired
};