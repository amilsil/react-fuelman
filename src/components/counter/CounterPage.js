import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../../actions/counterActions';

class CounterPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.props.actions.incrementCount();
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>Count is {this.props.count}</h2>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

CounterPage.propTypes = {
    count: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        count: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);