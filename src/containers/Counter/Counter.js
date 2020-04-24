import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions'
import * as actionCreator from '../../store/actions/actions'
class Counter extends Component {
    state = {
        counter: 0,
        // results: []
    }
    // valueStoreHandler = () => {
    //     return this.state.results.push(this.props.ctr)
    // }
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractionCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResults => (
                        <li key ={strResults.id} onClick={() => this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                            )   
                        )
                    }
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: () => dispatch(actionCreator.decrement()),
        onAdditionCounter: () => dispatch(actionCreator.addition(10)),
        onSubtractionCounter: () => dispatch(actionCreator.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreator.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreator.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);