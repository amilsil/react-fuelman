import React, { PropTypes } from 'react';

export default class VehiclesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddingNew: false,
            newVehicleName: ''
        }

        this.vehicleRow = this.vehicleRow.bind(this);
        this.prepareNew = this.prepareNew.bind(this);
        this.newForm = this.newForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNew = this.addNew.bind(this);
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

    prepareNew() {
        this.setState({ isAddingNew: true });
    }

    addNew() {
        if(this.state.newVehicleName.length > 0)
            this.props.createVehicle(this.state.newVehicleName);
    }

    handleChange(event) {
        this.setState({ newVehicleName: event.target.value });
    }

    newForm() {
        if(this.state.isAddingNew === false) {
            return (<span>New...</span>);
        } 
        else {
            return (
                <span>
                    <input type="text" value={this.state.newVehicleName} onChange={this.handleChange} />
                    <button onClick={this.addNew}>done</button>
                </span>
            );
        }
    }

    render() {
        return (
            <div className="vehicle-list-block col-sm-4">
                <ul className="vehicle-list">
                    {this.props.vehicles && this.props.vehicles.map(this.vehicleRow)}
                    <li className="vehicle-list_new">
                    <a href="#" onClick={this.prepareNew}><big></big>{this.newForm()}</a>
                </li>
                </ul>
            </div>
        );
    }
}

VehiclesList.propTypes = {
    selectedIndex: PropTypes.number.isRequired,
    vehicles: PropTypes.array.isRequired
};