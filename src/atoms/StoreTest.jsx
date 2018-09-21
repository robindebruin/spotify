import React from 'react';
import { connect} from 'react-redux'

const StoreTest = (props) => {
  return(
    <div>
    <p>{props.count}</p>
    <button onClick={props.increment}>+</button>
    <button  onClick={props.decrement}>-</button>
    </div>
 );
};

function mapStateToProps(state) {
  return {
    count: state
   };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreTest);