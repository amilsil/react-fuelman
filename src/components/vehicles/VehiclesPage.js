import React, { PropTypes } from 'react';
import css from '../../styles/default.less';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import VehiclesList from './VehiclesList';
import VehicleDetails from './VehicleDetails';
import * as vehicleActions from '../../actions/vehicleActions';
import { fuelConsumptionSelector } from '../../selectors/fuelConsumptionSelector';

class VehiclesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetchVehiclesAsync();
    }

    render() {
        return (
            <div className="row">
                <VehiclesList
                    vehicles={this.props.vehicles}
                    selectedVehicle={this.props.selectedVehicle}
                    createVehicle={this.props.actions.createVehicle}
                    selectVehicle={this.props.actions.selectVehicle} />
                {this.props.vehicles && <VehicleDetails
                    consumption={this.props.consumption}
                    vehicle={this.props.selectedVehicle} />}
            </div>
        );
    }
}

VehiclesPage.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        vehicles: state.vehicleData.vehicles,
        selectedVehicle: state.vehicleData.selectedVehicle,
        consumption: fuelConsumptionSelector(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(vehicleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesPage);