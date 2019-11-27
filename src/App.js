import React, {Component} from 'react';
// import React  from 'react';


// Parent component
const App = () => {

  const profiles = [
    {name: 'MI', age: 27},
    {name: 'HAMA', age:5 },
    {name: 'TAKU'}
  ];

  return (
    <React.Fragment>
      {profiles.map((prof, index) => (
        <User name={prof.name} age={prof.age} key={index}/>
      ) )}
    </React.Fragment>

  )

};

// Child Component data import via props

const User = (props) => (
  <div>
    I am {props.name}. My job is SE. My age is {props.age}
  </div>
);

User.defaultProps = {
  age: 2
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