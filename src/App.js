import React, {Component} from 'react';

const Bar =()=> (<label htmlFor="bar">bar</label>);

class App extends Component {
  render () {

    const greeting = 'Hi';
    return (
      <React.Fragment>
        <Bar />
        <input type="text" onChange={()=>console.log('Hello Mi')}/>
        <p>{greeting}</p>
      </React.Fragment>

    )
  }
};

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