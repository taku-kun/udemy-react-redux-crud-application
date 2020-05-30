import React, {Component} from 'react';
import { connect } from 'react-redux';
// import React  from 'react';
import { increment, decrement } from '../actions';

// Parent component
class App extends Component {


  // setState の callback で render が実行される
  render() {

    const props = this.props;

    console.log("Render!");
    return (
      <React.Fragment>
        <div>counter: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({value: state.counts.value});
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);




// return <input type="text" onClick={()=> console.log('Hello World')} />
    // const greeting = 'Nice!'
    // const dom = <h1 className='foo'>{greeting}</h1>;
    // return dom;

  //   <div>
  //   <Bar />
  //   <input type="text" onChange={()=>console.log('Hello Mi')}/>
  //   <p>{greeting}</p>
  // </div>