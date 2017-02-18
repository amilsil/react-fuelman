import React, { PropTypes } from 'react';

export default class VehiclesListFormNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddingNew: false,
            name: ''
        };

        this.performAddNew = this.performAddNew.bind(this);
        this.prepareAddNew = this.prepareAddNew.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    prepareAddNew() {
        this.setState({ isAddingNew: true });
    }

    performAddNew(event) {
        this.props.createVehicle(this.state.name);
        this.setState({ isAddingNew: false });
        event.preventDefault();
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        if (this.state.isAddingNew === true)
            return (
                <form onSubmit={this.performAddNew}>
                    <big/>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                </form>
            );
        else
            return <span onClick={this.prepareAddNew}><big/>New...</span>;
    }
}

VehiclesListFormNew.propTypes = {
    createVehicle: PropTypes.func.isRequired
};