import React, { PropTypes } from 'react';
import VehiclesListFormNew from './VehiclesListFormNew';

export default class VehiclesList extends React.Component {
    constructor(props) {
        super(props);

        this.vehicleRow = this.vehicleRow.bind(this);
    }

    selectVehicle(index, event) {
        const vehicleClickedOn = this.props.vehicles[index];
        this.props.selectVehicle(vehicleClickedOn);
        event.preventDefault();
    }

    vehicleRow (vehicle, index) { 
        let className = "";
        if(this.props.selectedVehicle === vehicle) {
            className = "selected";
        }
        return (
            <li key={vehicle.id} className={className}>
                <a href="#" onClick={this.selectVehicle.bind(this, index)}><big>{vehicle.name.substring(0,1)}</big>{vehicle.name}</a>
            </li>
          );
    }

    render() {
        return (
            <div className="vehicle-list-block col-sm-4">
                <ul className="vehicle-list">
                    {this.props.vehicles && this.props.vehicles.map(this.vehicleRow, this)}
                </ul>
                <div className="vehicle-form-new">
                    <VehiclesListFormNew createVehicle={this.props.createVehicle} />
                </div>
            </div>
        );
    }
}

VehiclesList.propTypes = {
    vehicles: PropTypes.array.isRequired,
    createVehicle: PropTypes.func.isRequired,
    selectVehicle: PropTypes.func.isRequired
};