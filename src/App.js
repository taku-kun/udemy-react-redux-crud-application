import React, {Component} from 'react';
// import React  from 'react';


// Parent component
const App = () => (<Counter></Counter>);

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handlePlusButton = ()=> {this.setState({count: this.state.count + 1}) };

  handleMinusButton = ()=> { this.setState({count: this.state.count - 1}) };

  // setState の callback で render が実行される
  render() {
    console.log("Render!");
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}




export default App;

// return <input type="text" onClick={()=> console.log('Hello World')} />
    // const greeting = 'Nice!'
    // const dom = <h1 className='foo'>{greeting}</h1>;
    // return dom;

  //   <div>
  //   <Bar />
  //   <input type="text" onChange={()=>console.log('Hello Mi')}/>
  //   <p>{greeting}</p>
  // </div>