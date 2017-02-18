import React, { PropTypes } from 'react';
import css from '../../styles/default.less';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import VehiclesList from './VehiclesList';
import VehicleDetails from './VehicleDetails';
import * as vehicleActions from '../../actions/vehicleActions';

class VehiclesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 1,
            vehicles: [
                {
                    id: 1,
                    name: "Ford Fiesta",
                    refills: [
                        { id: 1, date: "2017/01/05", isFullTank: true, value: 35, odometer: 20000 },
                        { id: 2, date: "2017/01/12", isFullTank: true, value: 38, odometer: 20560 },
                        { id: 3, date: "2017/01/18", isFullTank: true, value: 34, odometer: 20980 }
                    ]
                },
                { id: 2, name: "Toyota Corolla", refills: [] },
                { id: 3, name: "Honda Civic", refills: [] },
                { id: 4, name: "Audi R8", refills: [] },
                { id: 5, name: "Mitsubhishi Challenger", refills: [] }
            ]
        };

        this.addNewVehicle = this.addNewVehicle.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchVehiclesAsync();
    }

    addNewVehicle(name) {
        let newVehicle = { id: this.state.vehicles.length + 2, name: name, refills: [] };
        this.setState({ vehicles: [...this.state.vehicles, newVehicle] });
    }

    render() {
        return (
            <div className="row">
                <VehiclesList 
                    vehicles={this.props.vehicles} 
                    selectedIndex={this.state.selectedIndex}
                    onAddNew={this.addNewVehicle} 
                    createVehicle={this.props.actions.createVehicle} />
                <VehicleDetails vehicle={this.state.vehicles[this.state.selectedIndex - 1]} />
            </div>
        );
    }
}

VehiclesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    selectedIndex: PropTypes.number.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        vehicles: state.vehicles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(vehicleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (VehiclesPage);