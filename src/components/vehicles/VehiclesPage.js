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
    }

    componentDidMount() {
        this.props.actions.fetchVehiclesAsync();
    }

    render() {
        return (
            <div className="row">
                <VehiclesList 
                    vehicles={this.props.vehicles} 
                    selectedIndex={this.props.selectedIndex}
                    createVehicle={this.props.actions.createVehicle} />
                {this.props.vehicles && <VehicleDetails vehicle={this.props.vehicles[0]} />}
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
        vehicles: state.vehicleData.vehicles,
        selectedIndex: state.vehicleData.selectedIndex
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(vehicleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (VehiclesPage);